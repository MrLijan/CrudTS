export function encode(str: string): string {
  let buff = Buffer.from(str).toString('base64');
  return buff;
}

export function decode(str: string): string {
  const buff = Buffer.from(str, 'base64').toString('ascii');
  return buff;
}
