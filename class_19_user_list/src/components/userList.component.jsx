import React from "react";

class UserList extends React.Component {
    render() {
        // props
        const {users} = this.props;
        console.log('search component', this.props)

        return(
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
                        users.length > 0 ? 
                        users.map((user) => {
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
        )
    }
}

export default UserList;