import classNames from "classnames/bind";
import styles from "./DropDownItem.module.scss";
import { Link } from "react-router-dom";
import images from "../../assets/images/images";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function DropDownItem({
  style,
  children,
  id,
  item,
  className,
  ...passProps
}) {
  let Comp = "li";
  const props = {
    ...passProps,
  };
  
  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <Comp id={id} className={classes} {...props}>
      <a href="/negatune-FE/ranking">{item}</a>
    </Comp>
  );
}

export default DropDownItem;
