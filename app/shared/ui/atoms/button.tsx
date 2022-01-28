import type { ButtonHTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '@app/assets';

type ButtonTheme = 'primary' | 'secondary';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  accented?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-shadow
export const Button: FC<Props> = ({ children, theme = 'primary', accented, ...props }) => (
  <ButtonStyled
    data-theme={theme}
    data-accented={accented}
    {...props}
  >
    {children}
  </ButtonStyled>
);

const Themes = css`
  &[data-theme='primary'] {
    --base-color: ${theme.color.primary};
    --text-color: ${theme.color.text.inverse};
  }

  &[data-theme='secondary'] {
    --base-color: #fff;
    --text-color: ${theme.color.text.primary};

    &:hover {
      background-color: #f1fcff;
      opacity: 1;
    }
  }
`;

const ButtonStyled = styled.button<{
  'data-theme': ButtonTheme;
  'data-accented': boolean;
}>`
  --base-color: ${theme.color.primary};
  --text-color: ${theme.color.text.inverse};
  --size: 50px;

  ${Themes};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--base-color);
  color: var(--text-color);
  border-radius: 5px;
  height: var(--size);
  width: 100%;

  transition: .25s;
  text-transform: uppercase;

  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .5px;
  line-height: 20px;

  &:hover {
    cursor: pointer;
    opacity: .7;
  }

  &:disabled {
    opacity: .5;
  }

  &[data-accented='true'] {
    --base-color: ${theme.color.primary};
    --text-color: ${theme.color.text.inverse};

    &:hover {
      cursor: pointer;
      opacity: .7;

      background-color: var(--base-color);
    }
  }
`;

export const ButtonGroup = styled.div`
  & ${ButtonStyled} {
    display: flex;

    border-radius: 0;

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;
