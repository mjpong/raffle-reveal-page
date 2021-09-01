const reducer = (state = 0, action) => {
    switch (action.type) {
        case "reveal":
            return state + action.payload;
        default:
            return state;
    }
};

export default reducer;