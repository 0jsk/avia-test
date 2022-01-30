import type { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from '@app/assets';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  type?: 'radio' | 'checkbox';
};

export const Checkbox: FC<Props> = ({ children, type = 'checkbox', checked, style, className, ...props }) => (
  <Container data-checked={checked} data-type={type} className={className} style={style}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledText>{children}</StyledText>
  </Container>
);

const Container = styled.label<{ 'data-checked': boolean; 'data-type': 'radio' | 'checkbox' }>`
  display: flex;
  align-items: center;

  position: relative;

  &:before {
    content: "";

    display: inline-block;
    vertical-align: middle;

    width: 20px;
    height: 20px;
    margin-right: ${theme.spacePx}px;

    border: 1px solid #9abbce;
    transition: .25s;
  }

  &[data-type='false']:before {
    background: transparent;
  }

  &[data-type='radio']:before {
    border-radius: 50%;
  }

  &[data-checked='true']:before {
    border-color: ${theme.color.primary};
  }

  &[data-type='checkbox']:before {
    background: url("/icons/check.svg") center/12px no-repeat;
  }

  &[data-type='radio']:before {
    background: url("/icons/select-circle.svg") center/12px no-repeat;
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
`;

const StyledText = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: normal;
  line-height: 20px;

  user-select: none;
`;

