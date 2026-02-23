"use client";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

interface ContentSourceSectionProps {
  contentMode: "url" | "pdf" | null;
  url: string;
  loadedUrl: string;
  loadedPdfName: string;
  fetchingContent: boolean;
  pdfPickerOpened: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  translations: any;
  onContentModeChange: (mode: "url" | "pdf") => void;
  onUrlChange: (url: string) => void;
  onFetchWebContent: () => void;
  onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  onPdfUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPdfClick: () => void;
  onStartFresh: () => void;
}

export function ContentSourceSection({
  contentMode,
  url,
  loadedUrl,
  loadedPdfName,
  fetchingContent,
  pdfPickerOpened,
  fileInputRef,
  translations: t,
  onContentModeChange,
  onUrlChange,
  onFetchWebContent,
  onPaste,
  onPdfUpload,
  onPdfClick,
  onStartFresh,
}: ContentSourceSectionProps) {
  if (contentMode === null) {
    return (
      <Button
        onClick={() => onContentModeChange("pdf")}
        variant="secondary"
        size="md"
      >
        {t.contentSource.uploadPdf}
      </Button>
    );
  }

  return (
    <div className="mb-6">
      {contentMode === "url" ? (
        <>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.contentSource.urlLabel}
            </label>
            {loadedUrl && (
              <Button onClick={onStartFresh} variant="outline" size="sm">
                {t.contentSource.startFresh}
              </Button>
            )}
          </div>
          <div className="flex gap-3">
            <Input
              type="url"
              value={url}
              onChange={(e) => onUrlChange(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onFetchWebContent()}
              onPaste={onPaste}
              placeholder={t.contentSource.urlPlaceholder}
              disabled={fetchingContent}
              inputSize="md"
              className="flex-1"
            />
            <Button
              onClick={onFetchWebContent}
              disabled={fetchingContent || !url.trim()}
              variant="primary"
              size="lg"
            >
              {fetchingContent
                ? t.contentSource.loading
                : t.contentSource.loadUrlButton}
            </Button>
          </div>
        </>
      ) : (
        <>
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={onPdfUpload}
              className="hidden"
              id="pdf-upload"
            />
            {!loadedPdfName && !pdfPickerOpened ? (
              <Button
                onClick={() => fileInputRef.current?.click()}
                disabled={fetchingContent}
                variant="secondary"
                size="lg"
                className="w-fit"
              >
                {fetchingContent
                  ? t.contentSource.loading
                  : t.contentSource.uploadPdfButton}
              </Button>
            ) : loadedPdfName ? (
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                  <svg
                    className="w-5 h-5 text-green-600 shrink-0"
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
                  <span className="font-medium">PDF loaded:</span>
                  <span>{loadedPdfName}</span>
                </div>
                <Button onClick={onStartFresh} variant="outline" size="sm">
                  {t.contentSource.startFresh}
                </Button>
              </div>
            ) : (
              <div className="text-sm text-gray-500 dark:text-gray-400 p-3 text-center">
                {t.contentSource.waitingForFile}
              </div>
            )}
          </div>
        </>
      )}

      {loadedUrl && (
        <p className="mt-2 text-sm text-green-600 dark:text-green-500 font-medium">
          {t.contentSource.contentLoadedFrom} {loadedUrl}
        </p>
      )}
    </div>
  );
}
