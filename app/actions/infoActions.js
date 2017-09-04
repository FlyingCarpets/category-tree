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

// TODO: add new action dispatch and sort function
// import axios from 'axios';
//
// add cort of other functionality if needed
// // function sort() {}
//
// export function fetchDescription() {
//     return function(dispatch) {
//
//         // dispatch({type: "FETCH_DESCRIPTION"});
//
//         axios.get("http://beta.json-generator.com/api/json/get/N1CXkb4K7")
//             .then((response) => {
//                 dispatch({type: "FETCH_DESCRIPTION", payload: response.data})

//                  call sort functionality if needed
//                 // dispatch({type: "AFTER_FETCH_DESCRIPTION", payload: sort(response.data)})

//             })
//             .catch((err) => {
//                 // dispatch({type: "AFTER_FETCH_DESCRIPTION_ERROR", payload: response.data})
//             })
//     }
// }
