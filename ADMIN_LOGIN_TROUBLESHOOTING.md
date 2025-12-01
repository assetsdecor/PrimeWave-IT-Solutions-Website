# Admin Login Troubleshooting Guide

## Current Issue: Not Authenticated

The debug page shows you're **not logged in**. This means you need to create the user account first, then log in.

## Step-by-Step Solution

### Step 1: Create User Account in Supabase Auth

You have **two options**:

#### Option A: Create via Supabase Dashboard (Easiest)

1. Go to **Supabase Dashboard** > **Authentication** > **Users**
2. Click **"Add User"** or **"Invite User"**
3. Fill in:
   - **Email**: `admin@primewave.com` (or your admin email)
   - **Password**: Choose a strong password (remember it!)
   - **Auto Confirm User**: ✅ **CHECK THIS BOX** (Very Important!)
4. Click **"Create User"**

#### Option B: Sign Up via Website

1. Go to `http://localhost:3000/signup`
2. Enter:
   - **Email**: `admin@primewave.com`
   - **Password**: Your chosen password
   - **Full Name**: Admin User
3. Click **"Sign Up"**

### Step 2: Verify User Was Created

Run this SQL in Supabase SQL Editor:

```sql
SELECT 
  id,
  email,
  email_confirmed_at,
  created_at
FROM auth.users
WHERE email = 'admin@primewave.com';
```

You should see your user with a confirmed email.

### Step 3: Ensure Admin Role is Set

Run this SQL to verify and fix the admin role:

```sql
-- Check current role
SELECT id, email, role FROM public.users WHERE email = 'admin@primewave.com';

-- If role is not 'admin', update it
UPDATE public.users
SET role = 'admin', updated_at = NOW()
WHERE email = 'admin@primewave.com';

-- If profile doesn't exist, create it
INSERT INTO public.users (id, email, role, full_name)
SELECT id, email, 'admin', 'Admin User'
FROM auth.users
WHERE email = 'admin@primewave.com'
ON CONFLICT (id) DO UPDATE SET role = 'admin';
```

### Step 4: Log In

1. Go to `http://localhost:3000/login`
2. Enter:
   - **Email**: `admin@primewave.com`
   - **Password**: The password you set
3. Click **"Login"**

### Step 5: Verify Login

After logging in:

1. Check the navigation bar - you should see "Dashboard" and "Logout" buttons
2. Go to `http://localhost:3000/debug-admin` again
3. You should now see:
   - ✅ Is Authenticated: Yes
   - ✅ User ID: (your user ID)
   - ✅ Profile Role: admin
   - ✅ Is Admin: ✅ YES

### Step 6: Access Admin Dashboard

1. Click the **"Admin"** button in the navigation, OR
2. Go directly to `http://localhost:3000/admin`

## Common Issues

### Issue: "User does not exist in auth.users"
**Solution**: Create the user first (Step 1)

### Issue: "Email not confirmed"
**Solution**: 
- If using Supabase Dashboard, make sure "Auto Confirm User" is checked
- If using signup page, check your email for confirmation link (or disable email confirmation in Supabase settings)

### Issue: "Profile doesn't exist"
**Solution**: Run Step 3 SQL to create the profile

### Issue: "Role is not admin"
**Solution**: Run Step 3 SQL to update the role

### Issue: "Still can't log in after creating user"
**Solution**:
1. Clear browser cache and cookies
2. Try incognito/private browsing mode
3. Make sure you're using the correct email and password
4. Check Supabase Dashboard > Authentication > Users to verify user exists

## Quick Verification Checklist

Before trying to log in, verify:

- [ ] User exists in `auth.users` table
- [ ] User email is confirmed (`email_confirmed_at` is not null)
- [ ] User profile exists in `public.users` table
- [ ] User role is set to `'admin'` in `public.users`
- [ ] Both tables have the same user ID

## Still Having Issues?

1. Run the verification query from `supabase/verify_and_create_admin.sql`
2. Check the debug page at `/debug-admin` after logging in
3. Check browser console for any errors
4. Check Supabase logs for authentication errors

re_aciDyXqd_MFUX1WdnPygNc1PLQ9HhTj6a

re_7xEKYXxA_PRWK1XLatX5ipWYPHA4zKJXr