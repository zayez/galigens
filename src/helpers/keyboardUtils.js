export const isNumberKey = (event) => {
  var charCode = event.which ? event.which : event.keyCode
  if (charCode == 46 || (charCode > 31 && (charCode < 48 || charCode > 57))) {
    event.preventDefault()
    return false
  }
  return true
}
