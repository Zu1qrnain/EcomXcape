export function fmt(value) {
  if (typeof value !== 'number' || isNaN(value)) return '$0';
  
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  }
  if (value >= 1000) {
    return `$${Math.round(value).toLocaleString()}`;
  }
  return `$${Math.round(value)}`;
}
