const initialState = {
    theme: 'light',
}

export const themeModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'THEME_MODE':
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}