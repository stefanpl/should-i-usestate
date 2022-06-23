import { Dispatch, SetStateAction, useCallback } from "react";
import { BehaviorSubject } from "rxjs";
import { useBehaviorSubject } from "../helpers/useBehaviorSubject";

const globalTextFieldValue = new BehaviorSubject<string>("");

export const useGlobalTextFieldValue = (): [
  string,
  Dispatch<SetStateAction<string>>
] => {
  const currentValue = useBehaviorSubject(globalTextFieldValue);

  const setter: Dispatch<SetStateAction<string>> = useCallback(
    (value) => {
      if (typeof value === "function") {
        setGlobalTextFieldValue(value(currentValue));
      } else {
        setGlobalTextFieldValue(value);
      }
    },
    [currentValue]
  );

  return [currentValue, setter];
};

export const setGlobalTextFieldValue = (text: string): void =>
  globalTextFieldValue.next(text);

export const addGlobalTextFieldValue = (textToAdd: string): void => {
  globalTextFieldValue.next(globalTextFieldValue.value + textToAdd);
};
