export default function useUtils() {
  function formatNumberWithComma(number: string | number) {
    return number
      ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : '0'
  }

  function formatPhoneNumber(number: string) {
    return number.startsWith('0')
      ? number.replace('0', '234')
      : number.startsWith('+234')
      ? number.replace('+234', '234')
      : number
  }

  return {
    formatNumberWithComma,
    formatPhoneNumber,
  }
}
