export function getFormattedDate(date) {
  if (!date) {
    return "currently";
  }

  new Date().toLocaleString(undefined, {  })

  return date.toLocaleString('en-GB', {
    month: "short",
    year: "numeric",
  });
}
