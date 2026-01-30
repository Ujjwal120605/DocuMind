# Frontend Setup Guide

## Environment Variables Setup

Create a `.env` file in the `frontend` directory with the following variables:

```env
# Clerk Authentication
# Get your publishable key from: https://dashboard.clerk.com
REACT_APP_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here

# Gemini API Key
# Get your API key from: https://aistudio.google.com/app/apikey
REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
```

## Steps to Setup

1. **Get Clerk Publishable Key:**
   - Go to [Clerk Dashboard](https://dashboard.clerk.com)
   - Create a new application or select an existing one
   - Copy the "Publishable Key" (starts with `pk_test_` or `pk_live_`)
   - Add it to your `.env` file as `REACT_APP_CLERK_PUBLISHABLE_KEY`

2. **Get Gemini API Key:**
   - Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new API key or use an existing one
   - Copy the API key
   - Add it to your `.env` file as `REACT_APP_GEMINI_API_KEY`

3. **Install Dependencies:**
   ```bash
   cd frontend
   npm install
   ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```

## Important Notes

- The `.env` file should be in the `frontend` directory (same level as `package.json`)
- Make sure to restart the development server after adding/updating environment variables
- Never commit your `.env` file to version control (it should be in `.gitignore`)
- The app uses Gemini Flash 2.5 models (gemini-2.0-flash-exp) for document analysis

## Troubleshooting

- **"Missing Request: REACT_APP_CLERK_PUBLISHABLE_KEY in .env"**: Make sure your `.env` file is in the `frontend` directory and contains the Clerk key
- **"API key is required"**: Check that `REACT_APP_GEMINI_API_KEY` is set in your `.env` file
- **"Invalid API key"**: Verify your Gemini API key is correct and has proper permissions
- **Sign-in not working**: Ensure your Clerk publishable key is correct and the app is properly configured in Clerk dashboard

