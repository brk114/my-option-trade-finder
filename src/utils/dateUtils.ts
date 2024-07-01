/**
 * @date: optional date object
 * @returns Formatted date in dd-mm-yyyy format
 */
const getFormattedDate = (date: Date = new Date()): string => {
  const formatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  } as Intl.DateTimeFormatOptions;

  // const formattedDate = new Intl.DateTimeFormat('en-US', formatOptions).format(date);
  const formattedDate = date.toLocaleDateString("en-GB", formatOptions);

  return formattedDate;
};

export const DateHelpers = {
  getFormattedDate,
};
