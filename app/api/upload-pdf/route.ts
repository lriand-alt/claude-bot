import { NextResponse } from "next/server";
import { getDocumentProxy } from "unpdf";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!file.type.includes("pdf")) {
      return NextResponse.json(
        { error: "File must be a PDF" },
        { status: 400 },
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();

    // Extract text using unpdf
    const pdf = await getDocumentProxy(new Uint8Array(bytes));
    const totalPages = pdf.numPages;

    let fullText = "";

    // Extract text from each page
    for (let i = 1; i <= totalPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item: any) => item.str).join(" ");
      fullText += pageText + "\n\n";
    }

    const extractedText = fullText.trim();
    const finalContent =
      extractedText ||
      `[PDF uploaded: ${file.name} with ${totalPages} pages. This PDF may contain images or non-extractable text. Please describe what you'd like help with from this document.]`;

    return NextResponse.json({
      content: finalContent,
      filename: file.name,
      pages: totalPages,
    });
  } catch (error) {
    console.error("Error processing PDF:", error);
    return NextResponse.json(
      { error: "Failed to process PDF file" },
      { status: 500 },
    );
  }
}
