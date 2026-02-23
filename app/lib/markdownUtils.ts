/**
 * Simple markdown parser for basic formatting
 * Converts markdown text to HTML
 */
export function parseMarkdown(text: string): string {
  let html = text;

  // Escape HTML to prevent XSS
  html = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Code blocks (```)
  html = html.replace(/```([^`]+)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-x-auto my-2"><code>$1</code></pre>');

  // Inline code (`)
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">$1</code>');

  // Headers
  html = html.replace(/^#### (.*$)/gim, '<h4 class="text-lg font-bold">$1</h4>');
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold">$1</h1>');

  // Bold (**text** or __text__)
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold">$1</strong>');
  html = html.replace(/__([^_]+)__/g, '<strong class="font-bold">$1</strong>');

  // Italic (*text* or _text_)
  html = html.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');
  html = html.replace(/_([^_]+)_/g, '<em class="italic">$1</em>');

  // Links [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 dark:text-blue-400 underline hover:no-underline" target="_blank" rel="noopener noreferrer">$1</a>');

  // Unordered lists (- or *) - preserve as placeholder to prevent line breaks inside
  const listPlaceholders: string[] = [];
  html = html.replace(/^\s*[-*]\s+(.*)$/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
    const placeholder = `___LIST_PLACEHOLDER_${listPlaceholders.length}___`;
    listPlaceholders.push(`<ul class="list-disc list-inside mt-2 space-y-1 ml-4">${match.replace(/\n/g, '')}</ul>`);
    return placeholder;
  });

  // Line breaks and paragraphs - add spacing after double line breaks
  html = html.replace(/\n\n/g, '<br/><br/>');
  html = html.replace(/\n/g, '<br/>');

  // Restore list placeholders
  listPlaceholders.forEach((list, index) => {
    html = html.replace(`___LIST_PLACEHOLDER_${index}___`, list);
  });

  // Wrap in paragraph
  html = '<p>' + html + '</p>';

  return html;
}
