import { PrismaClient, Prisma } from '@prisma/client';

// Log levels based on environment
const logLevels: Prisma.LogLevel[] = process.env.NODE_ENV === 'development' 
  ? ['query', 'error', 'warn']
  : ['error'];

// Initialize Prisma Client with environment-specific settings
function createPrismaClient() {
  const client = new PrismaClient({
    log: logLevels,
    // Add more environment-specific options here
  });

  // Add additional logging in development
  if (process.env.NODE_ENV === 'development') {
    client.$use(async (params, next) => {
      const before = Date.now();
      const result = await next(params);
      const after = Date.now();
      console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);
      return result;
    });
  }

  return client;
}

// Prevent multiple instances in development
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export * from '@prisma/client'; 