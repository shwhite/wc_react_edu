import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponentClassType extends Component {
  static defaultProps = {
    name: "default Value",
  };

  static propTypes = {
    name: PropTypes.string,
    money: PropTypes.number.isRequired,
  };
  render() {
    const { name, money, children } = this.props; //비구조 할당 방법
    return (
      <div>
        안녕하세요. 일타 강사 {name} 입니다.
        <br />
        사실은 {children} <br />
        하지만 {money} 정도의 금액을 주면 될수도...
      </div>
    );
  }
}

// MyComponentClassType.defaultProps = {
//   name: "default Value",
// };

// MyComponentClassType.propTypes = {
//   name: PropTypes.string,
//   money: PropTypes.number.isRequired,
// };

export default MyComponentClassType;
