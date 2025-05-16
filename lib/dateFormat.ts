import { format } from "date-fns";

type DateValue = Date | string;

export const formatDate = (date: DateValue): string => {
  if (!date) return "";
  
  // Convert string to Date if needed
  const dateObj = typeof date === "string" ? new Date(date) : date;
  
  // Validate the date is valid
  if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) {
    return "";
  }
  
  // Format the date - provide both date and format string
  return format(dateObj, "PPP"); // Example: March 25, 2023
};

// Format date with time
export const formatDateTime = (date: DateValue): string => {
  if (!date) return "";
  
  // Convert string to Date if needed
  const dateObj = typeof date === "string" ? new Date(date) : date;
  
  // Validate the date is valid
  if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) {
    return "";
  }
  
  // Format the date with time - provide both date and format string
  return format(dateObj, "PPp"); // Example: March 25, 2023 at 12:00 PM
};