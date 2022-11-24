import * as actionTypes from "../Actions";



const initialState = {
isLog:false,
user:{},


    };


const reducer = (state = initialState, action) => {



  switch (action.type) {

    
    case actionTypes.LOGIN:
        const newState = {...state}; 
        
        if(action.data.name == 'mario'){
          if(action.data.pass == '123'){
            newState.isLog = true
          }
        }else{
          console.log('err name not correct')
        }

        
        return newState


    case actionTypes.LOGOUT:
        const loguot = {...state}; 
        loguot.isLog = false;
        localStorage.setItem('token', undefined)
        localStorage.setItem('usernumber',null)
        localStorage.setItem('user',undefined)
        loguot.user ={};
    return loguot


    
    


      

        

    default:
      break;
  }
  return state;
};

export default reducer;
