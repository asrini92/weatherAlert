import React, { Component } from 'react';

class WeatherResult extends Component{

    render(){
        if(this.props.overall === ''){
            return null;
        }
        else{
            return(
                <div>
                    <table>
                        <tbody>
                            <tr> 
                                <td colSpan="2"> 
                                    <h3> Weather conditions at {this.props.city} are as follows: </h3> 
                                </td>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>Temperature</td>
                                <td>Overall</td>
                            </tr>
                            <tr>
                                <td>{this.props.time}</td>
                                <td>{this.props.temperature}</td>
                                <td>{this.props.overall}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        } 
    }
}

export default WeatherResult;

