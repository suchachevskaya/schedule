export const split = (total) => {
  const n = Number(total) || 0;
  const first = Math.ceil(n / 2);
  const second = n - first;
  return [first, second];
};
