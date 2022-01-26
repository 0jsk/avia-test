export const formatDate = (format: 'HH:mm' | 'HH mm', date: Date) => {
  switch (format) {
    case 'HH:mm':
      return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    case 'HH mm':
      return `${date.toLocaleTimeString([], { hour: '2-digit' })}ч ` +
        `${date.toLocaleTimeString([], { minute: '2-digit' })}м`;
    default:
      throw new Error(`Unpredictable format ${format}`);
  }
};
