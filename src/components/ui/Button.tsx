import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/settings/Colors";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary";
  variant?: "flat" | "icon" | "stroked";
  onClick?: () => void;
};

const Wrapper = styled.button`
  &.btn {
    &.btn--icon {
      width: 32px;
      height: 32px;
    }

    &.btn--icon,
    &.btn--icon a {
      background-color: transparent;
      border: none;
      color: ${colors.secondary_text};

      cursor: pointer;
    }

    svg {
      width: inherit;
      height: inherit;
    }
  }
`;

const Button = ({
  color = "primary",
  variant = "flat",
  children,
  className,
  ...props
}: ButtonProps) => {
  const classes = `btn btn--${color} btn--${variant} ${className}`;
  return (
    <Wrapper className={classes} {...props}>
      {children}
    </Wrapper>
  );
};

export default Button;
