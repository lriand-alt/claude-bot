# Teacher's Content Assistant

A Next.js tool for teachers to transform web content into educational materials using AI.

## Features

- 🌐 Load content from any webpage
- 💬 Interactive chat interface to process content
- 📝 Quick action buttons for common tasks:
  - Create summaries
  - Generate podcast scripts
  - Create comprehension questions
  - Build study guides
  - Generate quizzes
- 🤖 Multiple AI Providers:
  - Claude (Anthropic)
  - GPT (OpenAI)
  - LRU RAG Chatbot

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure your API key:
   - Copy `.env.example` to `.env.local`
   - Choose your AI provider and add the appropriate API key(s)

   ```bash
   cp .env.example .env.local
   ```

   **For Claude or OpenAI:**
   - Anthropic API Key: https://console.anthropic.com/
   - OpenAI API Key: https://platform.openai.com/api-keys

   **For LRU RAG Chatbot:**
   - Set `LRU_RAG_API_URL` to your RAG API endpoint
   - Set either `LRU_RAG_APPLICATION_ID` or `LRU_RAG_ASSISTANT_ID`
   - See [README-LRU-RAG.md](README-LRU-RAG.md) for more details

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Select AI Provider**: Use the provider toggle at the top right to choose between Claude, OpenAI, or RAG
2. **Enter a URL**: Paste the URL of any webpage you want to work with
3. **Load Content**: Click "Load Content" to fetch and process the webpage
4. **Choose an action**: Click one of the quick action buttons or type your own request
5. **Get results**: The AI will process the content according to your request

## Examples

Try these actions with a loaded webpage:

- "Summarize the main points"
- "Create 5 discussion questions for high school students"
- "Generate a worksheet based on this content"
- "Explain the key concepts in simple terms"
- "Create a lesson plan outline"

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- AI Providers:
  - Anthropic Claude
  - OpenAI GPT
  - LRU RAG Chatbot (custom implementation)
