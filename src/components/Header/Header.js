import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../assets/images/images";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DropDown from "../DropDown/DropDown";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

const Header = () => {
  const [showRank, setShowRank] = useState(false);
  const [showCate, setShowCate] = useState(false);
  const dropDownRefRank = useRef(null);
  const dropDownRefCate = useRef(null);
  const location = useLocation();

  const handleClickRank = () => {
    setShowRank(!showRank);
  };

  const handleClickCate = () => {
    setShowCate(!showCate);
  };

  const handleClickOutsideRank = (event) => {
    if (
      dropDownRefRank.current &&
      !dropDownRefRank.current.contains(event.target)
    ) {
      setShowRank(false);
    }
  };

  const handleClickOutsideCate = (event) => {
    if (
      dropDownRefCate.current &&
      !dropDownRefCate.current.contains(event.target)
    ) {
      setShowCate(false);
    }
  };

  useEffect(() => {
    setShowCate(false);
    setShowRank(false);
  }, [location.pathname]);

  useEffect(() => {
    if (showRank) {
      document.addEventListener("mousedown", handleClickOutsideRank);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideRank);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideRank);
    };
  }, [showRank]);

  useEffect(() => {
    if (showCate) {
      document.addEventListener("mousedown", handleClickOutsideCate);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideCate);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCate);
    };
  }, [showCate]);

  return (
    <header className={cx("header")}>
      <div className={cx("container")}>
        <nav className={cx("navBar")}>
          <Link className={cx("brand")} to="/negatune-FE">
            <img className={cx("img")} src={images.logo} />
          </Link>
          <button className={cx("menuToggle")}>&#9776;</button>
          <div className={cx("navDiv")}>
            <ul className={cx("navList")}>
              <li className={cx("navItem")}>
                <Button href="#">Theo Dõi</Button>
              </li>
              <li className={cx("navItem")} ref={dropDownRefRank}>
                <Button onClick={handleClickRank} href="#">
                  Xếp Hạng
                </Button>
                <DropDown
                  className={showRank ? "show" : ""}
                  items={["top all", "top tháng", "top tuần", "top ngày"]}
                />
              </li>
              <li className={cx("navItem")} ref={dropDownRefCate}>
                <Button onClick={handleClickCate} href="#">
                  Thể Loại
                </Button>
                <DropDown
                  className={showCate ? "show" : ""}
                  items={["top all", "top tháng", "top tuần", "top ngày"]}
                />
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
