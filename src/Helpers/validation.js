import { MAGIC_NUMBERS_VALID } from "../Constants/magicNumbersValid";

export const validate = (userFieldValue, userFieldType) => {
  switch (userFieldType) {
    case "firstName":
      return (
        userFieldValue.length > MAGIC_NUMBERS_VALID.MinLengthName &&
        userFieldValue.length < MAGIC_NUMBERS_VALID.MaxLengthName
      );

    case "lastName":
      return (
        userFieldValue.length > MAGIC_NUMBERS_VALID.MinLengthName &&
        userFieldValue.length < MAGIC_NUMBERS_VALID.MaxLengthName
      );

    case "password":
      return userFieldValue.length > MAGIC_NUMBERS_VALID.MinLengthPass;

    case "passwordConfirm":
      return userFieldValue.length > 1;

    case "name":
      return (
        userFieldValue.length > MAGIC_NUMBERS_VALID.MinLengthName &&
        userFieldValue.length < MAGIC_NUMBERS_VALID.MaxLengthName
      );

    case "description":
      return (
        userFieldValue.length > MAGIC_NUMBERS_VALID.MinLengthName &&
        userFieldValue.length < MAGIC_NUMBERS_VALID.MaxLengthName
      );

    case "email":
      const email = userFieldValue.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      return email;

    case "passwd":
      return userFieldValue.length > MAGIC_NUMBERS_VALID.MinLengthPass;

    default:
      return true;
  }
};
