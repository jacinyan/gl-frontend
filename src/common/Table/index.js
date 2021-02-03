import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const products = [ {id: 1, name: 'apple', price: 2},{id: 2, name: 'banana', price: 2},{id: 3, name: 'pear', price: 3} ];
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

export default () => <BootstrapTable keyField='id' data={ products } columns={ columns } />
