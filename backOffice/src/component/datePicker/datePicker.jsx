import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function PickerDate(props) {
  const {
    begin, startDate, endDate, handleChangeStartDate, handleChangeEndDate,
  } = props;

  return (
    <div>
      <p>{begin ? 'date de début' : 'date de fin'}</p>
      <DatePicker
        timeFormat="HH:mm:ss"
        timeIntervals={1}
        placeholderText="yyyy-mm-jj hh:mm:ss"
        readOnly={false}
        dateFormat="YYYY-MM-DD HH:mm:ss"
        selected={begin ? startDate : endDate}
        onChange={begin ?
          (date) => handleChangeStartDate(date) : (date) => handleChangeEndDate(date)}
      />
    </div>
  );
}


PickerDate.propTypes = {
  begin: PropTypes.bool,
  handleChangeStartDate: PropTypes.func,
  handleChangeEndDate: PropTypes.func,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
};

export default PickerDate;
