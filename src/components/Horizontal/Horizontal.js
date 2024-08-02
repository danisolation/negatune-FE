import classNames from "classnames/bind";
import styles from "./Horizontal.module.scss";
import { Link } from "react-router-dom";
import images from "../../assets/images/images";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Horizontal({ style, children, id, className, ...passProps }) {
  let Comp = "div";
  const props = {
    ...passProps,
  };

  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <Comp id={id} className={classes} {...props}>
      <a>
        <div className={cx("row", "m0")}>
          <div className={cx("left")}>
            <img loading="lazy" src={images.bgp} alt="dwa" />
          </div>
          <div className={cx("right")}>
            <div className={cx("blog")}>
              <p>adwdwadwfad</p>
              <p className={cx("text")}>Chap 34</p>
            </div>
          </div>
        </div>
      </a>
    </Comp>
  );
}

export default Horizontal;
