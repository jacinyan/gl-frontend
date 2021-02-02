import React from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import PubSub from 'pubsub-js'

let receivedTitle = ''

const MyForm = () => {
  const { handleSubmit, register, watch, control } = useForm();
  const { startDate, endDate } = watch(["startDate", "endDate"]);
  const [submittedData, setSubmittedData] = React.useState({});

  PubSub.subscribe('title', (_, title) => {
    console.log(title);
    receivedTitle = title
  })

  const onSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="layout">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-section">
          <label htmlFor="title" className="form-label">
          <i>Your pick:</i>&nbsp;<strong>{receivedTitle}</strong>
          </label>
          <input id="title" name="title" type="text" ref={register} readOnly value={receivedTitle} hidden />
        </div>
        <div className="form-section">
          <label htmlFor="startDate" className="form-label">
            <i>Start Date:</i>
          </label>
          <Controller
            as={
              <DatePicker
                id="startDate"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="dd/MM/yyyy, h:mm aa"
                minDate={new Date()}
                minTime={setHours(setMinutes(new Date(), 0), 6)}
                maxTime={setHours(setMinutes(new Date(), 30), 23)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="red-border"
                isClearable
                shouldCloseOnSelect={false}
                todayButton="Today"
              />
            }
            name="startDate"
            control={control}
            selected={startDate}
            defaultValue=''
          />
        </div>
        <div className="form-section">
          <label htmlFor="endDate" className="form-label">
            <i>End Date:</i>
          </label>
          <Controller
            as={
              <DatePicker
                id="endDate"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="dd/MM/yyyy, h:mm aa"
                minDate={startDate}
                minTime={startDate}
                maxTime={setHours(setMinutes(new Date(), 30), 23)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                className="red-border"
                isClearable
                shouldCloseOnSelect={false}
                todayButton="Today"
              />
            }
            name="endDate"
            control={control}
            selected={endDate}
            defaultValue=""
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Submitted data:</p>
      <pre>{JSON.stringify(submittedData, null, 2)}</pre>
    </div>
  );
};

export default MyForm;
