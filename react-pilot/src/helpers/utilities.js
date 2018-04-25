export function validateEmail(text) {
  const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    return false;
  }
  return true;
}

export function validateCPF(c) {
  if ((c = c.replace(/[^\d]/g, '')).length !== 11) return false;

  if (c === '00000000000') return false;

  let r;
  let s = 0;

  for (let i = 1; i <= 9; i++) s += parseInt(c[i - 1]) * (11 - i);

  r = (s * 10) % 11;

  if (r === 10 || r === 11) r = 0;

  if (r !== parseInt(c[9])) return false;

  s = 0;

  for (let i = 1; i <= 10; i++) s += parseInt(c[i - 1]) * (12 - i);

  r = (s * 10) % 11;

  if (r === 10 || r === 11) r = 0;

  if (r !== parseInt(c[10])) return false;

  return true;
}
