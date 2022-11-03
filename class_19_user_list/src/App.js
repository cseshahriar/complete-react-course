import {Component} from 'react';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      users: [],
      q: ''
    }
  }
  
  // handleSearch
  handleSearch = event => {
    const q = event.target.value.toLowerCase();
    this.setState({q});
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState(() => {
          return {users: users}
        }, () => {
          console.log(this.state.users)
        })
      )
  }

  render () {

    // filter users
    const filterUsers = this.state.users.filter(
      (user) => {
        return user.name.toLowerCase().includes(this.state.q);
      }
    )

    const {users, q} = this.state;
    const {handleSearch} = this;

    return(
      <div className="container py-5">
          <div className="row">
              <div className="col-12">
                  <form className="form-inline">
                      <label className="sr-only">Search</label>
                      <input 
                        type="text"
                        name="q"
                        className="form-control mb-2 mr-sm-2"
                        placeholder="Search by Name"
                        value={q}
                        onChange={handleSearch}
                      />
                  </form>
              </div>


            <div className="col-12">
                  <h1 className="mt-5">User List</h1>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Company</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        filterUsers.length > 0 ? 
                        filterUsers.map((user) => {
                          return <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.company.name}</td>
                                <td>
                                  <button className="btn btn-primary btn-success">Remove</button>
                                </td>
                            </tr>
                        }) : 
                        <tr>
                          <td>
                            <h1>Fetching user information</h1>
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
            </div>
          </div>
        </div>
    )
  }
}

export default App;