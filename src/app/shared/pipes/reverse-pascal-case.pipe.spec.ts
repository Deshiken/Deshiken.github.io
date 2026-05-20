import { TestBed } from '@angular/core/testing';
import { ReversePascalCasePipe } from './reverse-pascal-case.pipe';

describe('ReversePascalCasePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePascalCasePipe();
    expect(pipe).toBeTruthy();
  });
  it('should reverse PascalCase to Pascal Case', () => {
    const pipe = new ReversePascalCasePipe();
    expect(pipe.transform('PascalCase')).toBe('Pascal Case');
  });
  it('should reverse Pascal_Case to Pascal_ Case', () => {
    const pipe = new ReversePascalCasePipe();
    expect(pipe.transform('Pascal_Case')).toBe('Pascal_ Case');
  });
  it('should handle empty string', () => {
    const pipe = new ReversePascalCasePipe();
    expect(pipe.transform('')).toBe('');
  });
});
