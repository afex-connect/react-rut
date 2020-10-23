import unformat from './unformat';

export default function isValid (value?: string): boolean {
  const unformatted = unformat(value);

  if (/^0+/.test(unformatted)) {
    return false;
  }

  let remainer = parseInt(unformatted.slice(0, -1), 10);
  let module = 1;
  let counter = 0;

  while (remainer > 0) {
    module = (module + (remainer % 10) * (9 - counter++ % 6)) % 11;
    remainer = Math.floor(remainer / 10);
  }

  const verifier = module > 0 ? '' + (module - 1) : 'K';

  return verifier === unformatted.slice(-1);
}
