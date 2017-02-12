

export const selectWorkout = (id) => {
    return {
        type:ACTION.SELECT_WORKOUT,
        payload:id
    }
}
