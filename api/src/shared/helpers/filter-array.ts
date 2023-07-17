export function filterArray(input: string): Array<any> {
  return input
    .replace(/\r?\n/g, '')
    .split('\n')
    .filter(item => item.trim() !== '');
}
