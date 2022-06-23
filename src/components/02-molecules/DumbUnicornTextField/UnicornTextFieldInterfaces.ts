import { ComponentWithClassNameProps } from "@nvon/react-toolbox";
import { Dispatch, SetStateAction } from "react";

export interface DumbUnicornTextFieldProps extends ComponentWithClassNameProps {
  textFieldValue: string;
  setTextFieldValue: Dispatch<SetStateAction<string>>;
}
