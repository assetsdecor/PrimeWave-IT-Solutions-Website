# Prime Wave - IT Company Website & Digital Products Marketplace

A comprehensive Next.js 14 application for an IT company website with integrated digital product marketplace, payment processing, and admin dashboard.

## Features

- 🏢 **Company Website**: Full-featured company website with services, team, portfolio, and more
- 🛒 **Digital Marketplace**: Buy and download digital products (apps, software, systems)
- 💳 **Payment Integration**: Stripe and Paystack support
- 👤 **User Dashboard**: Manage purchases, downloads, and profile
- 🔐 **Admin Dashboard**: Complete admin panel for managing products, users, and analytics
- 🔒 **Secure Downloads**: Signed URLs with expiration for secure file downloads
- 📧 **Email System**: Automated emails via Resend (receipts, welcome, etc.)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: React, Tailwind CSS, shadcn/ui
- **Database & Auth**: Supabase (PostgreSQL, Auth, Storage)
- **Payments**: Stripe + Paystack
- **Emails**: Resend
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Fill in your Supabase, Stripe, Paystack, and Resend credentials.

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

See `.env.example` for all required environment variables.

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # React components
├── lib/                   # Utility functions and configurations
├── types/                 # TypeScript type definitions
├── public/                # Static assets
└── supabase/              # Database migrations and schemas
```

## License

Private - All rights reserved

