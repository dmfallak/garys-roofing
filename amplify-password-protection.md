# How to Add Password Protection to Amplify

## Quick Method: Basic Auth

1. In AWS Amplify Console, go to your app
2. Click **"Access control"** in the left sidebar
3. Click **"Manage access"**
4. Select **"Restrict access to this branch"**
5. Choose **"Apply a single username and password"**
6. Set username and password
7. Click **"Save"**

**Result:** Visitors need to enter credentials to view the site

## What happens:
- Site stays online
- Anyone accessing it sees a login prompt
- Only people with the password can view it
- You can remove this anytime to make it public again

## Alternative: IP Whitelist

If you only want specific IPs to access:
1. Same steps as above
2. Choose **"Allow access from specific IP addresses"**
3. Enter your IP addresses
4. Save

This restricts access to only those IPs.
