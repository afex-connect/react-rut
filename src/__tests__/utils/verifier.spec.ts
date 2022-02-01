import verifier from '../../utils/verifier';

describe('utils.verifier', () => {
  it('verify valid RUTs', async () => {
    expect(verifier('1')).toBe('9');
    expect(verifier('19')).toBe('1');
    expect(verifier('6')).toBe('K');
    expect(verifier('14')).toBe('0');
    expect(verifier('12345678')).toBe('5');
  });
});
