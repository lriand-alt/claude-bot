"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  {
    label: "📝 Summarize",
    prompt: "Create a concise summary of the main points from this PDF.",
  },
  {
    label: "🎙️ Create Podcast",
    prompt:
      "Create a podcast script based on this content, including an introduction, key discussion points, and conclusion.",
  },
  {
    label: "❓ Generate Questions",
    prompt:
      "Create 10 comprehension questions about this content suitable for students.",
  },
  {
    label: "📚 Study Guide",
    prompt:
      "Create a detailed study guide with key terms, main concepts, and important takeaways.",
  },
  {
    label: "🧪 Quiz",
    prompt:
      "Create a 5-question multiple choice quiz based on this content with answer explanations.",
  },
];

export default function TeacherTool() {
  const [url, setUrl] = useState("");
  const [loadedUrl, setLoadedUrl] = useState("");
  const [pageContent, setPageContent] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchingContent, setFetchingContent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loadedPdfName, setLoadedPdfName] = useState("");
  const [contentMode, setContentMode] = useState<"url" | "pdf" | null>(null);
  const [pdfPickerOpened, setPdfPickerOpened] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handlePaste = async (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData("text").trim();
    console.log("Pasted text:", pastedText); // Debug log

    if (pastedText && pastedText.startsWith("http")) {
      e.preventDefault(); // Prevent default paste
      let urlToFetch = pastedText;
      // Add https:// if no protocol is specified
      if (
        !urlToFetch.startsWith("http://") &&
        !urlToFetch.startsWith("https://")
      ) {
        urlToFetch = "https://" + urlToFetch;
      }
      setUrl(urlToFetch);

      // Fetch content immediately with the pasted URL
      setFetchingContent(true);
      try {
        const response = await fetch("/api/fetch-content", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: urlToFetch }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch content");
        }

        const data = await response.json();
        setPageContent(data.content);
        setLoadedUrl(urlToFetch);
        setMessages([
          {
            role: "assistant",
            content: `I've loaded the content from ${urlToFetch}. You can now ask me to summarize it, create a podcast script, generate questions, or anything else you'd like me to do with this content.`,
          },
        ]);
      } catch (error) {
        console.error("Error fetching content:", error);
        alert(
          "Failed to fetch the webpage content. Please make sure the URL is valid.",
        );
      } finally {
        setFetchingContent(false);
      }
    }
  };

  const fetchWebContent = async () => {
    if (!url.trim()) return;

    // Add https:// if no protocol is specified
    let urlToFetch = url.trim();
    if (
      !urlToFetch.startsWith("http://") &&
      !urlToFetch.startsWith("https://")
    ) {
      urlToFetch = "https://" + urlToFetch;
      setUrl(urlToFetch);
    }

    setFetchingContent(true);
    try {
      const response = await fetch("/api/fetch-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: urlToFetch }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch content");
      }

      const data = await response.json();
      console.log("Fetched content length:", data.content?.length);
      setPageContent(
        data.content || "Content loaded but no text could be extracted.",
      );
      setLoadedUrl(urlToFetch);
      setMessages([
        {
          role: "assistant",
          content: `I've loaded the content from ${urlToFetch}. You can now ask me to summarize it, create a podcast script, generate questions, or anything else you'd like me to do with this content.`,
        },
      ]);
    } catch (error) {
      console.error("Error fetching content:", error);
      alert(
        "Failed to fetch the webpage content. Please make sure the URL is valid.",
      );
    } finally {
      setFetchingContent(false);
    }
  };

  const sendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return;

    const userMessage: Message = { role: "user", content: messageContent };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pageContent,
          url: loadedUrl,
          conversationHistory: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `❌ Error: ${errorMessage}\n\nPlease check:\n1. Your API key is configured in .env.local\n2. The API key is valid\n3. You have sufficient credits\n\nCheck the browser console for more details.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (prompt: string) => {
    sendMessage(prompt);
  };
  const handleSpeak = (text: string, index: number) => {
    // Stop any ongoing speech
    if (speakingIndex !== null) {
      window.speechSynthesis.cancel();
      if (speakingIndex === index) {
        setSpeakingIndex(null);
        return;
      }
    }

    // Start new speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setSpeakingIndex(null);
    utterance.onerror = () => setSpeakingIndex(null);
    window.speechSynthesis.speak(utterance);
    setSpeakingIndex(index);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setSpeakingIndex(null);
  };

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  // Load PDF.js from CDN
  const loadPdfJs = async () => {
    if ((window as any).pdfjsLib) {
      return (window as any).pdfjsLib;
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
      script.onload = () => {
        const pdfjsLib = (window as any).pdfjsLib;
        pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        resolve(pdfjsLib);
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const startFresh = () => {
    setContentMode(null);
    setUrl("");
    setLoadedUrl("");
    setPageContent("");
    setMessages([]);
    setInput("");
    setLoadedPdfName("");
    setPdfPickerOpened(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      // User cancelled - go back to initial choices
      setContentMode(null);
      setPdfPickerOpened(false);
      return;
    }

    if (!file.type.includes("pdf")) {
      alert("Please upload a PDF file");
      setContentMode(null);
      setPdfPickerOpened(false);
      return;
    }

    setFetchingContent(true);
    try {
      // Load PDF.js from CDN dynamically
      const pdfjsLib = await loadPdfJs();

      // Read file as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);

      // Load PDF document
      const loadingTask = pdfjsLib.getDocument({ data: uint8Array });
      const pdfDocument = await loadingTask.promise;

      let fullText = "";

      // Extract text from each page
      for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
        const page = await pdfDocument.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(" ");
        fullText += pageText + "\n\n";
      }

      const extractedText = fullText.trim();
      const finalContent =
        extractedText ||
        `[PDF uploaded: ${file.name} with ${pdfDocument.numPages} pages. This PDF may contain images or non-extractable text. Please describe what you'd like help with from this document.]`;

      setPageContent(finalContent);
      setLoadedPdfName(file.name);
      setLoadedUrl("");
      setPdfPickerOpened(true);
      setMessages([
        {
          role: "assistant",
          content: `I've loaded the PDF "${file.name}" (${pdfDocument.numPages} pages). You can now ask me to summarize it, create a podcast script, generate questions, or anything else you'd like me to do with this content.`,
        },
      ]);
    } catch (error) {
      console.error("Error processing PDF:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to process PDF";
      alert(errorMessage);
      setContentMode(null);
      setPdfPickerOpened(false);
    } finally {
      setFetchingContent(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handlePdfClick = () => {
    const onFocus = () => {
      // Check if a file was selected after a small delay
      setTimeout(() => {
        if (fileInputRef.current && !fileInputRef.current.files?.length) {
          // No file selected - user cancelled
          setContentMode(null);
          setPdfPickerOpened(false);
        }
      }, 300);
      window.removeEventListener("focus", onFocus);
    };

    window.addEventListener("focus", onFocus);
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      {/* Header */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold rainbow-text">
            🎓 Teacher's Content Assistant
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Transform web content into educational materials
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-8 py-6">
        {/* Initial Choice or Content Source Section */}
        {contentMode === null ? (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 text-center">
              How would you like to load content?
            </label>
            <div className="flex gap-4 max-w-md mx-auto">
              <Button
                onClick={() => setContentMode("url")}
                variant="primary"
                size="lg"
                className="flex-1"
              >
                🌐 Load from URL
              </Button>
              <Button
                onClick={() => {
                  setContentMode("pdf");
                  setPdfPickerOpened(true);
                  setTimeout(() => handlePdfClick(), 0);
                }}
                variant="secondary"
                size="lg"
                className="flex-1"
              >
                📄 Upload PDF
              </Button>
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {contentMode === "url" ? "Load from URL" : "Upload PDF"}
              </label>
              {(loadedUrl || loadedPdfName) && (
                <Button onClick={startFresh} variant="outline" size="sm">
                  🔄 Start Fresh
                </Button>
              )}
            </div>

            {contentMode === "url" ? (
              <div className="flex gap-3">
                <Input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && fetchWebContent()}
                  onPaste={handlePaste}
                  placeholder="https://example.com/article"
                  disabled={fetchingContent}
                  inputSize="md"
                  className="flex-1"
                />
                <Button
                  onClick={fetchWebContent}
                  disabled={fetchingContent || !url.trim()}
                  variant="primary"
                  size="lg"
                >
                  {fetchingContent ? "Loading..." : "Load URL"}
                </Button>
              </div>
            ) : (
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handlePdfUpload}
                  className="hidden"
                  id="pdf-upload"
                />
                {!loadedPdfName && !pdfPickerOpened ? (
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={fetchingContent}
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  >
                    {fetchingContent ? "Loading..." : "📄 Upload PDF"}
                  </Button>
                ) : loadedPdfName ? (
                  <div className="text-sm text-gray-700 dark:text-gray-300 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                    📄 {loadedPdfName}
                  </div>
                ) : (
                  <div className="text-sm text-gray-500 dark:text-gray-400 p-3 text-center">
                    Waiting for file selection...
                  </div>
                )}
              </div>
            )}

            {loadedUrl && (
              <p className="mt-2 text-sm text-green-600 dark:text-green-500 font-medium">
                ✓ Content loaded from: {loadedUrl}
              </p>
            )}
            {loadedPdfName && (
              <p className="mt-2 text-sm text-green-600 dark:text-green-500 font-medium">
                ✓ PDF loaded: {loadedPdfName}
              </p>
            )}
          </div>
        )}

        {/* Suggestions */}
        {pageContent && (
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Quick Actions:
            </p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((suggestion, index) => (
                <Button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion.prompt)}
                  disabled={loading}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  {suggestion.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-6 min-h-0">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-center text-gray-400 dark:text-gray-600">
              <div>
                <p className="text-xl mb-2">
                  👆 Enter a URL or upload a PDF to get started
                </p>
                <p className="text-sm">
                  Load content and I'll help you create educational materials
                  from it
                </p>
              </div>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-3xl px-5 py-3 rounded-2xl ${
                    message.role === "user"
                      ? "bg-gray-800 dark:bg-gray-700 text-white"
                      : "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1 whitespace-pre-wrap">
                      {message.content}
                    </div>
                    {message.role === "assistant" && (
                      <div className="flex gap-1">
                        <Button
                          onClick={() => handleCopy(message.content, index)}
                          variant="ghost"
                          size="icon"
                          className="rounded-lg"
                          title={
                            copiedIndex === index
                              ? "Copied!"
                              : "Copy to clipboard"
                          }
                        >
                          {copiedIndex === index ? (
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          )}
                        </Button>
                        <Button
                          onClick={() => handleSpeak(message.content, index)}
                          variant="ghost"
                          size="icon"
                          className="rounded-lg"
                          title={
                            speakingIndex === index
                              ? "Stop reading"
                              : "Read aloud"
                          }
                        >
                          {speakingIndex === index ? (
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-5 py-3 rounded-2xl">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-green-500 dark:bg-green-600 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="sticky bottom-0 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-4 pb-2">
          <div className="flex gap-3">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder={
                pageContent
                  ? "Ask me to do something with this content..."
                  : "Ask me anything or load content to analyze..."
              }
              disabled={loading}
              inputSize="md"
              className="flex-1"
            />
            <Button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              variant="secondary"
              size="lg"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
