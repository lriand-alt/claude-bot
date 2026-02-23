# LRU RAG Chatbot API
This is an API class for talking to an LRU Rag chatbot. All files associated are in RAG-api folder.

## Usage
1. Create an instance of the API class
const myApi = new LruRagChatbotApi('https://admin.dev.lrurag.dk/api/v1/chat', { applicationId: 'worldst-best-chatbot' })

2. Talk to it
myApi.sendChatMessage({ message:'What up?' })
