import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../assets/images/images";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DropDown from "../DropDown/DropDown";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

const Header = () => {
  const [show, setShow] = useState(false);
  const dropDownRef = useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <header className={cx("header")}>
      <div className={cx("container")}>
        <nav className={cx("navBar")}>
          <a className={cx("brand")} href="/">
            <img className={cx("img")} src={images.logo} />
          </a>
          <button className={cx("menuToggle")}>&#9776;</button>
          <div className={cx("navDiv")}>
            <ul className={cx("navList")}>
              <li className={cx("navItem")}>
                <Button href="#">Theo Dõi</Button>
              </li>
              <li className={cx("navItem")} ref={dropDownRef}>
                <Button onClick={handleClick} href="#">
                  Xếp Hạng
                </Button>
                <DropDown
                  className={show ? "show" : ""}
                  items={["top all", "top tháng", "top tuần", "top ngày"]}
                />
              </li>
              <li className={cx("navItem")}>
                <Button href="#">Thể Loại</Button>
              </li>
            </ul>
            <form>
              <div className={cx("searchBox")}>
                <button className={cx("searchButton")} type="submit">
                  <FontAwesomeIcon className={cx("icon")} icon={faSearch} />
                </button>
                <input
                  className={cx("searchInput")}
                  required
                  placeholder="Tìm kiếm"
                  autoComplete="off"
                  type="text"
                  // value=""
                  name="query"
                />
              </div>
            </form>
            <div className={cx("auth")}>
              <Button className={cx("authButton")} to="/register">
                Đăng nhập
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
