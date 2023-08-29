
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
       
    name : "cart",
    initialState : {
        products : localStorage?.getItem('products')? JSON.parse(localStorage.getItem('products')) : [],
        quantity :  localStorage?.getItem('quantity') ? JSON.parse(localStorage.getItem('quantity')) : 0 ,
        total : 0
    } , 



    reducers : {
        addProducts :  (state, action ) => {
            const item = state.products.find(item => item._id === action.payload._id)
            if(item){
              item.quantity += action.payload.quantity;
            }else{
                state.quantity += 1;
                state.products.push(action.payload);
            }
            state.total += action.payload.price * action.payload.quantity;
            localStorage.setItem('products' , JSON.stringify(state.products))
            localStorage.setItem('quantity' , JSON.stringify(state.quantity))
        },

        emptyCart : (state, action) => {
            state.quantity = 0 ;
             state.products = [];
             state.total = [];

             localStorage.removeItem('products');
             localStorage.removeItem('quantity');
        },
        getTotal : (state, action) => {
          let {total} =   state.products.reduce((cartTotal , cartValue  ) => {
                 
                const {price , quantity } = cartValue;
                const itemPrice = price * quantity;
                cartTotal.total += itemPrice;
                return cartTotal;
            } , {
                total : 0
            }) 
            state.total = total

        },
        removeItem : (state , action) => {
            
        
            state.quantity -= 1;
            
            state.products = state.products?.filter(item => item._id !== action.payload);
            
            
            localStorage.setItem('quantity' ,JSON.stringify(state.quantity));
            
            localStorage.setItem('products' ,JSON.stringify(state.products));
            getTotal();
        }


    }

})

export  const {addProducts , emptyCart , getTotal ,removeItem} = cartSlice.actions;
export default cartSlice.reducer;