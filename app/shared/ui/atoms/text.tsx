import type { DefaultTheme } from 'styled-components';
import type { FC } from 'react';
import React from 'react';
import styled from 'styled-components';
import { theme } from '@app/assets';

type Props = {
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  className?: string;
  color?: keyof DefaultTheme['color']['text'];
  title?: string;
};

const TextStyled = styled.p<{ 'data-type': Props['type']; color: Props['color'] }>`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  color: ${props => (props.color ? theme.color.text[props.color] : theme.color.text.primary)}

  &[data-type='span'] {
    font-size: 12px;
    line-height: 20px;
  }

  &[data-type='p'] {
    font-size: 13px;
    line-height: 20px;
  }

  &[data-type='h1'] {
    font-size: 32px;
    font-weight: 600;
  }

  &[data-type='h2'] {
    font-size: 28px;
    font-weight: 600;
  }

  &[data-type='h3'] {
    font-size: 24px;
    font-weight: 600;
  }

  &[data-type='h4'] {
    font-size: 20px;
    font-weight: 600;
  }

  &[data-type='h5'] {
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
  }

  &[data-type='h6'] {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
`;

export const Text: FC<Props> = ({ children, type, className, color, title }) => (
  <TextStyled data-type={type} as={type} className={className} color={color} title={title}>
    {children}
  </TextStyled>
);