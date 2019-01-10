import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

export const addRecord = ({
    detail='',
    note='',
    date=0
        }={}) => ({
    type: 'ADD_RECORD',
    record:{id:uuid(),
    detail,
    note,
    date}})

export const removeRecord = ({id}={}) => ({
    type:'REMOVE_RECORD',
    id
})

export const editRecord = (id,updates) => ({
    type:'EDIT_RECORD',
    id,
    updates
})


export const setTextFilter = (text='') => ({
    type:'SET_TEXT',
    text
})

export const sortByDateRecent = () => ({
    type:'DATE_RECENT'
})

export const sortByDateFar = () => ({
    type:'DATE_FAR'
})

export const setStartAt = (startDate) => ({
    type:'SET_START_DATE',
    startDate
}) 

export const setEndAt = (endDate) =>({
    type:'SET_END_DATE',
    endDate
})


const recordReducer = (state=[],action)=>{
    switch (action.type) {
        case 'ADD_RECORD':
            return [...state, action.record]
        case 'REMOVE_RECORD':
            return state.filter(({id}) => id !== action.id)
        case 'EDIT_RECORD':
            return state.map((record) => {
                if (record.id === action.id){
                    return {
                        ...record,
                        ...action.update
                    }
                }
                else
                    {
                        return record
                    }
            })
        default:
            return state
    }
}

const filterState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filterReducer = (state=filterState,action)=>{
    switch(action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text:action.text
            }
        case 'DATE_RECENT':
            return{
                ...state,
                sortBy:'recent'
            }
        case 'DATE_FAR':
            return{
                ...state,
                sortBy:'far'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate:action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate
            }
        default:
            return state;
    }
}

export const configureStore = () => createStore(combineReducers({
    record:recordReducer,
    filter:filterReducer
}))






