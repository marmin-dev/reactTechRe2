import { useReducer, useState } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const Info = () => {
  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름:{name}</b>
      </div>
      <div>
        <b>닉네임:{nickname}</b>
      </div>
    </div>
  );
};
export default Info;
