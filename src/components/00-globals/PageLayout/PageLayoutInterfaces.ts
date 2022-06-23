import {
  ComponentWithChildrenProps,
  ComponentWithClassNameProps,
} from "@nvon/react-toolbox";

export interface PageLayoutProps
  extends ComponentWithClassNameProps,
    ComponentWithChildrenProps {
  showHeader: boolean;
}
