//counter
const counter = (state = 1, action) => {
    switch (action.type) {
      case "INCREMENT":
          console.log(action.payload)       
        return Math.min(state + 1,action.payload.quantity);
      case "DECREMENT":
        return Math.max(state - 1,0);
      default:
        return state;
    }
  };
  
  export const increment = (payload) => {
    return {
      type: "INCREMENT",
      payload:payload,
    };
  };

  export const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };
  export default counter;