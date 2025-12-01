# How to Find Your Supabase Service Role Key - Detailed Steps

## Step-by-Step Guide

### Step 1: Log into Supabase Dashboard
1. Go to https://app.supabase.com
2. Log in with your Supabase account credentials

### Step 2: Select Your Project
1. You'll see a list of your projects
2. Click on the project you're using for this website (Prime Wave Website)

### Step 3: Navigate to Project Settings
1. Look at the **left sidebar** menu
2. Click on the **gear icon (⚙️)** at the bottom of the sidebar
3. This is labeled **"Project Settings"** or just **"Settings"**

   **Alternative path:**
   - You can also click on your project name at the top
   - Then click **"Settings"** from the dropdown

### Step 4: Go to API Settings
1. In the Settings page, look at the **left sidebar** within settings
2. You'll see several options like:
   - General
   - Database
   - API ← **Click this one**
   - Auth
   - Storage
   - etc.

3. Click on **"API"** in the settings sidebar

### Step 5: Find the Service Role Key
1. On the API settings page, you'll see several sections:
   - **Project URL**
   - **Project API keys**
   - **Config**

2. Look for the section labeled **"Project API keys"** or **"API Keys"**

3. You'll see two keys:
   - **anon** `public` key (this is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - **service_role** `secret` key ← **This is what you need!**

4. The service_role key will:
   - Have a label like "service_role" or "service_role key"
   - Be marked as **"secret"** (usually in red or with a lock icon)
   - Have a **"Reveal"** or **"Show"** button next to it (it's hidden by default for security)

5. Click the **"Reveal"** or **"Show"** button to see the full key

6. The key will look something like:
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdXJwcm9qZWN0cmVmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.verylongstringhere
   ```

### Step 6: Copy the Service Role Key
1. Click the **copy icon** (📋) next to the revealed key
2. Or select the entire key text and copy it (Ctrl+C)

### Step 7: Add to Your .env.local File
1. Open your project folder in your code editor
2. Open the `.env.local` file (if it doesn't exist, create it in the root folder)
3. Add this line:
   ```
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...paste_your_key_here
   ```
4. Make sure there are **no spaces** around the `=` sign
5. Make sure the key is on **one line** (don't break it)

### Step 8: Restart Your Development Server
1. Stop your current `npm run dev` server (Ctrl+C in terminal)
2. Start it again:
   ```bash
   npm run dev
   ```

## Important Security Notes

⚠️ **NEVER:**
- Commit the service role key to Git
- Share the service role key publicly
- Use it in client-side code
- Expose it in browser console

✅ **ALWAYS:**
- Keep it in `.env.local` (which should be in `.gitignore`)
- Only use it in server-side API routes
- Treat it like a password

## Visual Guide (What to Look For)

```
Supabase Dashboard
├── Your Project
    ├── Settings (⚙️ icon)
        ├── API
            └── Project API keys
                ├── anon public (you already have this)
                └── service_role secret ← YOU NEED THIS
                    └── [Reveal] button ← Click this
```

## Troubleshooting

**I don't see "API" in Settings:**
- Make sure you're logged in as the project owner/admin
- Try refreshing the page
- Check if you're in the correct project

**The "Reveal" button doesn't work:**
- Try clicking it again
- Refresh the page and try again
- Make sure JavaScript is enabled in your browser

**I see the key but it's very long:**
- That's normal! Service role keys are JWT tokens and can be 200+ characters
- Copy the entire key, including the beginning and end

**The key looks different from what I expected:**
- Service role keys are JWT tokens (start with `eyJ...`)
- They're different from the anon key
- As long as it's labeled "service_role" and marked as "secret", it's correct

## Still Can't Find It?

If you still can't find it:
1. Make sure you're the project owner (not just a collaborator)
2. Check if you have the correct permissions
3. Try accessing: `https://app.supabase.com/project/[your-project-ref]/settings/api`
   (Replace `[your-project-ref]` with your actual project reference)


