import unformat from './unformat';
import verifier from './verifier';

export default function isValid (value?: string): boolean {
  const unformatted = unformat(value);

  if (/^0+/.test(unformatted) || !value) {
    return false;
  }

  const _verifier = verifier(unformatted.slice(0, -1));
  return _verifier === unformatted.slice(-1);
}
