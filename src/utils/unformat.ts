export default function unformat (value?: string): string {
  if (!value) {
    return '';
  }

  return value.replace(/^0+|[^0-9kK]+/g, '').toUpperCase();
}
