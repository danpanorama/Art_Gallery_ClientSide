import * as actionTypes from "../Actions";

const initialState = {
        item:[],
        itemLength:0

    };

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_ITEM:
        const newState = {...state}; 
        if(action.data){
            newState.item = [...newState.item,action.data];
         newState.itemLength = newState.item.length;
         console.log(newState)
        }
        
       
        return newState

        case actionTypes.EDIT_ITEM:
          const edit = {...state}; 

          if(action.data){
            edit.item.map((e)=>{
              if(e.number == action.data.number){
                e = action.data.ele
              }
            })
          }


        return edit



        
    case actionTypes.DELET_ITEM:
    const deleteState = {...state}; 
    console.log(action.data)
      let arr= deleteState.item.filter((ele)=>{
        return ele.number != action.data.data
       })
       deleteState.item = arr
       deleteState.itemLength = deleteState.item.length;
      return deleteState

    

    case actionTypes.SET:
    const setStete = {...state}; 
    if(action.data){
       setStete.item = action.data.data
    }
   
    

    return setStete


    default:
      
      break;
  }
  return state;
};

export default reducer;
