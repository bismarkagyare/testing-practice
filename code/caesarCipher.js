function caesarCipher(str, shift) {
  // Define an empty string to store the shifted result
  let result = '';

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Get the current character
    const char = str[i];

    // Check if the character is a letter (A-Z or a-z)
    if (/[A-Za-z]/.test(char)) {
      // Get the character code
      const charCode = str.charCodeAt(i);

      // Determine the base code depending on the character case
      const baseCode = char >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);

      // Calculate the shifted code
      const shiftedCode = ((charCode - baseCode + shift) % 26) + baseCode;

      // Convert the shifted code back to a character and append it to the result
      result += String.fromCharCode(shiftedCode);
    } else {
      // If the character is not a letter, append it as is to the result
      result += char;
    }
  }

  // Return the final shifted string
  return result;
}

module.exports = caesarCipher;
