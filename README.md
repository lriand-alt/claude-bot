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
- 🤖 AI Provider:
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
  - LRU RAG Chatbot (custom implementation)
