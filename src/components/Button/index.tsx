import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (props, ref) {
  return (
    <button ref={ref} onClick={props.onClick}>
      {props.children}
    </button>
  );
});
