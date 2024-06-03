import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { ButtonSize } from './type';
import styled, { css } from 'styled-components';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  size: ButtonSize;
  children: ReactNode;
};

const buttonSize = (props: { size: ButtonSize }) => {
  switch (props.size) {
    case 56:
      return css`
        padding: 12px 24px;
        font-size: 18px;
        font-weight: bold;
      `;
    case 48:
      return css`
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
      `;
    case 40:
      return css`
        padding: 8px 16px;
        font-size: 14px;
        font-weight: bold;
      `;
    case 32:
      return css`
        padding: 6px 12px;
        font-size: 12px;
        font-weight: bold;
      `;
    case 28:
      return css`
        padding: 6px 10px;
        font-size: 12px;
      `;
  }
};

const StyledButton = styled.button<{ size: ButtonSize }>`
  display: flex;
  justify-content: center;
  border-radius: 12px;
  ${({ size }) => buttonSize({ size })}
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (props, ref) {
  return (
    <StyledButton ref={ref} size={props.size} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
});
