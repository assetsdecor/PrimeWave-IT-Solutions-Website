# Supabase Setup Instructions

## ✅ Your Supabase Credentials Have Been Configured!

Your Supabase credentials have been added to `.env.local`:

- **Project URL**: `https://romdjyafobfhhahpokjf.supabase.co`
- **Anon Key**: Configured ✅

## 🔧 Next Steps to Complete Setup

### 1. Service Role Key (Optional - Not Required for Basic Functionality)

**Good News**: You don't need the service role key right now! The anon key is sufficient for most operations.

**If you need it later** (for admin operations):
1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Go to **Settings** > **API**
4. Find the **service_role** key (NOT the anon key)
5. Copy it and add it to `.env.local`:
   ```
   SUPABASE_SERVICE_ROLE_KEY=paste_your_service_role_key_here
   ```

⚠️ **Important**: The service_role key has admin privileges. Keep it secret and never expose it in client-side code!

**For now, you can skip this step and proceed!** ✅

### 2. Run the Database Schema

1. Go to your Supabase Dashboard
2. Navigate to **SQL Editor**
3. Open the file `supabase/schema.sql` from this project
4. Copy all the SQL code
5. Paste it into the SQL Editor
6. Click **Run** to execute the schema

This will create all the necessary tables:
- users
- products
- categories
- purchases
- download_logs
- testimonials
- team_members
- portfolio_items
- pricing_plans
- blog_posts

### 3. Set Up Storage Bucket

1. Go to **Storage** in your Supabase Dashboard
2. Click **New bucket**
3. Name it: `products`
4. Set it to **Private**
5. Click **Create bucket**

### 4. Configure Authentication

1. Go to **Authentication** > **URL Configuration**
2. Add your site URL: `http://localhost:3000` (for development)
3. Add redirect URL: `http://localhost:3000/api/auth/callback`
4. For production, add your production domain

### 5. Test the Connection

After completing the above steps, you can test if everything works:

```bash
npm run dev
```

Then visit: http://localhost:3000

Try signing up a new user - it should create a record in the `users` table!

## 📝 Quick Checklist

- [x] Supabase URL and Anon Key configured in `.env.local`
- [ ] Service Role Key added to `.env.local`
- [ ] Database schema executed in Supabase
- [ ] Storage bucket `products` created
- [ ] Authentication URLs configured
- [ ] Test signup/login functionality

## 🚨 Troubleshooting

**Issue**: "Invalid API key"
- Make sure you copied the correct anon key
- Check that `.env.local` file exists and has the correct format

**Issue**: "Table doesn't exist"
- Make sure you ran the schema.sql file in Supabase SQL Editor

**Issue**: "Storage bucket not found"
- Create the `products` bucket in Supabase Storage
- Make sure it's set to Private

**Issue**: "Authentication redirect error"
- Check that the redirect URL is configured in Supabase Auth settings

## 🎉 You're Ready!

Once you complete these steps, your website will be able to:
- Save user data
- Store products
- Handle purchases
- Manage downloads
- And much more!

