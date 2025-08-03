export const formatMessage = (text: string) => {
  let formattedText = text;
  
  formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formattedText = formattedText.replace(/__(.*?)__/g, '<strong>$1</strong>');
  formattedText = formattedText.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
  formattedText = formattedText.replace(/(?<!_)_([^_]+)_(?!_)/g, '<em>$1</em>');
  formattedText = formattedText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600 underline">$1</a>');
  
  const lines = formattedText.split('\n');
  let inList = false;
  const processedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const bulletMatch = line.match(/^(\s*)[\*\-\+]\s+(.+)$/);
    
    if (bulletMatch) {
      if (!inList) {
        processedLines.push('<ul class="list-disc list-inside ml-4 space-y-1">');
        inList = true;
      }
      processedLines.push(`<li class="ml-2">${bulletMatch[2]}</li>`);
    } else {
      if (inList && line.trim() === '') {
        continue;
      } else if (inList) {
        processedLines.push('</ul>');
        inList = false;
        processedLines.push(line);
      } else {
        processedLines.push(line);
      }
    }
  }
  
  if (inList) {
    processedLines.push('</ul>');
  }
  
  formattedText = processedLines.join('\n');
  formattedText = formattedText.replace(/\n(?!<\/ul>|<li|<ul)/g, '<br>');
  formattedText = formattedText.replace(/`([^`]+)`/g, '<code class="bg-gray-200 dark:bg-gray-600 px-1 py-0.5 rounded text-sm font-mono">$1</code>');
  
  return formattedText;
};
