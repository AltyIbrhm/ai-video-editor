# AI Video Editor Frontend

![Frontend CI/CD](https://github.com/ibrahimraimi/ai-video-editor/actions/workflows/frontend.yml/badge.svg)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Database Setup

## Environment Separation

The application uses PostgreSQL schemas to separate development and production data:

- **Development**: Uses `dev_schema`
- **Production**: Uses `prod_schema`

Both schemas can exist in the same database but are completely isolated. The separation is controlled by the `NODE_ENV` environment variable.

## Setup Commands

### Development Setup
```bash
npm run db:setup:dev
```
This will:
1. Create the development schema if it doesn't exist
2. Reset the database if needed
3. Apply all migrations
4. Seed the database with test data

### Production Setup
```bash
npm run db:setup:prod
```
This will:
1. Create the production schema if it doesn't exist
2. Apply all pending migrations
3. Never reset or seed the database

## Important Notes

- Development environment allows database resets and seeding
- Production environment only applies migrations and never resets data
- Make sure to set the correct `DATABASE_URL` in your environment variables
- The `NODE_ENV` variable controls which schema is used
