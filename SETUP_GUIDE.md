# Teacher's Content Assistant - Setup Guide

## Quick Start

Your teacher tool is ready! Here's what you need to do:

### 1. Set up your API Key

To enable AI functionality, you need an API key from one of the supported providers.

**Option A: Use Anthropic Claude (Recommended)**

1. Go to https://console.anthropic.com/
2. Sign up or log in
3. Navigate to API Keys
4. Create a new API key
5. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
6. Add your key to `.env.local`:
   ```
   ANTHROPIC_API_KEY=your_key_here
   ```

**Option B: Use OpenAI GPT**

1. Go to https://platform.openai.com/api-keys
2. Sign up or log in
3. Create a new API key
4. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
5. Add your key to `.env.local`:
   ```
   OPENAI_API_KEY=your_key_here
   ```

**Option C: Use LRU RAG Chatbot**

1. Obtain your RAG API endpoint URL and credentials
2. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Add your RAG configuration to `.env.local`:
   ```
   LRU_RAG_API_URL=https://admin.dev.lrurag.dk/api/v1/chat
   LRU_RAG_APPLICATION_ID=your_application_id_here
   # OR use LRU_RAG_ASSISTANT_ID instead
   ```
4. See [README-LRU-RAG.md](README-LRU-RAG.md) for more details

### 2. Restart the Development Server

After adding your API key:

1. Stop the current dev server (Ctrl+C in the terminal)
2. Start it again:
   ```bash
   npm run dev
   ```

### 3. Start Using the Tool

1. Open http://localhost:3000 in your browser
2. **Select your AI provider** using the toggle at the top right (Claude, OpenAI, or RAG)
3. Enter a URL of any webpage you want to work with
4. Click "Load Content"
5. Use the quick action buttons or type your own requests!

## Features

### Quick Action Buttons

- **📝 Summarize**: Get a concise summary of the webpage
- **🎙️ Create Podcast**: Generate a podcast script from the content
- **❓ Generate Questions**: Create comprehension questions for students
- **📚 Study Guide**: Build a comprehensive study guide
- **🧪 Quiz**: Generate a multiple choice quiz with explanations

### Custom Requests

You can also type your own requests, such as:

- "Create 5 discussion questions for high school students"
- "Explain the key concepts in simple terms suitable for 5th graders"
- "Generate a lesson plan outline based on this content"
- "Create a worksheet with fill-in-the-blank exercises"
- "Make a timeline of events mentioned in this article"

## Tips for Teachers

1. **Choose good source material**: The tool works best with educational articles, news sites, and informational pages
2. **Be specific**: The more specific your request, the better the AI can help you
3. **Iterate**: Don't hesitate to ask follow-up questions or request modifications
4. **Save your work**: Copy the AI responses into your preferred document editor

## Troubleshooting

### "API key not configured" message

- Make sure you've created a `.env.local` file
- Check that your API key is correctly pasted
- Restart the dev server after adding the key

### Content not loading from a URL

- Verify the URL is accessible (try opening it in a browser)
- Some websites may block automated access
- Check your internet connection

### AI responses seem off

- Try rephrasing your request more specifically
- Include grade level or target audience in your request
- Break complex requests into smaller, simpler ones

## Need Help?

Check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [Anthropic API Docs](https://docs.anthropic.com/)
- [OpenAI API Docs](https://platform.openai.com/docs)

Enjoy creating educational content! 🎓
