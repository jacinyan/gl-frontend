import React, { useEffect, useReducer, useContext } from 'react'
import bookingReducer from '../../utils/reducers/bookingReducer'
import { getBookings } from '../../services/bookingServices'
import { UserContext } from '../../utils/context/userContext'
import { useHistory } from 'react-router-dom'
import { deleteBooking } from '../../services/bookingServices'

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { Container, Row, Button, Col } from 'react-bootstrap'
import Checkout from '../../Checkout'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
    isLoading: false,
    error: '',
    bookings: []
}

const contentStyle = { background: '#fff' };
const overlayStyle = { background: 'rgba(255,255,255,0.5)' };

const Bookings = (props) => {

    const history = useHistory()

    const { state: loggedInState } = useContext(UserContext)

    const [state, dispatch] = useReducer(bookingReducer, initialState)

    useEffect(() => {
        console.log('Bookings useEffect');
        dispatch({
            type: "BOOKINGS_LIST_REQUEST"
        });
        getBookings()
            .then((data) => {
                console.log(data);
                dispatch({ type: 'BOOKINGS_LIST_REQUEST_SUCCESS', payload: data })
            })
            .catch((error) => {
                toast.warning(error.message)
                dispatch({ type: 'BOOKINGS_LIST_REQUEST_FAIL', payload: error.message })
            })
    }, [loggedInState.jwt, loggedInState.username])

    const columns = [
        {
            dataField: 'title',
            text: 'Title',
            headerStyle: (colum, colIndex) => {
                return { width: '10%', textAlign: 'center' };
              }
        }, {
            dataField: 'location',
            text: 'Location',
            headerStyle: (colum, colIndex) => {
                return { width: '20%', textAlign: 'center' };
              }
        },
        {
            dataField: 'start_date',
            text: 'Booking Start',
            sort: true,
            headerStyle: (colum, colIndex) => {
                return { width: '25%', textAlign: 'center' };
              }
        }, {
            dataField: 'end_date',
            text: 'Booking End',
            sort: true,
            headerStyle: (colum, colIndex) => {
                return { width: '25%', textAlign: 'center' };
              }
        },
        {
            dataField: 'total',
            text: 'Sub Total',
            sort: true,
            headerStyle: (colum, colIndex) => {
                return { width: '10%', textAlign: 'center' };
              }
        },
        {
            dataField: "id",
            text: "Cancel",
            editable: false,
            formatter: (_, row) => {
                return (
                    <button
                        className="btn btn-danger btn-xs"
                        onClick={() => handleDelete(row.id)}
                    >
                        Confirm?
                    </button>
                );
            },
            headerStyle: (colum, colIndex) => {
                return { width: '10%', textAlign: 'center' };
              }
        }];

        paginationFactory({
            page: 2,
            sizePerPage: 5,
            lastPageText: '>>',
            firstPageText: '<<',
            nextPageText: '>',
            prePageText: '<',
            showTotal: true,
            alwaysShowAllBtns: true,
            onPageChange: function (page, sizePerPage) {
              console.log('page', page);
              console.log('sizePerPage', sizePerPage);
            },
            onSizePerPageChange: function (page, sizePerPage) {
              console.log('page', page);
              console.log('sizePerPage', sizePerPage);
            }
          });   

    const handleDelete = (id) => {
        deleteBooking(id).then(() => {
            dispatch({
                type: 'BOOKING_DELETE_SUCCESS',
                payload: id
            })
        })
        history.push('/bookings')
    }

    return (
        <>
            <h4>MyBookings</h4>
            {
                state.isLoading ? <h2>Loading...</h2>
                    :
                    state.error !== '' ? <h4>Oops😅, something went wrong</h4>
                        :
                        props.location.state === undefined ?
                            <Container style={{ paddingTop: '3vh' }}>
                                <Row>
                                    <BootstrapTable
                                        keyField='id'
                                        data={state.bookings}
                                        columns={columns}
                                        striped={true} hover={true}
                                        pagination={paginationFactory()}
                                    />
                                </Row>
                                <Row>
                                    <Col md={{ span: 3, offset: 10 }}>
                                        <Popup trigger={<Button variant="success">PURCHASE?</Button>}
                                            modal {...{ contentStyle, overlayStyle }}>
                                            <Checkout />
                                        </Popup>
                                    </Col>
                                </Row>
                            </Container>
                            :
                            null
            }

        </>
    )
}

export default Bookings
