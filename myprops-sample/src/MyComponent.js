import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, children, money }) => {
  //   const { name, children } = props;
  return (
    <div>
      안녕하세요. 일타 강사 {name} 입니다.
      <br />
      사실은 {children} <br />
      하지만 {money} 정도의 금액을 주면 될수도...
    </div>
  );
};

MyComponent.defaultProps = {
  name: "default Value",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  money: PropTypes.number.isRequired,
};

export default MyComponent;
