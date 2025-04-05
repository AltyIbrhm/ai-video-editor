import { PrismaClient } from '@prisma/client';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function setupDatabase() {
  const isDev = process.env.NODE_ENV === 'development';
  const schemaName = isDev ? 'dev_schema' : 'prod_schema';
  
  const prisma = new PrismaClient();
  
  try {
    // Create schema if it doesn't exist
    await prisma.$executeRawUnsafe(`CREATE SCHEMA IF NOT EXISTS ${schemaName};`);
    
    // Set search path to use the appropriate schema
    await prisma.$executeRawUnsafe(`SET search_path TO ${schemaName};`);
    
    console.log(`Using schema: ${schemaName}`);
    
    if (isDev) {
      // In development, we can be more aggressive with resets
      try {
        await execAsync('npx prisma migrate deploy');
      } catch (error) {
        console.log('Development database needs reset, performing reset...');
        await execAsync('npx prisma migrate reset --force');
        await execAsync('npx prisma migrate deploy');
      }
      // Seed data only in development
      await execAsync('npx prisma db seed');
    } else {
      // In production, we only deploy migrations
      try {
        await execAsync('npx prisma migrate deploy');
      } catch (error) {
        console.error('Failed to deploy migrations in production. This might indicate:');
        console.error('1. The database schema is not empty');
        console.error('2. There are pending migrations that need to be applied');
        console.error('3. The database user lacks necessary permissions');
        throw error;
      }
    }
    
    console.log('Database setup completed successfully');
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

setupDatabase(); 