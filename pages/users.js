export default function UserManagement() {
    return (
        <div>
            <label>User Management</label>
            <div>
                <button>Add User</button>
            </div>
            <div>
                <table border={1}>
                    <tr> 
                    <th>UserName</th>
                    <th>email</th>
                    <th>Actions</th> 
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test@email.com</td>
                        <td>
                            <div>
                                <button>View</button>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
  }
  