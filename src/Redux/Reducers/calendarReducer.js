/*import { months } from '../../Components/Logic/logic-calendar';


let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth();
    let yyyy = today.getFullYear();
    let activeMonth = mm;
    let month = months[activeMonth].month;

    const initialState = {
        todaysDate: `${dd} ${month}, ${yyyy}`,
    }*/

const initialState = {
    todaysDate: ``,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'DATE_PICKED':
        console.log("Sate in calendar reducer: ",state);
        state.todaysDate = '';
            return {
                ...state,
                todaysDate: action.payload
            }
            case 'CLEAR_DATE':
            //state.todaysDate = ''
            return {
                todaysDate: ''
            }
        default:
            return state
    }
}