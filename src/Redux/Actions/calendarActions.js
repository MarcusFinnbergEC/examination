export const datePicker = date => ({
    type: 'DATE_PICKED',
    payload: date
   })

   export const dateClean = () => ({
    type: 'CLEAR_DATE',
   })

   export const calendarAction = date => {
    console.log("DATE:",date)
    /*fetch()
    .then()
    .then()*/
    return dispatch => {
            dispatch(datePicker(date))
    }
}

export const cleanCalenderAction = () => {
    return dispatch => {
        console.log("Cleaner körs!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        dispatch(dateClean())
    }
}