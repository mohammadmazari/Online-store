export function FormatNumberInPersian(number) {
  let numString = number.toString().replace(/\s/g, "");

  let formattedNumber = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  formattedNumber = formattedNumber.replace(
    /\d/g,
    (match) => persianDigits[match]
  );

  return formattedNumber;
}
