# TDA Connect

## Overview
A global virtual community for LGBTQIA+ refugees and asylum seekers to safely connect.A modern web application built with **Next.js**, **Tailwind CSS**, **Prisma**, **Supabase**, and **Google OAuth** for streamlined authentication and efficient database management.

## Features
- **Next.js**: Server-side rendering, static site generation, and optimized performance.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Prisma**: ORM for efficient database access and type-safe queries.
- **Supabase**: Open-source backend for authentication, storage, and database management.
- **Google OAuth**: Secure and seamless user authentication.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/SafePlaceInternational/TDA-Connect.git
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root of your project and add the following:
   ```env
   DATABASE_URL=your-supabase-url
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   NEXTAUTH_SECRET="some string"
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

4. Set up the database:
   - Initialize Prisma:
     ```bash
     npx prisma init
     ```
   - Update the `prisma/schema.prisma` file to define your database schema.
   - Push the schema to your database:
     ```bash
     npx prisma db push
     ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Scripts
- `dev`: Starts the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `prisma`: Prisma CLI commands.

## Acknowledgments
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Supabase](https://supabase.com/)
- [Google OAuth](https://developers.google.com/identity/sign-in/web/sign-in)

