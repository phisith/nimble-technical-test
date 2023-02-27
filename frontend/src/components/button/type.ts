export interface ButtonProps {
  key?: string | number;
  title: string;
  color?: string;
  action?: any;
  type?: "button" | "submit" | "reset" | undefined;
  isSelected?: boolean;
}
