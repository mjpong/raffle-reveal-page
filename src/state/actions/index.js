export const revealRaffle = (ticket) => {
    return (dispatch) => {
        dispatch({
            type: "reveal",
            payload: ticket
        })
    }
}