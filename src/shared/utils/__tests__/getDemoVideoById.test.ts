import { getDemoById } from '@/shared/utils/getDemoVideoById';

const items = [
  { id: 'a', title: 'Item A' },
  { id: 'b', title: 'Item B' },
  { id: 'c', title: 'Item C' },
];

describe('getDemoById', () => {
  it('일치하는 id가 있으면 해당 항목을 반환한다', () => {
    expect(getDemoById(items, 'b')).toEqual({ id: 'b', title: 'Item B' });
  });

  it('첫 번째 항목을 올바르게 찾는다', () => {
    expect(getDemoById(items, 'a')).toEqual({ id: 'a', title: 'Item A' });
  });

  it('마지막 항목을 올바르게 찾는다', () => {
    expect(getDemoById(items, 'c')).toEqual({ id: 'c', title: 'Item C' });
  });

  it('일치하는 id가 없으면 undefined를 반환한다', () => {
    expect(getDemoById(items, 'z')).toBeUndefined();
  });

  it('빈 배열에서는 undefined를 반환한다', () => {
    expect(getDemoById([], 'a')).toBeUndefined();
  });
});
