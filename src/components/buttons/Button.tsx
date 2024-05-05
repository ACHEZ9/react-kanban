import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  variant: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonVariant = 'primary' | 'secondary';

const StyledButton = styled.button<ButtonProps>`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 20px;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  border-radius: 3.125rem;
  border-style: solid;
  border-width: 1px;

  &:hover {
    filter: brightness(0.85);
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primaryFocus};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 50%;
    `}

  ${({ variant, theme }) =>
    variant === 'primary' &&
    css`
      color: ${theme.colors.textOnPrimary};
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primaryBorder};
    `}

  ${({ variant, theme }) =>
    variant === 'secondary' &&
    css`
      font-weight: 400;
      color: ${theme.colors.textDefault};
      background-color: ${theme.colors.background};
      border-color: transparent;
    `}
`;

export default function Button({
  variant,
  children,
  ...buttonAttributes
}: PropsWithChildren<ButtonProps>) {
  return (
    <StyledButton variant={variant} {...buttonAttributes}>
      {children}
    </StyledButton>
  );
}
