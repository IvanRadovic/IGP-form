import React, { ReactNode, MouseEventHandler } from "react";

interface DefaultButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
