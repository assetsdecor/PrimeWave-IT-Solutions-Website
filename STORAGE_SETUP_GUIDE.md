# Storage Bucket Setup Guide

## Issue: "Unauthorized" Error When Uploading Files

This error typically occurs when the Supabase Storage bucket doesn't have the correct permissions. Follow these steps:

### Step 1: Verify Storage Bucket Exists

1. Go to your Supabase Dashboard
2. Navigate to **Storage** in the left sidebar
3. Check if a bucket named **`products`** exists
4. If it doesn't exist, create it:
   - Click **"New bucket"**
   - Name: `products`
   - **Make it PUBLIC** (or set up proper RLS policies)
   - Click **"Create bucket"**

### Step 2: Set Storage Bucket Policies

1. Go to **Storage** → **`products`** bucket
2. Click on **"Policies"** tab
3. You need policies that allow admins to upload files

**Option A: Public Upload (Simpler, for testing)**
- Make the bucket public
- This allows anyone with the URL to upload (not recommended for production)

**Option B: RLS Policies (Recommended)**

Create these policies:

**Policy 1: Allow authenticated admins to upload**
```sql
CREATE POLICY "Admins can upload files"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'products' AND
  EXISTS (
    SELECT 1 FROM public.users
    WHERE id = auth.uid() AND role = 'admin'
  )
);
```

**Policy 2: Allow authenticated admins to read**
```sql
CREATE POLICY "Admins can read files"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'products' AND
  EXISTS (
    SELECT 1 FROM public.users
    WHERE id = auth.uid() AND role = 'admin'
  )
);
```

**Policy 3: Allow authenticated admins to delete**
```sql
CREATE POLICY "Admins can delete files"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'products' AND
  EXISTS (
    SELECT 1 FROM public.users
    WHERE id = auth.uid() AND role = 'admin'
  )
);
```

### Step 3: Verify Service Role Key

1. Go to **Settings** → **API** in Supabase Dashboard
2. Find **"service_role"** key (keep this secret!)
3. Make sure it's set in your `.env.local` file:
   ```
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   ```
4. Restart your Next.js dev server after adding it

### Step 4: Test the Upload

After completing the above steps:
1. Restart your development server
2. Try uploading a file again
3. Check the browser console and server logs for detailed error messages

### Quick Fix: Make Bucket Public (Testing Only)

If you want to test quickly:
1. Go to Storage → `products` bucket
2. Click **"Make public"** or set it to **Public**
3. This will allow uploads without RLS policies (use only for testing!)

### Troubleshooting

**Error: "Bucket not found"**
- Create the `products` bucket in Supabase Storage

**Error: "new row violates row-level security policy"**
- Add the RLS policies above to the storage.objects table

**Error: "Invalid API key"**
- Check that `SUPABASE_SERVICE_ROLE_KEY` is set correctly in `.env.local`
- Restart the dev server after adding it

**Still getting "Unauthorized"**
- Check browser console for detailed error
- Check server terminal logs for error details
- Verify you're logged in as admin user


