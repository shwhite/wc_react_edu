import React, { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       number: 0,
  //       fixedNumer: 0,
  //     };
  //   }
  state = {
    number: 0,
    fixedNumer: 0,
  };
  render() {
    const { number, fixedNumer } = this.state; //state를 조회 할 때 this.state로 조회 해야 함
    return (
      <div>
        <h1>{number}</h1>
        <h2> 바뀌지 않는 값: {fixedNumer}</h2>
        <button
          onClick={() => {
            //this.setState를 사용하여 steat에 새로운 값을 넣을 수 있습니다.
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 1,
                };
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
