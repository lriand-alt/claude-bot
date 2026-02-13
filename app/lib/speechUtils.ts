/**
 * Convert text to speech using Web Speech API
 * @param text - The text to speak
 * @param onEnd - Callback when speech ends
 * @param onError - Callback when speech errors
 */
export const speakText = (
  text: string,
  onEnd?: () => void,
  onError?: () => void,
) => {
  const utterance = new SpeechSynthesisUtterance(text);
  if (onEnd) utterance.onend = onEnd;
  if (onError) utterance.onerror = onError;
  window.speechSynthesis.speak(utterance);
};

/**
 * Stop any ongoing speech
 */
export const stopSpeaking = () => {
  window.speechSynthesis.cancel();
};

/**
 * Copy text to clipboard
 * @param text - The text to copy
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  await navigator.clipboard.writeText(text);
};
