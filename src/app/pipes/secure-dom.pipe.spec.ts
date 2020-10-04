import { SecureDomPipe } from './secure-dom.pipe';

describe('SecureDomPipe', () => {
  it('create an instance', () => {
    const pipe = new SecureDomPipe();
    expect(pipe).toBeTruthy();
  });
});
