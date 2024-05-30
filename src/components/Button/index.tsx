import { ReactNode } from 'react';

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const Button = (props: Props) => {
  return (
    <div role="button" onClick={props.onClick}>
      {props.children}
    </div>
  );
};
