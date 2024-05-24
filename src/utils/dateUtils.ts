const dateUtils = {
  /**
   *
   * @returns formatted date in dd-mm-yyyy format
   */
  getFormattedDate: (date: Date = new Date()) => {
    const formatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    } as Intl.DateTimeFormatOptions;

    // const formattedDate = new Intl.DateTimeFormat('en-US', formatOptions).format(date);
    const formattedDate = date.toLocaleDateString("en-GB", formatOptions);

    return formattedDate;
  },
};

export default dateUtils;
