import React from 'react';
import {connect} from 'react-redux'
import {addRecord} from '../playground/redux'


class AddRecord extends React.Component {
    constructor(props){
        super(props);
        this.state={
            detail:'',
            note:'',
            date:''
        }
    }

    handleDetailChange=(e)=>{
        this.setState({
            detail:e.target.value
        })
    }

    handleNoteChange=(e)=>{
        this.setState({
            note:e.target.value
        })
    }

    handleDateChange=(e)=>{
        this.setState({
            date:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.dispatch(addRecord(this.state))
        this.setState({
            detail:'',
            note:'',
            date:''
        })
    }


    render(){
        return(
            <div>
                <p> Add your record </p>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' 
                    placeholder='detail'
                    value={this.state.detail}
                    onChange={this.handleDetailChange}
                    />
                    <input type='text' 
                    placeholder='note'
                    value={this.state.note}
                    onChange={this.handleNoteChange}
                    />
                    <input type='number' 
                    placeholder='date'
                    value={this.state.date}
                    onChange={this.handleDateChange}
                    />
                    <button>Submit</button>
                </form>
            </div>

        )
    }


}

export default connect()(AddRecord)

