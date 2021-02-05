import React,{useContext} from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import styles from './index.module.css'

import {UserContext} from '../../utils/context/userContext'
import {createBooking} from '../../services/bookingServices'


const Modal = ({ title, propertyId, finished }) => {

  const {state: loggedInState} = useContext(UserContext)
  let {user_id: userId} = loggedInState;

  const { handleSubmit, register, watch, control } = useForm();
  const { startDate, endDate } = watch(["startDate", "endDate"]);
  
  const onSubmit = (formData) => {
        const propertyId = formData.propertyId
        const startDate = formData.startDate
        const endDate = formData.endDate;
        userId = formData.userId

        const request = { "user_id": userId, "property_id": propertyId, "start_date": startDate, "end_date": endDate}

        createBooking(request)

        finished()
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.title}>
          <label htmlFor="title"><i ><strong>{title}</strong></i></label>
          <input id="userId" name="userId" type="text" ref={register} readOnly value={userId} hidden />
          <input id="propertyId" name="propertyId" type="text" ref={register} readOnly value={propertyId} hidden />
        </div>
        <div className={styles.from}><strong>From&nbsp;</strong></div>
        <div className={styles.clearFix}>
          <div className={styles.startDate}>
            <Controller
              as={
                <DatePicker
                  id="startDate"
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="dd/MM/yy, h:mm aa"
                  minDate={new Date()}
                  minTime={setHours(setMinutes(new Date(), 0), 6)}
                  maxTime={setHours(setMinutes(new Date(), 30), 23)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
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
          <div className={styles.to}><strong>&nbsp;To&nbsp;</strong></div>
          <div className={styles.endDate}>
            <Controller
              as={
                <DatePicker
                  id="endDate"
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                  dateFormat="dd/MM/yy, h:mm aa"
                  minDate={startDate || new Date()}
                  minTime={startDate || new Date()}
                  maxTime={setHours(setMinutes(new Date(), 30), 23) || new Date()}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
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
        </div>
        <button type="submit" className={styles.button}>Create Booking</button>
      </form>
    </>
  );
};

export default Modal;
