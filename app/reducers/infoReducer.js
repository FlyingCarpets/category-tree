const initialState = {
    description: ''
};

const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DESCRIPTION': {
            return {...state, description: action.payload};
        }
    }
    return state;
};

export default infoReducer;
