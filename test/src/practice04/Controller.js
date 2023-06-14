const Controller = (props) => {
  return (
    <>
      <button onClick={props.setCc(props.cc + 1)}>+1</button>
      <button onClick={props.setCc(props.cc - 1)}>-1</button>
    </>
  );
};
export default Controller;
