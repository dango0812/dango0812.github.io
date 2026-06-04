import { cn } from '@/shared/lib/tailwind';

describe('cn', () => {
  it('단일 클래스를 그대로 반환한다', () => {
    expect(cn('flex')).toBe('flex');
  });

  it('여러 클래스를 공백으로 연결한다', () => {
    expect(cn('flex', 'items-center', 'gap-4')).toBe('flex items-center gap-4');
  });

  it('false를 제거한다', () => {
    expect(cn('flex', false, 'items-center')).toBe('flex items-center');
  });

  it('null과 undefined를 제거한다', () => {
    expect(cn('flex', null, undefined, 'items-center')).toBe('flex items-center');
  });

  it('조건부 클래스를 처리한다', () => {
    expect(cn('base', true && 'active')).toBe('base active');
    expect(cn('base', false && 'active')).toBe('base');
  });

  it('Tailwind 충돌 클래스를 마지막 값으로 병합한다', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });
});
