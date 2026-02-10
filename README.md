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
- 🤖 Powered by Claude (Anthropic) or GPT (OpenAI)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure your API key:
   - Copy `.env.example` to `.env.local`
   - Add your Anthropic API key (recommended) or OpenAI API key
   ```bash
   cp .env.example .env.local
   ```
   
   Get your API key from:
   - Anthropic: https://console.anthropic.com/
   - OpenAI: https://platform.openai.com/api-keys

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Enter a URL**: Paste the URL of any webpage you want to work with
2. **Load Content**: Click "Load Content" to fetch and process the webpage
3. **Choose an action**: Click one of the quick action buttons or type your own request
4. **Get results**: The AI will process the content according to your request

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
- Anthropic Claude / OpenAI GPT

