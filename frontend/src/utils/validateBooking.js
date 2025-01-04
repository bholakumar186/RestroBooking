import 'src/utils/validateBooking.js';
export const validateDate = (date) => {
    const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    return date >= currentDate;
  };
  