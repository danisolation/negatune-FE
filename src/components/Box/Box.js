import classNames from "classnames/bind";
import styles from "./Box.module.scss";
import { Link } from "react-router-dom";
import images from "../../assets/images/images";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Box({
  style,
  children,
  id,
  className,
  ...passProps
}) {
  let Comp = "div";
  const props = {
    ...passProps,
  };
  
  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <Comp id={id} className={classes} {...props}>
      <div style={style} className={cx("blog")}>
        <a className={cx("imgBlock")}>
          <img loading="lazy" src={images.bgp} alt="dwa"/>
        </a>
        <a className={cx("actionOverlay")}>
          <FontAwesomeIcon className={cx("icon")} icon={faEye} />
          Đọc ngay
        </a>
        <div className={cx("info")}>
          <div>
            <p className={cx("text")}>Lượt xem: 1.9M</p>
            <p className={cx("chapBox")}>Chap 34</p>
          </div>
        </div>
        <Button className={cx("title")} href={"/"}>
          adwdwadwfad
        </Button>
      </div>
    </Comp>
  );
}

export default Box;
