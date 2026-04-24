export function formatNumber(value: number, locale = "en-GB"): string {
  return new Intl.NumberFormat(locale).format(value);
}
