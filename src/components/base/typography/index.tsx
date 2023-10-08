import PropTypes from "prop-types";
import { DOMAttributes, ElementType, ReactNode, memo } from "react";
import "./index.style.scss";

export type typographyVariantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "h6"
  | "subheading1"
  | "subheading2"
  | "body"
  | "span"
  | "p"
  | "ptext"
  | "pdoc"
  | "label"
  | "inherit";

export const typographyVariantsMapping: Record<string, string> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body: "p",
  span: "span",
  p: "p",
  ptext: "span",
  pdoc: "span",
  label: "label",
  inherit: "span",
};

interface TypographyProps extends DOMAttributes<HTMLHeadingElement> {
  variant?: typographyVariantType;
  children: ReactNode;
  className?: string;
}

function Typography(props: TypographyProps) {
  const { variant, children, className, ...otherProps } = props;
  const Component = (
    variant ? typographyVariantsMapping[variant] : "p"
  ) as ElementType;
  return (
    <Component
      {...otherProps}
      className={`typography--variant-${variant} ${className}`}
    >
      {children}
    </Component>
  );
}

Typography.defaultProps = {
  variant: "body",
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subheading1",
    "subheading2",
    "body",
    "span",
    "p",
    "ptext",
    "pdoc",
    "label",
    "inherit",
  ]),
};

export default memo(Typography);
