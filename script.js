/* 1.) test string format of a valid US number - validate or reject the US phone number. Return true if the string is a valid US phone number; otherwise return false.
2.) area code is required. 
3.)  If the country code is provided, you must confirm that the country code is 1. */

function telephoneCheck(phoneNumber) {
  // regular expression to match valid US phone numbers
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
  return regex.test(phoneNumber);
}

telephoneCheck("555-555-5555");
