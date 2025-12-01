# Environment Variables Setup Instructions

## ✅ Your Paystack Credentials (Ready to Use)

Your Paystack live credentials have been configured:

- **Secret Key**: `sk_live_c6b7d6baad674a41efb093a0fb3941f2f063d375`
- **Public Key**: `pk_live_e170fe0d1946c100fcac02b61b84c295028a3821`

## 📝 Create Your .env.local File

Create a file named `.env.local` in the root directory with the following content:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Paystack Configuration (LIVE KEYS - FROM Paystack Credentials.md)
PAYSTACK_SECRET_KEY=sk_live_c6b7d6baad674a41efb093a0fb3941f2f063d375
PAYSTACK_PUBLIC_KEY=pk_live_e170fe0d1946c100fcac02b61b84c295028a3821
PAYSTACK_WEBHOOK_SECRET=ADD_THIS_FROM_PAYSTACK_DASHBOARD
PAYSTACK_CURRENCY=GHS

# Stripe Configuration (Optional)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key

# Resend Email Configuration
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=your_email@domain.com

# Cloudflare R2 Configuration
R2_ACCOUNT_ID=your_r2_account_id
R2_ACCESS_KEY_ID=your_r2_access_key
R2_SECRET_ACCESS_KEY=your_r2_secret_key
R2_BUCKET_NAME=your_bucket_name
R2_PUBLIC_URL=your_r2_public_url

# Application URL - UPDATE THIS TO YOUR ACTUAL DOMAIN
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# Default Notification Email (for form submissions)
DEFAULT_NOTIFICATION_EMAIL=your_notification_email@domain.com
```

## ⚠️ Important: Webhook URL Update

The webhook URL in your Paystack Credentials.md points to a different project. You need to:

1. **Go to Paystack Dashboard**: https://dashboard.paystack.com
2. **Settings** → **API Keys & Webhooks**
3. **Update webhook URL to**:
   ```
   https://yourdomain.com/api/webhooks/paystack
   ```
   Replace `yourdomain.com` with your actual domain for this Prime Wave website.

4. **Copy the Webhook Secret** and add it to `.env.local`:
   ```env
   PAYSTACK_WEBHOOK_SECRET=your_webhook_secret_here
   ```

## 🚀 Quick Start

1. Copy the content above into a new `.env.local` file
2. Fill in your Supabase credentials
3. Add the Paystack webhook secret (from Paystack Dashboard)
4. Update `NEXT_PUBLIC_APP_URL` to your actual domain
5. Add other required credentials (Resend, R2, etc.)
6. Restart your development server

## ✅ Verification

After setting up, verify:
- [ ] `.env.local` file exists
- [ ] Paystack keys are added
- [ ] Webhook secret is added
- [ ] `NEXT_PUBLIC_APP_URL` points to your domain
- [ ] Webhook URL in Paystack Dashboard matches your domain

---

**Your Paystack credentials are ready!** Just complete the webhook setup and you're good to go! 🎉

