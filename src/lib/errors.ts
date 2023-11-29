export interface GenericErrors {
  badInput: string;
  customError: string;
  patternMismatch: string;
  rangeOverflow: string;
  rangeUnderflow: string;
  stepMismatch: string;
  tooLong: string;
  tooShort: string;
  typeMismatch: string;
  valid: string;
  valueMissing: string;
}

export const formErrors: { [name: string]: GenericErrors } = {
  name: {
    valueMissing: "Please enter your full name",
    tooShort: "Name must be at least 4 characters long",
    tooLong: "Name must be at most 45 characters long",
    valid: "Name is valid",
    customError: "Please enter a valid name",
    patternMismatch: "Please enter a valid name",
    typeMismatch: "Please enter a valid name",
    stepMismatch: "Please enter a valid name",
    rangeOverflow: "Please enter a valid name",
    rangeUnderflow: "Please enter a valid name",
    badInput: "Please enter a valid name",
  },
  "reservation-date": {
    valueMissing: "Please enter a valid date",
    tooShort: "Please enter a valid date",
    tooLong: "Please enter a valid date",
    valid: "Date is valid",
    customError: "Date is not valid",
    patternMismatch: "Date is not valid",
    typeMismatch: "Date is not valid",
    stepMismatch: "Date is not valid",
    rangeOverflow: "Date is not valid",
    rangeUnderflow: "Date is not valid",
    badInput: "Date is not valid",
  },
  "travel-to": {
    valueMissing: "Please enter a valid destination",
    tooShort: "Invalid Destination",
    tooLong: "Invalid Destination",
    valid: "Destination is valid",
    customError: "Destination is not valid",
    patternMismatch: "Destination is not valid",
    typeMismatch: "Destination is not valid",
    stepMismatch: "Destination is not valid",
    rangeOverflow: "Destination is not valid",
    rangeUnderflow: "Destination is not valid",
    badInput: "Destination is not valid",
  },
  "travel-from": {
    valueMissing: "Please enter a valid origin",
    tooShort: "Invalid origin",
    tooLong: "Invalid origin",
    valid: "Origin is valid",
    customError: "Origin is not valid",
    patternMismatch: "Origin is not valid",
    typeMismatch: "Origin is not valid",
    stepMismatch: "Origin is not valid",
    rangeOverflow: "Origin is not valid",
    rangeUnderflow: "Origin is not valid",
    badInput: "Origin is not valid",
  },
};
