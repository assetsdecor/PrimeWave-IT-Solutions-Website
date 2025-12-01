# Prime Wave Website - Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account
- Stripe account (for payments)
- Paystack account (for payments)
- Resend account (for emails)

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your:
   - Project URL
   - Anon/public key
   - Service role key (keep this secret!)

3. Go to SQL Editor and run the schema from `supabase/schema.sql`

4. Set up Storage:
   - Go to Storage in Supabase dashboard
   - Create a new bucket named `products`
   - Set it to private
   - Add RLS policies for authenticated users

5. Set up Auth:
   - Go to Authentication > URL Configuration
   - Add your site URL: `http://localhost:3000` (for development)
   - Add redirect URL: `http://localhost:3000/api/auth/callback`

## Step 3: Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Paystack
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key
PAYSTACK_WEBHOOK_SECRET=your_paystack_webhook_secret

# Resend
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=noreply@yourdomain.com

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Prime Wave

# Admin
ADMIN_EMAIL=admin@yourdomain.com
```

## Step 4: Set Up Stripe Webhooks

1. Go to Stripe Dashboard > Developers > Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Select events: `checkout.session.completed`
4. Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`

## Step 5: Set Up Paystack Webhooks

1. Go to Paystack Dashboard > Settings > Webhooks
2. Add webhook URL: `https://yourdomain.com/api/webhooks/paystack`
3. Select events: `charge.success`
4. Copy the webhook secret to `PAYSTACK_WEBHOOK_SECRET`

## Step 6: Create Admin User

1. Sign up normally through the website
2. Go to Supabase Dashboard > Table Editor > users
3. Find your user and change `role` from `user` to `admin`

## Step 7: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 8: Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add all environment variables
4. Deploy!

## Important Notes

- Make sure to set up proper CORS and allowed origins in Supabase
- Configure webhook URLs for production
- Set up proper email domain in Resend
- Test payment flows in test mode first
- Secure your admin routes properly

## Database Setup

The schema includes:
- Users table (extends Supabase auth)
- Products table
- Categories table
- Purchases table
- Download logs table
- Testimonials table
- Team members table
- Portfolio items table
- Pricing plans table
- Blog posts table

All tables have RLS (Row Level Security) enabled with appropriate policies.

## Storage Setup

Create a Supabase Storage bucket named `products` for storing downloadable files. The bucket should be private with RLS policies allowing authenticated users to download their purchased products.





