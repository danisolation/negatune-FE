import classNames from "classnames/bind";
import styles from "./DropDown.module.scss";
import DropDownItem from "./DropDownItem";

const cx = classNames.bind(styles);

function DropDown({ style, children, id, items, className, ...passProps }) {
  
  let Comp = "ul";
  const props = {
    ...passProps,
  };

  const classes = cx("wrapper", {
    [className]: className,
  });


  return (
    <Comp id={id} className={classes} {...props}>
      {items.map((item, index) => (
        <DropDownItem key={index} item={item} />
      ))}
    </Comp>
  );
}

export default DropDown;
