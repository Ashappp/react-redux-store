import{
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
    FETCH_PHONES_FAILURE,
} from '../actionsTypes'
import {fetchPhones as fetchPhonesApi} from '../API/index'

const fetchPhones = () => async dispatch => {
    dispatch({type:FETCH_PHONES_START})

    try{
        const phones = await fetchPhonesApi()
        dispatch({
            type: FETCH_PHONES_SUCCESS,
            payload: phones
        })
    } catch (err){
        dispatch ({
            type: FETCH_PHONES_FAILURE,
            playload: err,
            error: true
        })
    }
  
}

export default fetchPhones;