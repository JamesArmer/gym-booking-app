export function validateEmail(email: string): boolean {
  // Regular expression for a basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return emailRegex.test(email);
}

export function validatePhoneNumber(phoneNumber: string): boolean {
  // Remove non-digit characters from the phone number
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

  // Check if the cleaned phone number is a valid format
  const phoneNumberRegex = /^\d{10}$/; // Assumes a 10-digit format

  return phoneNumberRegex.test(cleanedPhoneNumber);
}
