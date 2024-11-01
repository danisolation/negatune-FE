import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ComicInfoPage.module.scss";
import images from "../../assets/images/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const listChapter = [
  {
    name: "1",
    new: false,
    date: "01-11-2024 23:38",
    view: "200",
  },
  {
    name: "2",
    new: true,
    date: "01-11-2024 23:38",
    view: "200",
  },
  {
    name: "3",
    new: true,
    date: "01-11-2024 23:38",
    view: "200",
  },
  {
    name: "4",
    new: true,
    date: "01-11-2024 23:38",
    view: "200",
  },
  {
    name: "5",
    new: true,
    date: "01-11-2024 23:38",
    view: "200",
  },
];

const ComicInfoPage = () => {
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
            <div className={cx("colLeft")}>
              <div className={cx("row")}>
                <div className={cx("colMd", "colMdLeft")}>
                  <div className={cx("trailerBox")}>
                    <img
                      className={cx("image")}
                      loading="lazy"
                      src={images.bgp}
                      alt="dwa"
                    />
                  </div>
                </div>
                <div className={cx("colMd", "colMdRight")}>
                  <div className={cx("trailerContent")}>
                    <h1>title</h1>
                    <p className={cx("lightText")}>chap 1</p>
                    <h3>Nội dung</h3>
                    <p>
                      Yu Ijin - người duy nhất sống sót sau một vụ tai nạn máy
                      bay thảm khốc khi anh còn nhỏ. Sau quãng thời gian 10 năm
                      trở thành lính đánh thuê để hoàn thành giao kèo với người
                      đã cứu mình, cậu đã trở về với gia đình ở quê hương. Một
                      cuộc sống mới và cả sóng gió mới bắt đầu....
                    </p>
                    <div className={cx("dFlex", "pt4")}>
                      <a
                        className={cx(
                          "animeBtn",
                          "me3",
                          "btnDark",
                          "borderChange"
                        )}
                      >
                        đọc chương đầu
                      </a>
                      <a
                        className={cx(
                          "animeBtn",
                          "me3",
                          "btnDark",
                          "borderChange"
                        )}
                      >
                        đọc chương cuối
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("col12", "colSm6", "colLg3")}>
              <div className={cx("trailerContent")}>
                <h3>Thông tin</h3>
                <p>
                  <span>Tác giả:</span>
                  <b>YC</b>
                </p>
                <p>
                  <span>Họa sĩ:</span>
                  <b>YC</b>
                </p>
                <p>
                  <span>Tác giả:</span>
                  <b>YC</b>
                </p>
                <p>
                  <span>Tác giả:</span>
                  <b>YC</b>
                </p>
                <p>
                  <span>Tác giả:</span>
                  <b>YC</b>
                </p>
                <p>
                  <span>Tác giả:</span>
                  <b>YC</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cx("release", "secMar")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("colLg8", "colMd12", "colSm12")}>
              <h3 className={cx("smallTitle")}>danh sách chương</h3>
              <div className={cx("chapterListContainer")}>
                {listChapter.map((chapter, index) => (
                  <div>
                    <h5 className={cx("chapterList")}>
                      <a href="#">Chap {chapter.name}</a>
                      <div className={cx("newChap")}>
                        {chapter.new && <p>new</p>}
                      </div>
                      <span>{chapter.date}</span>
                      <p>
                        {" "}
                        <FontAwesomeIcon
                          className={cx("fas")}
                          icon={faEye}
                        />{" "}
                        {chapter.view}
                      </p>
                    </h5>
                    <hr></hr>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComicInfoPage;
