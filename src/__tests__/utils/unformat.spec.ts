import unformat from '../../utils/unformat';

describe('utils.unformat', () => {
  it('unformat a RUT', async () => {
    expect(unformat('12.345.678-9')).toBe('123456789');
    expect(unformat('12.345.678-0')).toBe('123456780');
    expect(unformat('12.345.678-k')).toBe('12345678K');
    expect(unformat('12.345.678-K')).toBe('12345678K');
    expect(unformat('9.876.543-k')).toBe('9876543K'); // lowercase k
    expect(unformat('9.876.543-K')).toBe('9876543K'); // uppercase k
    expect(unformat('1-0')).toBe('10');
    expect(unformat('1-9')).toBe('19');
    expect(unformat('1-k')).toBe('1K');
    expect(unformat('1-K')).toBe('1K');
    expect(unformat('')).toBe('');
    expect(unformat(undefined)).toBe('');
  });
});
