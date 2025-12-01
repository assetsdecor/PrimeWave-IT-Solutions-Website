# Creating an Admin User Account

This guide will help you create an admin user account for Prime Wave.

## Prerequisites

- Access to your Supabase project
- SQL Editor access in Supabase Dashboard

## Method 1: Using Signup Page (Recommended)

### Step 1: Create User Account
1. Go to your website's signup page: `http://localhost:3000/signup` (or your deployed URL)
2. Sign up with your admin email (e.g., `admin@primewave.com`)
3. Use a strong password
4. Complete the signup process

### Step 2: Promote to Admin
1. Go to Supabase Dashboard > SQL Editor
2. Open the file `supabase/create_admin_user.sql`
3. Find the line: `SELECT promote_user_to_admin('admin@primewave.com');`
4. Replace `'admin@primewave.com'` with your actual admin email
5. Run the SQL script
6. You should see: `SUCCESS: User [email] has been promoted to admin.`

### Step 3: Verify
1. Run the verification query at the bottom of the SQL script
2. You should see your user with `role = 'admin'`

## Method 2: Using Supabase Dashboard

### Step 1: Create User in Supabase Dashboard
1. Go to Supabase Dashboard > Authentication > Users
2. Click "Add User" or "Invite User"
3. Enter your admin email (e.g., `admin@primewave.com`)
4. Set a password (or send invite email)
5. Make sure "Auto Confirm User" is checked (or confirm the email)
6. Click "Create User"

### Step 2: Promote to Admin
1. Go to Supabase Dashboard > SQL Editor
2. Open the file `supabase/create_admin_user.sql`
3. Find the line: `SELECT promote_user_to_admin('admin@primewave.com');`
4. Replace `'admin@primewave.com'` with your actual admin email
5. Run the SQL script

### Step 3: Verify
1. Run the verification query at the bottom of the SQL script
2. You should see your user with `role = 'admin'`

## Method 3: Direct SQL (If you know the user ID)

If you already have a user account and know the email:

1. Go to Supabase Dashboard > SQL Editor
2. Run this SQL (replace with your email):

```sql
UPDATE public.users
SET role = 'admin', updated_at = NOW()
WHERE email = 'your-admin-email@example.com';
```

If the user profile doesn't exist in `public.users`:

```sql
INSERT INTO public.users (id, email, role, full_name)
SELECT id, email, 'admin', 'Admin User'
FROM auth.users
WHERE email = 'your-admin-email@example.com'
ON CONFLICT (id) DO UPDATE SET role = 'admin';
```

## Login as Admin

1. Go to your login page: `http://localhost:3000/login`
2. Enter your admin email and password
3. After login, you'll be redirected to the dashboard
4. Navigate to `/admin` to access the admin dashboard

## Default Admin Credentials (Change These!)

**IMPORTANT:** After creating your admin account, make sure to:
- Use a strong, unique password
- Change the password if you used a temporary one
- Keep your admin credentials secure

## Troubleshooting

### "User does not exist" Error
- Make sure you've created the user account first (via signup or Supabase Dashboard)
- Check that the email is correct and matches exactly

### "Permission denied" Error
- Make sure you're running the SQL in Supabase SQL Editor
- Check that RLS policies allow the operation

### Can't Access Admin Dashboard
- Verify the user role is set to 'admin' in the database
- Check that you're logged in with the correct account
- Clear browser cache and cookies
- Try logging out and logging back in

### User Profile Not Created
- The user profile should be created automatically on signup
- If not, run the INSERT statement from Method 3

## Security Notes

1. **Never commit admin credentials to version control**
2. **Use strong passwords** (minimum 12 characters, mix of letters, numbers, symbols)
3. **Enable 2FA** if available in Supabase
4. **Limit admin access** to trusted personnel only
5. **Regularly audit admin accounts** and remove unused ones

## Next Steps

After creating your admin account:
1. Log in and verify you can access `/admin`
2. Test admin features (product management, user management, etc.)
3. Set up additional admin accounts if needed
4. Review and configure admin permissions as needed



