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
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 text-center">
          {t.contentSource.chooseLabel}
        </label>
        <div className="flex gap-4 max-w-md mx-auto">
          <Button
            onClick={() => onContentModeChange("url")}
            variant="primary"
            size="lg"
            className="flex-1"
          >
            {t.contentSource.loadFromUrl}
          </Button>
          <Button
            onClick={() => onContentModeChange("pdf")}
            variant="secondary"
            size="lg"
            className="flex-1"
          >
            {t.contentSource.uploadPdf}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {contentMode === "url"
            ? t.contentSource.urlLabel
            : t.contentSource.uploadPdfLabel}
        </label>
        {(loadedUrl || loadedPdfName) && (
          <Button onClick={onStartFresh} variant="outline" size="sm">
            {t.contentSource.startFresh}
          </Button>
        )}
      </div>

      {contentMode === "url" ? (
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
      ) : (
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
              className="w-full"
            >
              {fetchingContent
                ? t.contentSource.loading
                : t.contentSource.uploadPdfButton}
            </Button>
          ) : loadedPdfName ? (
            <div className="text-sm text-gray-700 dark:text-gray-300 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              📄 {loadedPdfName}
            </div>
          ) : (
            <div className="text-sm text-gray-500 dark:text-gray-400 p-3 text-center">
              {t.contentSource.waitingForFile}
            </div>
          )}
        </div>
      )}

      {loadedUrl && (
        <p className="mt-2 text-sm text-green-600 dark:text-green-500 font-medium">
          {t.contentSource.contentLoadedFrom} {loadedUrl}
        </p>
      )}
      {loadedPdfName && (
        <p className="mt-2 text-sm text-green-600 dark:text-green-500 font-medium">
          {t.contentSource.pdfLoaded} {loadedPdfName}
        </p>
      )}
    </div>
  );
}
