import React, {useReducer} from 'react'
import { useHistory } from 'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { deleteBooking } from '../../services/bookingServices'
import bookingReducer from '../../utils/reducers/bookingReducer';


const Table = ({ bookings}) => {

  console.log(bookings);

  const history = useHistory()

  const [receivedBookings, dispatch] = useReducer(bookingReducer, bookings)

  

  const columns = [
    {
      dataField: 'title',
      text: 'Title'
    }, {
      dataField: 'location',
      text: 'Location'
    },
    {
      dataField: 'start_date',
      text: 'Booking Start'
    }, {
      dataField: 'end_date',
      text: 'Booking End'
    }, {
      dataField: "id",
      text: "Cancel Booking",
      editable: false,
      formatter: (_, row) => {
        return (
          <button
            className="btn btn-danger btn-xs"
            onClick={() => handleDelete(row.id)}
          >
            Cancel
          </button>
        );
      },
    }];

  const handleDelete = (id) => {
    deleteBooking(id).then(() => {
        dispatch({
          type: 'BOOKING_DELETE',
          payload: id
        })
    })
    history.push('/bookings')
  }

  return (
    <BootstrapTable
      keyField='id'
      data={bookings}
      columns={columns}
    />
  )
}

export default Table




