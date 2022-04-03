// Credits: https://bobbyhadz.com/blog/javascript-format-date-yyyy-mm-dd

const defaultLocalDateOpts = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}

export function formatDate(date = new Date()) {
  const newDate = new Date(date)
  return [
    newDate.getFullYear(),
    padTo2Digits(newDate.getMonth() + 1),
    padTo2Digits(newDate.getDate()),
  ].join("-")
}

export function toLocaleDate(date = new Date(), opts = defaultLocalDateOpts) {
  const newDate = new Date(date).toLocaleDateString(undefined, opts)
  return newDate
}

function padTo2Digits(num) {
  return num.toString().padStart(2, "0")
}
