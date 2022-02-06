export const increment = (pl) => {
    return {
        type: 'INCREMENT',
        payload: pl
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}