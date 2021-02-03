import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const columns = [{
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
}];

export default ({ bookings }) => <BootstrapTable keyField='id' data={bookings} columns={columns} />
