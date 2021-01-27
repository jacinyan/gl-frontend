import React from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";

const MyForm = () => {
  const { handleSubmit, register, watch, control } = useForm();
  const { startDate, endDate} = watch(["startDate", "endDate"]);
  const [submittedData, setSubmittedData] = React.useState({});

  const onSubmit = (data) => {
    setSubmittedData(data);
  };
  return (
    <div className="layout">
      <h1>My Event Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-section">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input id="title" name="title" type="text" ref={register} />
        </div>
        <div className="form-section">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea id="description" name="description" ref={register} />
        </div>
        <div className="form-section">
          <label htmlFor="startDate" className="form-label">
            Start Date
          </label>
          <Controller
            as={
              <DatePicker
                id="startDate"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                minDate={new Date()}
                minTime={setHours(setMinutes(new Date(), 0), 17)}
                maxTime={setHours(setMinutes(new Date(), 30), 20)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="red-border"
                isClearable
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
            End Date
          </label>
          <Controller
            as={
              <DatePicker
                id="endDate"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                minDate={startDate}
                minTime={setHours(setMinutes(new Date(), 0), 17)}
                maxTime={setHours(setMinutes(new Date(), 30), 20)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                className="red-border"
                isClearable
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
