// Did you understand the problem fully?
/* 1.) test string format of a valid US number - validate or reject the US phone number. Return true if the string is a valid US phone number; otherwise return false.
2.) area code is required. 
3.)  If the country code is provided, you must confirm that the country code is 1. */
// i.e. of true 
// "1 555-555-5555" should return true
// "1 (555) 555-5555" should return true
// "5555555555" should return true
// "555-555-5555" should return true
// "(555)555-5555" should return true
// "1(555)555-5555" should return true
// "1 555 555 5555" should return true
// "1 456 789 4444" should return true

// max of 16 spaces

/* write a function that validates a string for valid US # with area code and possible country code && if so it must be a 1 */
function telephoneCheck(str) {
// write a regex for string number combo validation
    let regex = /[^0-9]/g;
// text regex against string argument
    let stringMatch = str.match(regex);

// text condition 
    if (stringMatch === true) {

// return true if valid US # 
     return true;

    } else {
        return false;
    }

// else return false if not a valid US #
}

telephoneCheck("555-555-5555");

