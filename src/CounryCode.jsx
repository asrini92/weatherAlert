import React, { Component } from 'react';
import $ from 'jquery';

class CountryCode extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            renderFlag:true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }       

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if(this.state.value === ''){
            alert("hi select something");
        }
        event.preventDefault();
    }

    getJsonData(source){
        var result = null;
        $.ajax({
            url: source,
            success: function (data) {
                result = data;
            },
            async: false
        });
        return result;
    }
    

    render(){
        
        var options = [<option value=''><h6>Select One</h6></option>];

        if(this.state.renderFlag){
            const countryNames = this.getJsonData("http://country.io/names.json");
            const phoneCodeValues = this.getJsonData("http://country.io/phone.json");
            
            Object.keys(countryNames).forEach(function(key) {
                options.push(<option value={phoneCodeValues[key]}>{countryNames[key]}</option>);
            })
            this.state.renderFlag = false;
        }

        return(
            <select name="countryCode" id="countryCode" onChange={this.handleChange} onBlur={this.handleSubmit}>
                {options}
            </select>
        );
    }
}

export default CountryCode;

