# Paystack Credentials Configuration

## ✅ Credentials Added to System

Your Paystack live credentials have been successfully added to the system:

### Live API Keys
- **Secret Key**: `sk_live_c6b7d6baad674a41efb093a0fb3941f2f063d375`
- **Public Key**: `pk_live_e170fe0d1946c100fcac02b61b84c295028a3821`

### Files Updated
1. **`.env.local`** - Contains your live Paystack keys
2. **`.env.example`** - Template for other developers (keys removed for security)

## ⚠️ Important: Webhook URL Update Required

The webhook URL in your credentials file points to a **different project**:
- Current: `https://mobile-banking-app.vercel.app/api/paystack/webhook`

You need to update it in Paystack Dashboard to point to **this project**:

### Steps to Update Webhook URL:

1. **Go to Paystack Dashboard**: https://dashboard.paystack.com
2. **Navigate to**: Settings → API Keys & Webhooks
3. **Find your webhook** or create a new one
4. **Update the webhook URL to**:
   ```
   https://yourdomain.com/api/webhooks/paystack
   ```
   Replace `yourdomain.com` with your actual domain for this Prime Wave website.

   **Example URLs:**
   - If on Vercel: `https://primewave.vercel.app/api/webhooks/paystack`
   - If custom domain: `https://primewave.com/api/webhooks/paystack`

5. **Copy the Webhook Secret** from Paystack Dashboard
6. **Add to `.env.local`**:
   ```env
   PAYSTACK_WEBHOOK_SECRET=your_webhook_secret_here
   ```

## 📝 Environment Variables Checklist

Make sure your `.env.local` file has:

```env
# Paystack (✅ Already Added)
PAYSTACK_SECRET_KEY=sk_live_c6b7d6baad674a41efb093a0fb3941f2f063d375
PAYSTACK_PUBLIC_KEY=pk_live_e170fe0d1946c100fcac02b61b84c295028a3821
PAYSTACK_WEBHOOK_SECRET=ADD_THIS_FROM_PAYSTACK_DASHBOARD
PAYSTACK_CURRENCY=GHS

# Application URL (⚠️ UPDATE THIS)
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# Other required variables
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## 🧪 Testing

### Before Going Live:
1. ✅ Verify webhook URL is correct in Paystack Dashboard
2. ✅ Add webhook secret to `.env.local`
3. ✅ Update `NEXT_PUBLIC_APP_URL` to your actual domain
4. ✅ Test webhook delivery in Paystack Dashboard
5. ✅ Test a small payment to verify everything works

### Test Webhook Delivery:
1. Go to Paystack Dashboard → Settings → API Keys & Webhooks
2. Click on your webhook
3. Click "Send Test Webhook"
4. Check your server logs to verify it's received

## 🔒 Security Notes

- ✅ `.env.local` is in `.gitignore` (won't be committed)
- ✅ Never commit API keys to version control
- ✅ Keep your secret keys secure
- ✅ Rotate keys if compromised
- ✅ Use different keys for test and production

## 🚀 Next Steps

1. **Update webhook URL** in Paystack Dashboard (see above)
2. **Add webhook secret** to `.env.local`
3. **Update `NEXT_PUBLIC_APP_URL`** to your actual domain
4. **Run database migration**: `supabase/add_momo_payment_fields.sql`
5. **Test payment flow** with a small amount
6. **Verify webhook** receives and processes payments
7. **Start accepting real payments!**

---

**Your Paystack credentials are now integrated into the system!** 🎉

Just complete the webhook setup and you're ready to accept payments.

