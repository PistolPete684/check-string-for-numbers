function correct(string)
{
	// Use RegEx and the replace() method to substitute letters of the occurances of numbers in the string
  return string.replace(/5/g, "S")
  				.replace(/0/g, "O")
  				.replace(/1/g, "I");
}

