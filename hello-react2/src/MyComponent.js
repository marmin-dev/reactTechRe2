import PropTypes from "prop-types";
import { Component } from "react";

// const MyCompnent = (props) => {
//   //비구조화 할당 문법
//   const { name, children } = props;
// 파라미터로 값 보내기
// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다 children 값은 {children}
//       입니다
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다
//     </div>
//   );
// };
class MyComponent extends Component {
  // 클래스 내부에서 지정하기
  static defaultProps = {
    name: "기본이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다 <br />
        children 값은 {children}입니다
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다!
      </div>
    );
  }
}
// // 기본 값 지정하기
// MyComponent.defaultProps = {
//   name: "기본이름",
// };
// // name 값은 무조건 문자열 형태로 전달해야 한다
// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };
export default MyComponent;
