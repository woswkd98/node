
export type LoginState = {
    userID : '';

}
export type LoginProps = {
    userID : string;
    rdLogin : (userId : string) => {};
    rdLogout : () => void;
};

const initialState : LoginState = { // 2
    userID : ''
};

enum eLoginState {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",

}



export const rdLogin = (userId : string) => {
            return {
                type : eLoginState.LOGIN,
                userID : userId 
            }
};
export const rdLogout = () => {
            return {
                type : eLoginState.LOGOUT,
                userID : ''
            }
};


export type LoginAction =
  | ReturnType<typeof rdLogin>
  | ReturnType<typeof rdLogout>;



//3

 function setLoginState(state = initialState, action : LoginAction) {

    switch (action.type) {

        
        case eLoginState.LOGIN: 
            return {
                isLogin : eLoginState.LOGIN,
                userID : action.userID,

            }
            
            
        case eLoginState.LOGOUT: return {
                isLogin : eLoginState.LOGOUT,
                userID : '',
        }

        default: return state;

    }
    
}




export default setLoginState;


