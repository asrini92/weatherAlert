import React, { Component } from 'react';
import './App.css';
import FormField from './Form_Fields.jsx';
import SubmitButton from './SubmitButton.jsx';
import {GET_REPORT_DATA} from './service/weather_service.js';
import WeatherResult from './WeatherResult.jsx'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      time:'',
      temperature:'',
      overall:'',
      showresult: false
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
  }else{
      var report = GET_REPORT_DATA(this.state.value);
      this.state.overall=report.text;
      this.state.time=report.date;
      this.state.temperature=report.temp;
      console.log(report);
      this.state.showresult = true;
  }
  event.preventDefault();
  this.render();
}
 
  render() {
    return (
      <div className="App">        
           <FormField />
           <table>
              <tbody>
                  <tr> 
                      <td colSpan="2"> 
                          <h3> Enter the City you want to track </h3> 
                      </td>
                  </tr>
                  <tr>
                      <td id="mobileLabel">Mobile Number</td>
                      <td>
                          <input type="text"
                              placeholder="e.g. Chennai"
                              pattern="(?=^[^-':\n]*[-':]{0,1}[^-':\n]*$)^[A-Z][-':\w ]{4,70}$"
                              onChange={this.handleChange} 
                              onBlur={this.handleSubmit}
                              required />
                              <span class="validity"></span>
                      </td>
                  </tr>
              </tbody>
          </table>
          <SubmitButton 
            city = {this.state.value}
            temperature = {this.state.temperature}
            time = {this.state.time}
            city = {this.state.value}
            overall = {this.state.overall}
            submit = {this.handleSubmit}
            />
            {
              this.state.showresult ? <WeatherResult temperature = {this.state.temperature} time = {this.state.time} city = {this.state.value} overall = {this.state.overall} /> : null }
      </div>
    );
  }
}

export default App;
