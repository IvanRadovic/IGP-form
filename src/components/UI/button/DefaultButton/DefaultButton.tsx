import React, { ReactNode, MouseEventHandler } from "react";

interface DefaultButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: string;
  style?: React.CSSProperties;
}

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
