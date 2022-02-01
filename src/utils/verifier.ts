export default function verifier (value?: string): string {
  const unformatted = value;

  if (!unformatted || /^0+/.test(unformatted)) {
    return '';
  }

  let remainer = parseInt(unformatted, 10);
  let module = 1;
  let counter = 0;

  while (remainer > 0) {
    module = (module + (remainer % 10) * (9 - (counter++ % 6))) % 11;
    remainer = Math.floor(remainer / 10);
  }

  return module > 0 ? '' + (module - 1) : 'K';
}
