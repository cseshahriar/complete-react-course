import {Component} from 'react';
import './App.css';

import SearchBar from './components/searchBar.component';
import UserList from './components/userList.component';

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
            <SearchBar onChange={this.handleSearch} q={this.state.q}/>
            <UserList users={filterUsers}/>
          </div>
        </div>
    )
  }
}

export default App;