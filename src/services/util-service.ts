// import { parsePhoneNumber } from "react-phone-number-input";
// import createDOMPurify from "dompurify";


const isNullOrEmpty = (input: any) => {
  return (
    input === null ||
    input === "null" ||
    typeof input === "undefined" ||
    input === "" ||
    input === " " ||
    input.length === 0 ||
    input === "null null" ||
    input === "undefined undefined"
  );
};

const validateNoEmptySpaces = (value: any) => {
  return !!value.trim()
}

const calculateDateDiff = (
  startMonth: any,
  startYear: any,
  endMonth: any,
  endYear: any
) => {
  let diffOfYears = parseInt(endYear) - parseInt(startYear);
  let diffInMonths =
    diffOfYears * 12 + parseInt(endMonth) - (parseInt(startMonth) - 1);
  let message = "";
  if (Math.floor(diffInMonths / 12)) {
    message =
      Math.floor(diffInMonths / 12) <= 1
        ? Math.floor(diffInMonths / 12) + " yr "
        : Math.floor(diffInMonths / 12) + " yrs ";
  }
  if (diffInMonths % 12) {
    message += (diffInMonths % 12) === 1 ? (diffInMonths % 12) + " mo " : (diffInMonths % 12) + " mos ";
  }
  return message;
};

export const getYearsList = (maxYear: any) => {
  let minYear = 1961;
  let years = [];
  for (let year = minYear; year <= maxYear; year++) {
    years.unshift(year);
  }
  return years;
};

export const getNumberList = (maxNumber: any) => {
  let numberList = [];
  for (let number = 0; number <= maxNumber; number++) {
    numberList.push({ name: number, value: number });
  }
  return numberList;
}

const getIndianFormattedDateFromEpochValue = (epochValue: number) => {
  return new Date(epochValue * 1000).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

const calculateEpochTimeDifferenceInDays = (startEpochValue: number, endEpochValue: number) => {
  let timeLeft = endEpochValue - startEpochValue;
  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = endEpochValue - startEpochValue;

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
  // let days = Math.ceil((((timeLeft / 1000) / 60) / 60) / 24);
  // return days;
}


//below method calculates the hours that are past from current time to the given epochValue
const calculateEpochTimeDifferenceInHours = (endEpochValue: number) => {
  // One hour in milliseconds
  const numberOfMilliSecondsInAnHour = 3600000;
  //startEpochVAlue is from local system and endEpochValue is from database
  let startEpochValue = Date.now();
  const differenceInHour = Math.floor((startEpochValue / numberOfMilliSecondsInAnHour) - (endEpochValue / numberOfMilliSecondsInAnHour));
  return differenceInHour;
}

const getFormattedDateAndTimeFromEpochValue = (epochValue: number) => {
  return new Date(epochValue).
    toLocaleString('en-In', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
}

const getFormattedTimeFromEpochValue = (epochValue: number) => {
  return new Date(epochValue
  ).toLocaleTimeString('en-In', { hour: '2-digit', minute: '2-digit' });
}

const downloadFileFromBlob = (blob: any, fileName: string) => {

  let objectUrl: string = URL.createObjectURL(blob);
  let a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;
  a.href = objectUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(objectUrl);
}

// Method for converting data to formData and here rest means group of properties other than file and rest should be object type
const convertFileToFormData = (fileToUpload: File, rest: any) => {
  const formData = new FormData();
  formData.append('file', fileToUpload, fileToUpload.name);
  for (let key in rest) {

    //checking for nested object if found append to formData obj
    let type = typeof(rest[key]);
    if(type == "object"){
      for(let innerKey in rest[key]){
        formData.append(`${key}[${innerKey}]`,rest[key][innerKey])
      }
    }else{                  
      formData.append(key, rest[key]);
    }
  }
  return formData;
}

const agGridCustomDateFilter = (filterLocalDateAtMidnight: any, cellValue: any) => {
  var dateAsString = cellValue;
  if (dateAsString == null) return -1;
  var dateParts = dateAsString.split('/');
  var cellDate = new Date(
    Number(dateParts[2]),
    Number(dateParts[1]) - 1,
    Number(dateParts[0])
  );
  if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
    return 0;
  }
  if (cellDate < filterLocalDateAtMidnight) {
    return -1;
  }
  if (cellDate > filterLocalDateAtMidnight) {
    return 1;
  }
}

const getAgGridCustomDateFilterValueFromEpoch = (epochValue: any) => {
  return new Date(epochValue * 1000).toLocaleDateString('en-GB');
}


const appendProtocolToURL = (url: any) => {
  if (url.startsWith('www.')) {
    return '//' + url;
  }
  return url;
}

const getCurrentTimeEpochValue = () => {
  let currentTime: any = new Date();
  return Math.round(currentTime / 1000);
}

//method to capitalize first character of the word in the string
const capitalizeFirstCharOfAString = (text: string) => {
  return text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

//Create mark up method to be used where we need to bind html from the server, we are sanitizing and binding 
// const DOMPurify = createDOMPurify(window);
// const createMarkup = (jobDescription: string) => {
//   return { __html: DOMPurify.sanitize(jobDescription) };
// };

const getFormattedCurrency = (value: number, currencyDisplay = "symbol",
  config = { format: 'en-In', options: { style: 'currency', currency: 'INR', currencyDisplay: "symbol", minimumFractionDigits: 0 } }) => {
  return Intl.NumberFormat(config.format, { ...config.options, currencyDisplay: currencyDisplay }).format(value);
}

export const utilService = {
  isNullOrEmpty,
  calculateDateDiff,
  validateNoEmptySpaces,
  getYearsList,
  getNumberList,
  /** EPOCH time helpers start */
  getIndianFormattedDateFromEpochValue,
  calculateEpochTimeDifferenceInHours,
  calculateEpochTimeDifferenceInDays,
  getFormattedDateAndTimeFromEpochValue,
  getFormattedTimeFromEpochValue,
  getCurrentTimeEpochValue,
  /** EPOCH time helpers end */
  
  /** Blob utils start */
  convertFileToFormData,
  downloadFileFromBlob,
  /** Blob utils end */
  
  /** AG Grid helpers start */
  agGridCustomDateFilter,
  getAgGridCustomDateFilterValueFromEpoch,
  /** AG Grid helpers end */
  
  /** Misc */
  capitalizeFirstCharOfAString,
  getFormattedCurrency,
  appendProtocolToURL,
  //   createMarkup,
};

