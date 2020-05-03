export function isExpired(exp: number): boolean {
  console.log(exp);

  if (!exp) return true;

  const date = new Date(0);
  date.setUTCSeconds(exp);

  return new Date().valueOf() > date.valueOf();
}
