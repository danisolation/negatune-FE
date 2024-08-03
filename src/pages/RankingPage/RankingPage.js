import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./RankingPage.module.scss";
import Button from "../../components/Button/Button";
import Box from "../../components/Box/Box";
import Horizontal from "../../components/Horizontal/Horizontal";

const cx = classNames.bind(styles);

const RankingPage = () => {
  return (
    <>
      <section className={cx("breadcrumb")}>
        <div className={cx("container")}>
          <div className={cx("breadcrumbContent")}>
            <ul>
              <li>
                <Link to="/negatune-FE">Trang chủ</Link>
              </li>
              <li>
                <a className={cx("active")}>Top Tháng</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={cx("top")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("wrapper")}>
              <Horizontal />
            </div>
            <div className={cx("wrapper")}>
              <Horizontal />
            </div>
            <div className={cx("wrapper")}>
              <Horizontal />
            </div>
            <div className={cx("wrapper")}>
              <Horizontal />
            </div>
            <div className={cx("wrapper")}>
              <Horizontal />
            </div>
            <div className={cx("wrapper")}>
              <Horizontal />
            </div><div className={cx("wrapper")}>
              <Horizontal />
            </div><div className={cx("wrapper")}>
              <Horizontal />
            </div><div className={cx("wrapper")}>
              <Horizontal />
            </div><div className={cx("wrapper")}>
              <Horizontal />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RankingPage;
