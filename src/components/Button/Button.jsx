import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ nameBtn }) => {
  const classNames = clsx(css.btn);

  return <button className={classNames}>{children}</button>;
};

export default Button;
