import React, { ReactNode, MouseEventHandler } from "react";

interface DefaultButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: string;
  style?: React.CSSProperties;
}

/**
 * @name DefaultButton
 * @description - Default button component with custom class name, type, and style support
 * @param children - button content
 * @param onClick - button click event
 * @param className - custom class name for the button
 * @param type - button type
 * @param style - custom style for the button
 */
export const DefaultButton: React.FC<DefaultButtonProps> = ({
  children,
  onClick,
  className,
  type,
  style,
}) => {
  return (
    <button className={className} type={type} onClick={onClick} style={style}>
      {children}
    </button>
  );
};
