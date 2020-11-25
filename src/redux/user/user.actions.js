export const stateTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
};

export const setCurrentUser = user => {
    return {
        type: stateTypes.SET_CURRENT_USER,
        payload: user
    };
};
