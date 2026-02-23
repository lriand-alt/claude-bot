# Quick Start: Using RAG API

## Setup (One-time)

1. **Configure environment variables** in `.env.local`:
   ```bash
   LRU_RAG_API_URL=https://admin.dev.lrurag.dk/api/v1/chat
   LRU_RAG_APPLICATION_ID=your_application_id_here
   ```
   
   OR use Assistant ID instead:
   ```bash
   LRU_RAG_API_URL=https://admin.dev.lrurag.dk/api/v1/chat
   LRU_RAG_ASSISTANT_ID=your_assistant_guid_here
   ```

2. **Restart the dev server**:
   ```bash
   npm run dev
   ```

## Usage

1. Open http://localhost:3000
2. Click the **RAG** button in the provider selector (top right)
3. Load content (URL or PDF)
4. Start chatting!

## Features

### What RAG Does
- Uses your custom LRU RAG knowledge base
- Provides responses based on your specific data sources
- Ideal for domain-specific or organizational knowledge

### When to Use RAG
- ✅ Need answers from specific organizational knowledge
- ✅ Have a custom knowledge base configured
- ✅ Want consistent responses from curated sources

### When to Use Claude/OpenAI
- ✅ Need general knowledge and reasoning
- ✅ Want creative content generation
- ✅ Working with diverse topics

## Troubleshooting

### "RAG API not configured" message
1. Check `.env.local` file exists
2. Verify `LRU_RAG_API_URL` is set
3. Verify either `LRU_RAG_APPLICATION_ID` or `LRU_RAG_ASSISTANT_ID` is set
4. Restart dev server

### No response from RAG
1. Check API URL is correct and accessible
2. Verify your application/assistant ID is valid
3. Check browser console for error details

## API Details

See [README-LRU-RAG.md](README-LRU-RAG.md) for RAG API documentation.
