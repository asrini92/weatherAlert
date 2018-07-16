import React, { Component } from 'react';


class SubmitButton extends Component{
    constructor(props) {
        super(props);   
    }      

    render(){        
        return(
            <div>
                <button type="button" onSubmit = {this.props.submit} >Submit</button>
            </div>
        );
    }
}

export default SubmitButton;

