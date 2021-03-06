import React from 'react';
import FilePicker from './FilePicker';

import '../styles/button.css';

class ScheduleLoader extends React.Component {
  state = {
    appts: [],
    curAppt: {},
  };

  extractScheduleArray = (contents) => {
    let wholeStr, normalizedStr, arr;
    if (contents) {
      wholeStr = removeTags(contents);
      normalizedStr = wholeStr.replace(/\n/g, ' ');
      arr = normalizedStr.split('BUFFER_ZONE_7');
      this.mapScheduleArray(arr);
      this.renderSchedule();
    }
  };

  mapScheduleArray = (scheduleArray) => {
    let lastNameNext = false,
      firstNameNext = false,
      descriptionNext = false,
      appointments = [],
      cur = {};

    scheduleArray.forEach((val) => {
      // Tests for having at least one character or is phone number
      if (/([a-zA-Z])+([ -~])*/.test(val) || isPhoneNumber(val)) {
        if (lastNameNext) {
          cur.lastName = val;
          lastNameNext = false;
        } else if (firstNameNext) {
          cur.firstName = val;
          firstNameNext = false;
        } else if (descriptionNext) {
          cur.description = val;
          descriptionNext = false;
        } else if (/^([0-1]?[0-9]|2[0-3]):[0-5][0-9][a-z]$/.test(val)) {
          // Tests for time format
          cur.time = val.replace(':', '').slice(0, -1);
          firstNameNext = true;
        } else if (isPhoneNumber(val)) {
          cur.phone = val;
          firstNameNext = true;
        } else if (val === 'CANINE' || val === 'FELINE') {
          descriptionNext = true;
        } else if (val.slice(0, 2) === 'RM') {
          lastNameNext = true;
        }
        if (this.fieldsFull(cur)) {
          appointments.push(cur);
          cur = {};
        }
      }
    });
    this.setState({ appts: appointments });
  };

  formatFutureAppt = (appt) => {
    return {
      FName: appt.firstName + ' ' + appt.lastName.split(',')[0],
      FDoctor: '',
      FTime: appt.time,
      FDescription: appt.description,
    };
  };

  fieldsFull = (obj) => {
    let isFull = false;
    if (
      obj.lastName &&
      obj.firstName &&
      obj.description &&
      obj.time &&
      obj.phone
    ) {
      isFull = true;
    }
    return isFull;
  };

  renderSchedule = () => {
    const appointments = this.state.appts.map((appt, index) => {
      return {
        name: appt.firstName + ' ' + appt.lastName.split(',')[0],
        time: appt.time,
        description: appt.description,
        phone: appt.phone,
        key: index,
      };
    });
    this.props.setParentState(appointments);
  };

  render() {
    return (
      <>
        <FilePicker
          parseSchedule={this.extractScheduleArray}
          class="button-primary"
        ></FilePicker>
      </>
    );
  }
}

// Removes HTML tags from str, replaces with "BUFFER_ZONE_7"
const removeTags = (str) => {
  if (str === null || str === '') return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, 'BUFFER_ZONE_7');
};

// Returns true if str is phone number format
const isPhoneNumber = (str) =>
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(str);

export default ScheduleLoader;
