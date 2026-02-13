"use client";

import { useState, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { extractPdfText } from "../lib/pdfUtils";
import { fetchUrlContent, normalizeUrl } from "../lib/contentFetcher";
import { sendChatMessage } from "../lib/chatApi";
import { Header } from "./teacher/Header";
import { ContentSourceSection } from "./teacher/ContentSourceSection";
import { Suggestions } from "./teacher/Suggestions";
import { ChatMessages } from "./teacher/ChatMessages";
import { InputArea } from "./teacher/InputArea";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function TeacherTool() {
  const { language, setLanguage, t } = useLanguage();
  const [url, setUrl] = useState("");
  const [loadedUrl, setLoadedUrl] = useState("");
  const [pageContent, setPageContent] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchingContent, setFetchingContent] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loadedPdfName, setLoadedPdfName] = useState("");
  const [contentMode, setContentMode] = useState<"url" | "pdf" | null>(null);
  const [pdfPickerOpened, setPdfPickerOpened] = useState(false);

  const handlePaste = async (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData("text").trim();
    console.log("Pasted text:", pastedText);

    if (pastedText && pastedText.startsWith("http")) {
      e.preventDefault();
      const urlToFetch = normalizeUrl(pastedText);
      setUrl(urlToFetch);

      setFetchingContent(true);
      try {
        const content = await fetchUrlContent(urlToFetch);
        setPageContent(content);
        setLoadedUrl(urlToFetch);
        setMessages([
          {
            role: "assistant",
            content: t.chat.urlLoadedMessage.replace("{url}", urlToFetch),
          },
        ]);
      } catch (error) {
        console.error("Error fetching content:", error);
        alert(t.errors.urlFetchFailed);
      } finally {
        setFetchingContent(false);
      }
    }
  };

  const fetchWebContent = async () => {
    if (!url.trim()) return;

    const urlToFetch = normalizeUrl(url.trim());
    setUrl(urlToFetch);

    setFetchingContent(true);
    try {
      const content = await fetchUrlContent(urlToFetch);
      console.log(t.errors.fetchContentLength, content?.length);
      setPageContent(content);
      setLoadedUrl(urlToFetch);
      setMessages([
        {
          role: "assistant",
          content: t.chat.urlLoadedMessage.replace("{url}", urlToFetch),
        },
      ]);
    } catch (error) {
      console.error("Error fetching content:", error);
      alert(t.errors.urlFetchFailed);
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
      const response = await sendChatMessage(
        messageContent,
        pageContent,
        loadedUrl,
        updatedMessages,
      );
      const assistantMessage: Message = {
        role: "assistant",
        content: response,
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
          content: t.errors.apiError.replace("{error}", errorMessage),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (prompt: string) => {
    sendMessage(prompt);
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
      setContentMode(null);
      setPdfPickerOpened(false);
      return;
    }

    if (!file.type.includes("pdf")) {
      alert(t.errors.pdfNotValid);
      setContentMode(null);
      setPdfPickerOpened(false);
      return;
    }

    setFetchingContent(true);
    try {
      const result = await extractPdfText(file);
      setPageContent(result.text);
      setLoadedPdfName(file.name);
      setLoadedUrl("");
      setPdfPickerOpened(true);
      setMessages([
        {
          role: "assistant",
          content: t.chat.pdfLoadedMessage
            .replace("{pages}", result.pageCount.toString()),
        },
      ]);
    } catch (error) {
      console.error("Error processing PDF:", error);
      const errorMessage =
        error instanceof Error ? error.message : t.errors.pdfUploadFailed;
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
      setTimeout(() => {
        if (fileInputRef.current && !fileInputRef.current.files?.length) {
          setContentMode(null);
          setPdfPickerOpened(false);
        }
      }, 300);
      window.removeEventListener("focus", onFocus);
    };

    window.addEventListener("focus", onFocus);
    fileInputRef.current?.click();
  };

  const handleContentModeChange = (mode: "url" | "pdf") => {
    setContentMode(mode);
    if (mode === "pdf") {
      setPdfPickerOpened(true);
      setTimeout(() => handlePdfClick(), 0);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <Header
        title={t.header.title}
        subtitle={t.header.subtitle}
        language={language}
        onLanguageChange={setLanguage}
      />

      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-8 py-6">
        <ContentSourceSection
          contentMode={contentMode}
          url={url}
          loadedUrl={loadedUrl}
          loadedPdfName={loadedPdfName}
          fetchingContent={fetchingContent}
          pdfPickerOpened={pdfPickerOpened}
          fileInputRef={fileInputRef}
          translations={t}
          onContentModeChange={handleContentModeChange}
          onUrlChange={setUrl}
          onFetchWebContent={fetchWebContent}
          onPaste={handlePaste}
          onPdfUpload={handlePdfUpload}
          onPdfClick={handlePdfClick}
          onStartFresh={startFresh}
        />

        {pageContent && (
          <Suggestions
            loading={loading}
            translations={{
              title: t.quickActions.title,
              labels: {
                summarize: t.quickActions.summarize,
                createPodcast: t.quickActions.createPodcast,
                generateQuestions: t.quickActions.generateQuestions,
                studyGuide: t.quickActions.studyGuide,
                quiz: t.quickActions.quiz,
              },
              prompts: {
                summarize: t.suggestions.summarize,
                createPodcast: t.suggestions.createPodcast,
                generateQuestions: t.suggestions.generateQuestions,
                studyGuide: t.suggestions.studyGuide,
                quiz: t.suggestions.quiz,
              },
            }}
            onSuggestionClick={handleSuggestionClick}
          />
        )}

        <ChatMessages
          messages={messages}
          loading={loading}
          emptyStateTitle={t.chat.emptyStateTitle}
          emptyStateSubtitle={t.chat.emptyStateSubtitle}
          copyTooltip={t.chat.copyTooltip}
          copiedTooltip={t.chat.copiedTooltip}
          readAloudTooltip={t.chat.readAloudTooltip}
          stopReadingTooltip={t.chat.stopReadingTooltip}
        />

        <InputArea
          input={input}
          loading={loading}
          pageContent={pageContent}
          placeholderWithContent={t.chat.inputPlaceholder}
          placeholderEmpty={t.chat.inputPlaceholderEmpty}
          sendButtonText={t.chat.sendButton}
          onInputChange={setInput}
          onSendMessage={() => sendMessage(input)}
        />
      </div>
    </div>
  );
}
