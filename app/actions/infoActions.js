import axios from 'axios';

export function fetchDescription() {
    return function(dispatch) {
        axios.get("http://beta.json-generator.com/api/json/get/N1CXkb4K7")
            .then((response) => {
                dispatch({type: "FETCH_DESCRIPTION", payload: response.data})
            })
            .catch((err) => {})
    }
}
