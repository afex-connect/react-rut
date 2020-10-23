import format from '../../utils/format';

describe('utis.format', () => {
  it('format correctly a raw value', async () => {
    expect(format(undefined)).toBe('');
    expect(format('')).toBe('');
    expect(format('1')).toBe('1');
    expect(format('12')).toBe('1-2');
    expect(format('123')).toBe('12-3');
    expect(format('1234')).toBe('123-4');
    expect(format('12345')).toBe('1.234-5');
    expect(format('123456')).toBe('12.345-6');
    expect(format('1234567')).toBe('123.456-7');
    expect(format('12345678')).toBe('1.234.567-8');
    expect(format('123456789')).toBe('12.345.678-9');
    expect(format('1234567890')).toBe('123.456.789-0');
    expect(format('12345678901')).toBe('1.234.567.890-1');
  });

  it('format correctly a dashed value', async () => {
    expect(format('1')).toBe('1');
    expect(format('1-2')).toBe('1-2');
    expect(format('12-3')).toBe('12-3');
    expect(format('123-4')).toBe('123-4');
    expect(format('1234-5')).toBe('1.234-5');
    expect(format('12345-6')).toBe('12.345-6');
    expect(format('123456-7')).toBe('123.456-7');
    expect(format('1234567-8')).toBe('1.234.567-8');
    expect(format('12345678-9')).toBe('12.345.678-9');
    expect(format('123456789-0')).toBe('123.456.789-0');
    expect(format('1234567890-1')).toBe('1.234.567.890-1');
  });

  it('format correctly a dot-dashed value', async () => {
    expect(format('1')).toBe('1');
    expect(format('1-2')).toBe('1-2');
    expect(format('12-3')).toBe('12-3');
    expect(format('123-4')).toBe('123-4');
    expect(format('1.234-5')).toBe('1.234-5');
    expect(format('12.345-6')).toBe('12.345-6');
    expect(format('123.456-7')).toBe('123.456-7');
    expect(format('1.234.567-8')).toBe('1.234.567-8');
    expect(format('12.345.678-9')).toBe('12.345.678-9');
    expect(format('123.456.789-0')).toBe('123.456.789-0');
    expect(format('1.234.567.890-1')).toBe('1.234.567.890-1');
  });

  it('format correctly a symbol based value', async () => {
    expect(format('1')).toBe('1');
    expect(format('1***2')).toBe('1-2');
    expect(format('1.2,"#$%&/=?¡`^3;4:[5]{6}78(-)9')).toBe('12.345.678-9');
  });
});
