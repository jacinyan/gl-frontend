import React from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyForm = () => {
  const { handleSubmit, register, watch, control } = useForm();
  const { startDate, endDate } = watch(["startDate", "endDate"]);
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
                dateFormat="Pp"
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
            }
            name="startDate"
            control={control}
              
            defaultValue=""
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
                dateFormat="Pp"
                selectsStart
                startDate={startDate}
                endDate={endDate}
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
