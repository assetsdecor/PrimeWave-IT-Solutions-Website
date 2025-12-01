# Quick Fix for Admin Access

Since you can see the user in Supabase Authentication, let's verify and fix everything:

## Step 1: Run This SQL Script

Go to **Supabase Dashboard > SQL Editor** and run `supabase/final_admin_check.sql`

This will:
1. Check if user exists in both tables
2. Verify IDs match
3. Fix any mismatches
4. Ensure role is set to admin

## Step 2: Verify Email Confirmation

In Supabase Dashboard > Authentication > Users:
- Find your admin user
- Check if "Email Confirmed" is checked
- If NOT, click the three dots (...) and select "Confirm Email"

## Step 3: Try Logging In

1. Go to `http://localhost:3000/login`
2. Enter:
   - **Email**: `admin@primewave.com`
   - **Password**: Your password
3. Click "Login"

## Step 4: What Should Happen

After login, you should be:
- **Automatically redirected to `/admin`** (if you're admin)
- See "Dashboard" and "Admin" buttons in navigation
- Be able to access admin features

## Step 5: If Still Not Working

1. **Clear browser cache and cookies**
2. **Try incognito/private browsing mode**
3. **Check browser console** (F12) for any errors
4. **Run the final check SQL** again to verify everything

## Common Issues

### "Invalid login credentials"
- Password is wrong
- User doesn't exist (but you said you can see it)
- Email confirmation required

### "Session not created"
- Browser blocking cookies
- Try incognito mode

### "Redirected to dashboard instead of admin"
- Role might not be set correctly
- Run the SQL script again
- Check the debug page after login

## Quick Test

After logging in, go to: `http://localhost:3000/debug-admin`

You should see:
- ✅ Is Authenticated: **Yes**
- ✅ Profile Role: **admin**
- ✅ Is Admin: **✅ YES**

If you see this, then go to `/admin` - it should work!



