import { ComponentWithClassNameProps } from "@nvon/react-toolbox";

export interface DumbUnicornTextFieldProps extends ComponentWithClassNameProps {
  textFieldValue: string;
  setTextFieldValue: (text: string) => void;
}
