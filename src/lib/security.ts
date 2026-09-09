import { SignJWT, jwtVerify } from "jose";
import { prisma } from "./prisma";

const SECRET = new TextEncoder().encode(process.env.AUTH_SECRET);

if (!process.env.AUTH_SECRET) {
  console.warn("AUTH_SECRET is not set in environment variables!");
}

export async function signToken(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(SECRET);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function checkRateLimit(ip: string, action: string, maxAttempts: number, windowMinutes: number) {
  const now = new Date();
  
  const existing = await prisma.rateLimit.findUnique({
    where: { ip_action: { ip, action } }
  });

  if (existing) {
    if (now > existing.resetAt) {
      await prisma.rateLimit.update({
        where: { id: existing.id },
        data: {
          count: 1,
          resetAt: new Date(now.getTime() + windowMinutes * 60000)
        }
      });
      return { success: true };
    } else {
      if (existing.count >= maxAttempts) {
        return { success: false, resetAt: existing.resetAt };
      } else {
        await prisma.rateLimit.update({
          where: { id: existing.id },
          data: { count: { increment: 1 } }
        });
        return { success: true };
      }
    }
  } else {
    await prisma.rateLimit.create({
      data: {
        ip,
        action,
        count: 1,
        resetAt: new Date(now.getTime() + windowMinutes * 60000)
      }
    });
    return { success: true };
  }
}

export async function logAudit(action: string, ip: string, details?: string) {
  try {
    await prisma.auditLog.create({
      data: { action, ip, details }
    });
  } catch (error) {
    console.error("Failed to write audit log:", error);
  }
}
