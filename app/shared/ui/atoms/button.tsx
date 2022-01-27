import type { ButtonHTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';
import { Text } from './text';
import { theme } from '@app/assets';

type ButtonTheme = 'primary' | 'secondary';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  accented?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-shadow
export const Button: FC<Props> = ({ children, theme, accented, ...props }) => (
  <ButtonStyled
    data-theme={theme}
    data-accented={accented}
    {...props}
  >
    <Text type="span" bold>{children}</Text>
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

  ${Themes}

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--base-color);
  color: var(--text-color);
  letter-spacing: .5px;
  border-radius: 5px;
  height: var(--size);
  width: 100%;

  transition: .25s;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    opacity: .7;
  }

  &:disabled {
    opacity: .5;
  }

  &[data-accented='true'] {
    --base-color: var(${theme.color.primary});
    --text-color: var(${theme.color.text.inverse});
  }
`;

export const ButtonGroup = styled.div`
  & ${ButtonStyled} {
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
