import unformat from './unformat';

export default function format (value?: string): string {
  const unformatted = unformat(value);

  if (unformatted.length < 2) {
    return unformatted;
  }

  const length = unformatted.length - 1;

  const rut = unformatted
    .substring(0, length)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  return `${rut}-${unformatted.charAt(length)}`;
}
