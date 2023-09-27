import {
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
  memo,
  useRef,
  useImperativeHandle,
} from "react";
import "./index.style.scss";
import PropTypes from "prop-types";

export type buttonVariantType =
  | "contained"
  | "outlined"
  | "outlined-secondary"
  | "text";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: buttonVariantType;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant,
    children,
    disabled,
    className,
    startIcon,
    endIcon,
    ...otherProps
  } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => buttonRef.current!, []);

  return (
    <button
      {...otherProps}
      ref={buttonRef}
      className={`button-root button-${variant} ${className}`}
      disabled={disabled}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
});

Button.propTypes = {
  variant: PropTypes.oneOf([
    "contained",
    "outlined",
    "outlined-secondary",
    "text",
  ]),
};

Button.defaultProps = {
  variant: "contained",
  type: "button",
};

export default memo(Button);
