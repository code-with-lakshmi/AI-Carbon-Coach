# Environment Setup

To keep the setup clean and secure, please follow these instructions:

1. Create a `.env` file inside the `server` folder.
2. Add your Gemini API key to this file without any quotes around the value:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

**IMPORTANT**: 
- Do NOT hardcode the API key in any code files.
- Ensure the `.env` file remains ignored by Git (already configured in `.gitignore`).
- This will allow `index.js` to read your API key securely via `process.env.GEMINI_API_KEY`.
