export const ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
};

export const setCurrentUser = user => {
    return {
        type: ACTION_TYPES.SET_CURRENT_USER,
        payload: user
    };
};
