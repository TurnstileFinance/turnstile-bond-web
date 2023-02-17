export function range(length: number, start = 0) {
  return Array.from({ length }, (_, i) => i + start);
}

export function toHex(num: string) {
  const val = Number(num);
  return '0x' + val.toString(16);
}
