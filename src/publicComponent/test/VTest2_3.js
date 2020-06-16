import React from 'react'
import {connect} from 'react-redux';
function VTest3({number}) {

        return (
            <div>
            <h1>{number}V3</h1>

            </div>
        )
   
}

const stateToProps = (state) => ({
      number: state.counter3.number,
})

  
  
export default connect(
      stateToProps,
      null
)(VTest3); // 나중에 여기를 바꾸면 된다 