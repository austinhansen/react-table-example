import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class UserTable extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    fetch(`/users`)
    .then(result=> {
      return result.json()
    }).then(data => {
      this.setState({
        users: data.users
      });
    });
  }

  render() {
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Email',
      accessor: 'email',
    }, {
      Header: 'School',
      accessor: 'school'
    }, {
      Header: 'Address',
      accessor: 'street_address'
    }, {
      Header: 'City',
      accessor: 'city'
    }, {
      Header: 'Province',
      accessor: 'province'
    }, {
      Header: 'Postal Code',
      accessor: 'postal_code'
    }, {
      Header: 'Country',
      accessor: 'country'
    }, {
      Header: 'Quote',
      accessor: 'quote',
      minWidth: 370
    }]

    return (
      <ReactTable
        data={this.state.users}
        columns={columns}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}

export default UserTable;
