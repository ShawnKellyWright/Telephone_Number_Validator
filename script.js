/* 1.) test string format of a valid US number - validate or reject the US phone number. Return true if the string is a valid US phone number; otherwise return false.
2.) area code is required. 
3.)  If the country code is provided, you must confirm that the country code is 1. */

function telephoneCheck(phoneNumber) {
  // regular expression to match valid US phone numbers
  /* This function uses a regular expression to check if the input string matches the format 
  of a valid US phone number. Here's how the regular expression works:
  
  `^`: start of string
`(1\s?)?`: optional country code (1) followed by an optional space character
`(\(\d{3}\)|\d{3})`: either a three-digit area code enclosed in parentheses or just a three-digit area code
`[- ]?`: an optional dash or space character
`\d{3}`: three digits for the exchange code
`[- ]?`: an optional dash or space character
`\d{4}`: four digits for the subscriber number
`$`: end of string 

This regular expression matches all valid US phone number formats listed in the prompt,
 as well as variations such as spaces and dashes in different places.
*/
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
  return regex.test(phoneNumber);
}

telephoneCheck("555-555-5555");
