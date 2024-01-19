export function getCurrentDate() {
  const hourBrazil = new Date();
  hourBrazil.setHours(hourBrazil.getHours() - 3);
  const dateFormatted = hourBrazil.toISOString().slice(0, 10);
  return dateFormatted;
}
