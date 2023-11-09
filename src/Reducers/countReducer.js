const initialData = {
  count: [],
};

function countReducer(state = initialData, action) {
  switch (action.type) {
case "ADD_CAR":
  const updatedAddCount = state.count + action.payload.quantity;
  localStorage.setItem("countState", updatedAddCount);
  return {
    ...state,
    count: updatedAddCount,
  };
          case "SUB_CAR":
      const updatedSubCount = state.count.filter((car) => car !== action.payload);
      localStorage.setItem("countState", JSON.stringify(updatedSubCount));
      return {
        ...state,
        count: updatedSubCount,
      };
    default:
      return state;
  }
}

export default countReducer;