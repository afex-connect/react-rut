import isValid from '../../utils/isValid';

describe('utils.isValid', () => {
  it('check valid RUTs', async () => {
    expect(isValid('1-9')).toBeTruthy();
    expect(isValid('19')).toBeTruthy();
    expect(isValid('6k')).toBeTruthy();
    expect(isValid('6K')).toBeTruthy();
    expect(isValid('6-k')).toBeTruthy();
    expect(isValid('6-K')).toBeTruthy();
    expect(isValid('14-0')).toBeTruthy();
    expect(isValid('12345678-5')).toBeTruthy();
    expect(isValid('12.345.678-5')).toBeTruthy();
  });

  it('check invalid RUTs', async () => {
    expect(isValid(undefined)).toBeFalsy();
    expect(isValid('')).toBeFalsy();
    expect(isValid('0-0')).toBeFalsy();
    expect(isValid('1-K')).toBeFalsy();
    expect(isValid('1K')).toBeFalsy();
    expect(isValid('12345678-8')).toBeFalsy();
    expect(isValid('12.345.678-8')).toBeFalsy();
  });
});
