import React from "react";
import { connect } from "react-redux";
import { buyCake, returnCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h1>Number of cakes - {props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy cake</button>
      <button onClick={props.returnCake}>Return cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    returnCake: () => dispatch(returnCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
