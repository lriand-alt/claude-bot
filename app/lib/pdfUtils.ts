/**
 * Load PDF.js library from CDN
 * Returns cached instance if already loaded
 */
export const loadPdfJs = async () => {
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

/**
 * Extract text content from a PDF file
 * @param file - PDF file to process
 * @returns Object with extracted text, filename, and page count
 */
export const extractPdfText = async (
  file: File,
): Promise<{
  text: string;
  filename: string;
  pageCount: number;
}> => {
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
    const pageText = textContent.items.map((item: any) => item.str).join(" ");
    fullText += pageText + "\n\n";
  }

  const extractedText = fullText.trim();
  const finalText =
    extractedText ||
    `[PDF uploaded: ${file.name} with ${pdfDocument.numPages} pages. This PDF may contain images or non-extractable text. Please describe what you'd like help with from this document.]`;

  return {
    text: finalText,
    filename: file.name,
    pageCount: pdfDocument.numPages,
  };
};
