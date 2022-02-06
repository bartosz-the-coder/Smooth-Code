export function getFormattedDate(date) {
  if (!date) {
    return "currently";
  }

  return date.toLocaleString('en-GB', {
    month: "short",
    year: "numeric",
  });
}
