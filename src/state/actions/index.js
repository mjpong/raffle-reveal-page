
export const revealRaffle = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/photos/10")
        .then(res => res.json())
        .then(img => dispatch({
            type: revealRaffle,
            payload: img
        }))
}
