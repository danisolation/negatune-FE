import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import Button from "../../components/Button/Button";
import Box from "../../components/Box/Box";

const cx = classNames.bind(styles);

const HomePage = () => {
  return (
    <>
      <section className={cx("sec")}>
        <div className={cx("container")}>
          <div className={cx("heading")}>
            <h1>
              Truyện phổ biến
              <a className={cx("more")} href={"/"}>
                <span>Xem thêm</span>
              </a>
            </h1>
          </div>
          <div className={cx("row")}>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </div>
        </div>
      </section>
      <section className={cx("sec")}>
        <div className={cx("container")}>
          <div className={cx("heading")}>
            <h1>
              Truyện phổ biến
              <a className={cx("more")} href={"/"}>
                <span>Xem thêm</span>
              </a>
            </h1>
          </div>
          <div className={cx("row")}>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
