export async function copyHtmlToClipboard(html: string, plainText: string): Promise<void> {
  if (!navigator.clipboard) {
    throw new Error('Clipboard API is not available.');
  }

  if (typeof ClipboardItem !== 'undefined') {
    const item = new ClipboardItem({
      'text/html': new Blob([html], { type: 'text/html' }),
      'text/plain': new Blob([plainText], { type: 'text/plain' }),
    });

    await navigator.clipboard.write([item]);
    return;
  }

  await navigator.clipboard.writeText(plainText);
}