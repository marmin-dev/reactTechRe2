import { Component } from "react";

class Counter extends Component {
  //생성자 내에서 값 초기화하기
  //   constructor(props) {
  //     super(props);
  //     // state  의 초깃값 설정하기
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //}
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회한다
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않은 값:{fixedNumber}</h2>
        <button
          //   onClick={() => {
          //     // //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다
          //     // this.setState({ number: number + 1 });
          //     // this.setState({ number: this.state.number + 1 });
          //     // // 두 번 호출되어도 값은 1만 올라간다
          //     this.setState((prevState) => {
          //       return {
          //         number: prevState.number + 1,
          //       };
          //     });
          //     //위 코드와 아래 코드는 완전히 똑같은 기능을 한다
          //     // 아래 코드는 함수에서 바로 객체를 반환한다는 의미이다
          //     this.setState((prevState) => ({
          //       number: prevState.number + 1,
          //     }));
          //   }}
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출되었습니다");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
