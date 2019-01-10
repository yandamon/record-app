import React from 'react'
import {connect} from 'react-redux'
import ListRecord from './listRecord'
import {removeRecord} from '../playground/redux'


const listRecordDetail = (props) => {

    return (
        <div>
            {props.record.map((record)=>{
            return (
                <div key={record.id}>
                    <ListRecord  {...record}/>
                    <button onClick={()=>{
                        props.dispatch(removeRecord({id:record.id}))
                    }}>Delete</button>
                </div>
            )
                })
            }
        </div>
    )}


const mapPropsToState = (state) => {
    return {
        record:state.record
    }
}

export default connect(mapPropsToState)(listRecordDetail)