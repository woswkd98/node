import React from 'react'
import VTest2 from './VTest2_2'
import {increase2, decrease2} from '../../modules/increaseReducer2'
import {increase3, decrease3} from '../../modules/awetawte'
//import { increase } from '../../reduxTest'
import {connect} from 'react-redux';

const CTest22= ({number, increase2, decrease2})  =>{
   
  
  return (
        <div>
          <VTest2
           num = {number}
           onIncrease = {increase2}
           onDecrease = {decrease2}
           />
        </div>
    )
}



/*
const stateToProps = (state) => ({
    number: state.counter2.number,
  })// 여기가 맨 마지막이다 리듀서-> store를 지나 리턴된 state값을 여기서 넘겨준다

//6

const mapDispatchToProps = (dispatch) => ({
  onIncrease : () => {
    dispatch(increase2());//  구독 작업 만약 클릭이 되면 dispatch 감지를해서 상태변화를 store로 보내준다
    
  },
  onDecrease : () => {
    dispatch(decrease2());
  }

});



export default connect(
    stateToProps,
    mapDispatchToProps
  )(CTest22);*/

  export default connect(
    state => ({
      number : state.counter3.number
    }), {
      increase3,
      decrease3
    }

  )(CTest22)