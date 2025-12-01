# Paystack Payment Integration Setup Guide

This guide will help you set up Paystack for real payments with Mobile Money (MoMo) support connected to your GT Bank account.

## Prerequisites

1. GT Bank account
2. Business registration documents (if required)
3. Valid email address
4. Phone number

## Step 1: Create Paystack Account

1. Go to [https://paystack.com](https://paystack.com)
2. Click "Sign Up" or "Get Started"
3. Choose "Business Account"
4. Fill in your business details:
   - Business name
   - Email address
   - Phone number
   - Business type
5. Verify your email address

## Step 2: Complete Business Verification

1. In your Paystack dashboard, go to **Settings** → **Business**
2. Complete your business profile:
   - Business registration number (if applicable)
   - Business address
   - Tax identification number (if applicable)
3. Upload required documents:
   - Business registration certificate
   - Bank statement
   - Government-issued ID
4. Submit for verification (usually takes 1-3 business days)

## Step 3: Connect GT Bank Account

1. In Paystack dashboard, go to **Settings** → **Bank Accounts**
2. Click **"Add Bank Account"**
3. Select **"GT Bank"** from the list
4. Enter your account details:
   - Account number
   - Account name (must match your Paystack business name)
5. Upload bank statement or voided check (if required)
6. Submit for verification
7. Wait for verification (usually 1-2 business days)

## Step 4: Get API Keys

### Your Live Keys (Already Provided)
Your Paystack live credentials have been added to the system:

- **Live Secret Key**: `sk_live_c6b7d6baad674a41efb093a0fb3941f2f063d375`
- **Live Public Key**: `pk_live_e170fe0d1946c100fcac02b61b84c295028a3821`

These have been added to `.env.local` file.

### Test Keys (for development - Optional)
If you want to test first:
1. Go to **Settings** → **API Keys & Webhooks**
2. Copy your **Test Public Key** (starts with `pk_test_`)
3. Copy your **Test Secret Key** (starts with `sk_test_`)
4. Replace the live keys in `.env.local` with test keys for testing

## Step 5: Configure Webhook

**IMPORTANT**: The webhook URL in your credentials file points to a different project. You need to update it for this project.

1. In Paystack dashboard, go to **Settings** → **API Keys & Webhooks**
2. Find your existing webhook or click **"Add Webhook URL"**
3. Enter your webhook URL for THIS project:
   ```
   https://yourdomain.com/api/webhooks/paystack
   ```
   **Replace `yourdomain.com` with your actual domain for this Prime Wave website**
   
   Example: `https://primewave.vercel.app/api/webhooks/paystack`
   
4. Select events to listen for:
   - ✅ `charge.success` (REQUIRED)
   - ✅ `charge.failed` (REQUIRED)
   - ✅ `transfer.success` (optional)
   - ✅ `transfer.failed` (optional)
5. Copy the **Webhook Secret** (you'll need this for environment variables)
6. Click **"Save"**
7. **Update `.env.local`** with the webhook secret:
   ```env
   PAYSTACK_WEBHOOK_SECRET=your_webhook_secret_here
   ```

## Step 6: Set Up Environment Variables

Your Paystack credentials have been added to `.env.local`. You just need to:

1. **Add the Webhook Secret** (from Step 5):
   ```env
   PAYSTACK_WEBHOOK_SECRET=your_webhook_secret_from_paystack_dashboard
   ```

2. **Update the Application URL** to your actual domain:
   ```env
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   ```
   Replace `yourdomain.com` with your actual domain (e.g., `primewave.vercel.app`)

3. **Verify all Paystack variables are set**:
   ```env
   PAYSTACK_SECRET_KEY=sk_live_c6b7d6baad674a41efb093a0fb3941f2f063d375
   PAYSTACK_PUBLIC_KEY=pk_live_e170fe0d1946c100fcac02b61b84c295028a3821
   PAYSTACK_WEBHOOK_SECRET=your_webhook_secret_here
   PAYSTACK_CURRENCY=GHS
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   ```

**Note**: The `.env.local` file is already created with your live keys. Just add the webhook secret and update the domain.

## Step 7: Run Database Migration

Execute the SQL migration to add Mobile Money support:

1. Go to your Supabase dashboard
2. Navigate to **SQL Editor**
3. Open and run: `supabase/add_momo_payment_fields.sql`
4. Verify the migration was successful

## Step 8: Test the Integration

### Test Mode
1. Use test API keys in your `.env.local`
2. Use Paystack test phone numbers (provided in dashboard)
3. Test payment flow:
   - Add product to cart
   - Go to checkout
   - Select Mobile Money
   - Choose provider (MTN, Vodafone, AirtelTigo)
   - Enter test phone number
   - Complete payment
4. Verify:
   - Payment appears in Paystack dashboard
   - Purchase record created in database
   - Download access granted
   - Email receipt sent

### Production Mode
1. Switch to live API keys
2. Test with real phone number (small amount first)
3. Verify:
   - Payment processes successfully
   - Funds appear in Paystack dashboard
   - Settlement to GT Bank account (T+1)
   - All features work correctly

## Step 9: Monitor Payments

### Paystack Dashboard
- View all transactions
- Check payment status
- View settlement reports
- Monitor failed payments

### Your Website
- Admin → Purchases (view all purchases)
- Admin → Analytics (revenue tracking)
- User Dashboard (user's purchase history)

## Payment Methods Supported

1. **Mobile Money (MoMo)**
   - MTN Mobile Money
   - Vodafone Cash
   - AirtelTigo Money

2. **Card Payments**
   - Visa
   - Mastercard
   - Verve

3. **Bank Transfer**
   - Direct bank transfer

## Settlement Information

- **Settlement Time**: T+1 (next business day)
- **Settlement Account**: Your GT Bank account
- **Minimum Settlement**: Check Paystack dashboard
- **Fees**: Typically 1.5% + ₵1 per transaction (check current rates)

## Troubleshooting

### Payment Not Processing
- Check API keys are correct
- Verify webhook URL is accessible
- Check Paystack dashboard for errors
- Review server logs

### Webhook Not Receiving Events
- Verify webhook URL is correct
- Check webhook secret matches
- Ensure HTTPS is enabled (required for production)
- Test webhook delivery in Paystack dashboard

### Download Access Not Granted
- Check webhook is processing correctly
- Verify purchase record is created
- Check download URL generation
- Review error logs

## Support

- **Paystack Support**: support@paystack.com
- **Paystack Documentation**: https://paystack.com/docs
- **Paystack Status**: https://status.paystack.com

## Security Best Practices

1. **Never commit API keys to version control**
2. **Use environment variables for all secrets**
3. **Verify webhook signatures**
4. **Use HTTPS in production**
5. **Monitor for suspicious activity**
6. **Keep API keys secure**
7. **Rotate keys periodically**

## Next Steps

1. Complete Paystack account setup
2. Add environment variables
3. Run database migration
4. Test in test mode
5. Switch to live mode
6. Start accepting real payments!

---

**Important**: Always test thoroughly in test mode before switching to production. Start with small amounts when going live.

