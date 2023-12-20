
// Format date to a readable format
function formatDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(undefined, options);
}

// Capitalize first letter of a string
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export { formatDate, capitalize };
