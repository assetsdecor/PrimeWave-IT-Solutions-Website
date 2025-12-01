# How to Disable Email Confirmation in Supabase

## Step-by-Step Instructions

### 1. Go to Supabase Dashboard
- Visit: https://supabase.com/dashboard
- Select your project: `romdjyafobfhhahpokjf`

### 2. Navigate to Authentication Settings
- Click on **Authentication** in the left sidebar
- Go to **Settings** (or **Configuration**)

### 3. Disable Email Confirmation
- Find the section **"Email Auth"** or **"Email Confirmation"**
- Look for **"Enable email confirmations"** toggle
- **Turn it OFF** (disable it)

### 4. Save Changes
- Click **Save** or the changes will auto-save

### Alternative: Using SQL (if toggle is not available)

If you can't find the toggle, you can run this SQL in the SQL Editor:

```sql
-- Disable email confirmation requirement
UPDATE auth.config 
SET enable_signup = true,
    enable_email_confirmations = false;
```

Or update the auth settings directly:

```sql
-- This will disable email confirmation
ALTER TABLE auth.users 
ALTER COLUMN email_confirmed_at SET DEFAULT now();
```

## What This Does

✅ Users can sign up and immediately log in  
✅ No email verification required  
✅ Account is active immediately after signup  
✅ Users go straight to dashboard after signup  

## Security Note

⚠️ **Important**: Without email confirmation, make sure you have:
- Strong password requirements (minimum 6 characters)
- Consider adding CAPTCHA to prevent spam signups
- Monitor for suspicious account creation

## Testing

After disabling email confirmation:
1. Try signing up a new user
2. You should be automatically logged in
3. You should be redirected to the dashboard
4. No email confirmation needed!

## Done! ✅

Your signup process now works without email confirmation. Users can sign up and immediately access their account.




