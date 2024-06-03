import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { ButtonSize, ButtonVariant } from './type';
import styled, { css } from 'styled-components';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  size: ButtonSize;
  variant: ButtonVariant;
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

const buttonVariant = (props: { variant: ButtonVariant }) => {
  switch (props.variant) {
    case 'primary': {
      const color = `rgba(12, 128, 228, 1)`;

      return css`
        background-color: ${color};
        color: rgba(255, 255, 255, 1);
        border: 1px solid ${color};
      `;
    }
    case 'secondary':
      return css`
        color: rgba(0, 0, 0, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.2);
      `;
    case 'text':
      return css`
        border: none;
        background-color: transparent;
      `;
  }
};

const StyledButton = styled.button<{ size: ButtonSize; variant: ButtonVariant }>`
  display: flex;
  justify-content: center;
  border-radius: 12px;
  ${({ size }) => buttonSize({ size })};
  ${({ variant }) => buttonVariant({ variant })}
  cursor: pointer;
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (props, ref) {
  return (
    <StyledButton ref={ref} size={props.size} variant={props.variant} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
});
