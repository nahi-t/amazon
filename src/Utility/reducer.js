import { type } from "./acthion"
export const initialstate={
    basket:[],
    user:null
}

export const reducer=(state,action)=>{
switch (action.type) {
    case type.Add_To_Basket:
       //chake if item is 
       const exist=state.basket.find((item)=>item.id===action.item.id)
       if (!exist) {
        return {
            ...state,
            basket:[...state.basket,{...action.item,amount:1}]
        }
       }else{
        const update=state.basket.map((item)=>{
          return  item.id===action.item.id?{...item,amount:item.amount+1}:item
        })
        return{    ...state,basket:update}
    
       }
       
      case type.Remove_From_basket:
        const index= state.basket.findIndex(item=> item.id===action.id)
        let newbox=[...state.basket]
        if (index>=0) {
if (newbox[index].amount>1) {
    newbox[index]={...newbox[index],amount:newbox[index].amount-1}
}else{
   newbox.splice(index,1) 
}
  return{
    ...state,
    basket:newbox,
  } ;
  
}
case type.SET_USER:
    return{
      ...state,
      User:action.User,
    }
 
       

    default:
       return state; 
      }       
   }

