import type { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from '@app/assets';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Checkbox: FC<Props> = ({ children, checked, style, className, ...props }) => (
  <Container data-checked={checked} className={className} style={style}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledText>{children}</StyledText>
  </Container>
);

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

const Container = styled.label<{ 'data-checked': boolean }>`
  display: flex;
  align-items: center;

  position: relative;

  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    border: 1px solid #9abbce;
    border-radius: 2px;
    margin-right: ${theme.spacePx}px;
  }

  &[data-checked='true']:before {
    background: url("/icons/check.svg") center/12px no-repeat;
    border-color: ${theme.color.primary};
  }
`;
