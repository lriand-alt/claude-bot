/**
 * Fetch and extract text content from a URL
 * @param url - The URL to fetch content from
 * @returns The extracted text content
 */
export const fetchUrlContent = async (url: string): Promise<string> => {
  const response = await fetch("/api/fetch-content", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch content");
  }

  const data = await response.json();
  return data.content || "Content loaded but no text could be extracted.";
};

/**
 * Normalize URL by adding https:// protocol if missing
 * @param url - The URL to normalize
 * @returns Normalized URL with protocol
 */
export const normalizeUrl = (url: string): string => {
  const trimmedUrl = url.trim();
  if (
    !trimmedUrl.startsWith("http://") &&
    !trimmedUrl.startsWith("https://")
  ) {
    return "https://" + trimmedUrl;
  }
  return trimmedUrl;
};
