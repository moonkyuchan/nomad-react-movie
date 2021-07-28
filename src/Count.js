import React from "react";

class Count extends React.Component {
  //React는 자동적으로 Class component의 render method를 실행한다.
  state = {
    count: 0,
  };
  add = () => {
    this.setState({ count: this.state.count + 1 }); //setState를 불러와 안에 state를 건드린다.
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  // componentDidMount() {
  //   console.log("componentDidMount");
  // }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }
  render() {
    // console.log("render function");
    //setState를 호출하면 react는 state를 refresh하고 또한 render()를 다시 호출한다.
    return (
      <div>
        <h1>the Number is {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default Count;

// react 라이프사이클
// 1. constructor
// 2. render
// 3. componentDidMount - 렌더로 한번 그려지고 data fetch 할때
// 4. state가 변경되면 -> render 한번 돌고 -> componentDidUpdate
// 5. componentWillUnmount 는 컴포넌트 kill!!!!할때
