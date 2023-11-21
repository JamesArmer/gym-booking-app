import axios from 'axios';

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

export const isUserEmailUnique = async (email: string) => {
  try {
    const encodedEmail = encodeURIComponent(email);
    const response = await axios.get(`/users/one?email=${encodedEmail}`);
    if (response.data._id) {
      return false;
    }
    return true;
  } catch (error) {
    console.error('Error fetching user email: ', error);
  }
};

export const isUserProfileEmailUnique = async (
  email: string,
  userId: string,
) => {
  try {
    const encodedEmail = encodeURIComponent(email);
    const response = await axios.get(`/users/one?email=${encodedEmail}`);
    if (response.data._id) {
      if (response.data._id == userId) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  } catch (error) {
    console.error('Error fetching user email: ', error);
  }
};

export const isUserPhoneNumberUnique = async (phoneNumber: string) => {
  try {
    const response = await axios.get(`/users/one?phoneNumber=${phoneNumber}`);
    if (response.data._id) {
      return false;
    }
    return true;
  } catch (error) {
    console.error('Error fetching user phone number');
  }
};

export const isUserProfilePhoneNumberUnique = async (
  phoneNumber: string,
  userId: string,
) => {
  try {
    const response = await axios.get(`/users/one?phoneNumber=${phoneNumber}`);
    if (response.data._id) {
      if (response.data._id == userId) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  } catch (error) {
    console.error('Error fetching user phone number');
  }
};
