

const initialState = {
      number: 0,
    }//2

const INCREASE = "increaseReducer2/INCREASE";
const DECREASE =  "increaseReducer2/DECREASE";
export const increase2 = () => ({type : INCREASE})
export const decrease2= () => ({type : DECREASE})

//33
function counter2(state = initialState, action)  { // 스토어에서 변경을 캐치하고 여기서 변경된 값을 리턴해준다 

      switch (action.type) {
        case INCREASE:
          return { //리턴 
            number: state.number + 1,// 여기가 사실상 setState와 같다 react가 setState를 새로 복사를 했고 
          }
        case DECREASE:
          return {
            number: state.number - 1,
          }
        default:
          return state
      }
    }

export default counter2;