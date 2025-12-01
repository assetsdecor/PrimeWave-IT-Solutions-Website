# Finding Your Supabase Service Role Key

## Good News! 🎉

**You don't need the service role key right now!** The anon key you already have is sufficient for:
- ✅ User signup and login
- ✅ Viewing products
- ✅ Creating purchases (with proper RLS policies)
- ✅ Most website functionality

## When You Might Need It

The service role key is only needed for:
- Admin operations that bypass Row Level Security (RLS)
- Some advanced webhook operations
- Bulk data operations

## How to Find It (If Needed Later)

If you need the service role key in the future, here's where to find it:

### Step-by-Step:

1. **Go to your Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Select your project: `romdjyafobfhhahpokjf`

2. **Navigate to Settings**
   - Click on the **Settings** icon (gear icon) in the left sidebar
   - Or go directly to: https://supabase.com/dashboard/project/romdjyafobfhhahpokjf/settings/api

3. **Find API Keys Section**
   - Scroll down to the **API** section
   - You'll see two keys:
     - **anon/public** key (you already have this) ✅
     - **service_role** key (this is what you're looking for)

4. **Copy the Service Role Key**
   - Click the **eye icon** or **reveal** button next to "service_role"
   - Copy the key (it starts with `eyJ...`)
   - ⚠️ **WARNING**: This key has admin privileges! Never expose it in client-side code!

5. **Add to .env.local**
   ```
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   ```

## Alternative: Check Your Project Settings

Sometimes the service role key is in:
- **Project Settings** > **API** > **Service Role Key**
- Or under **Project API** settings

## For Now: You Can Proceed! ✅

Your website will work perfectly with just the anon key. The service role key is optional and only needed for specific admin operations.

## Next Steps

1. ✅ Your Supabase URL and Anon Key are configured
2. ⏭️ Run the database schema (see `supabase/schema.sql`)
3. ⏭️ Create the storage bucket
4. ⏭️ Test your website!

You can add the service role key later if you encounter any permission issues with admin operations.





