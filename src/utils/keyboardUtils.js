export const isValidNumericKey = (event) => {
  const e = event || window.event

  const key = e.keyCode || e.which

  // Backspace and Tab and Enter
  if (key == 8 || key == 9 || key == 13) {
    return true
  }

  // home,and / left / right arrows
  if (key >= 35 && key < 38) {
    return true
  }
  if (key === 39) return true

  // Del and Ins
  if (key > 44 && key < 47) return true

  // Numbers
  if (key >= 48 && key <= 57) {
    return true
  }

  // Numeric keypad
  if (key >= 96 && key <= 105) {
    return true
  }

  e.preventDefault()
  return false
}
