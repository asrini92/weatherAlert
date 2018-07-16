import React, { Component } from 'react';
import CountryCode from './CounryCode.jsx'

class FormField extends Component {
    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr> 
                            <td colSpan="2"> 
                                <h3> Enter Your Mobile Number to recieve Notifications </h3> 
                            </td>
                        </tr>
                        <tr>
                            <td id="mobileLabel">Mobile Number</td>
                            <td>
                                <CountryCode />
                                <span>   </span>
                                <input type="text" id="phone" name="phone"
                                    placeholder="1234567890"
                                    pattern="[0-9]{10}"
                                    required />
                                    <span class="validity"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}

export default FormField;