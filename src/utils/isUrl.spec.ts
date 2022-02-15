import { isUrl } from './isUrl';

describe('isUrl', () => {
  it('identifies protocol-prefixed localhost url value as valid', () => {
    expect(isUrl('https://localhost:3000')).toBeTruthy();
  });
  it('identifies protocol-prefixed ubiqsmart.com url value as valid', () => {
    expect(isUrl('https://ubiqsmart.com')).toBeTruthy();
  });
  it('identifies protocol-prefixed pyrus.ubiqsmart.com url value as valid', () => {
    expect(isUrl('https://pyrus.ubiqsmart.com')).toBeTruthy();
  });
  it('identifies localhost url value as invalid', () => {
    expect(isUrl('localhost:3000')).toBeFalsy();
  });
  it('identifies ubiqsmart.com url value as invalid', () => {
    expect(isUrl('ubiqsmart.com')).toBeFalsy();
  });
  it('identifies pyrus.ubiqsmart.com url value as invalid', () => {
    expect(isUrl('ubiqsmart.com')).toBeFalsy();
  });
  it('identifies empty string as invalid', () => {
    expect(isUrl('')).toBeFalsy();
  });
});
