import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AddressDetail from './address-detail';

interface User {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    cell: string;
}

/**
 * The list portion of the product. This utilizes the material UI datagrid to show the list of data
 * I utilized Axios as a quick way to get the data from the api
 * I utilized routes because the user will eventually want to go directly to the detail page instead of reloading the list
 * 
 */
const AddressBook: React.FC = () => {
    const [users, setUsers] = React.useState<User[]>([]);
    const [selectedUser, setSelectedUser] = React.useState<User>(
        {
            'id': '',
            'username': '',
            'firstname': '',
            'lastname': '',
            'email': '',
            'cell': 'fff'
        }
    );

    const columns = [

        {
            field: 'id',
            headerName: 'ID',
            width: 95,
            editable: false,
            hide: true
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 95,
            editable: false,
        },
        {
            field: 'firstname',
            headerName: 'First Name',
            width: 175,
            editable: false,
        },
        {
            field: 'lastname',
            headerName: 'Last Name',
            width: 175,
            editable: false,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
            editable: false,
        },
        {
            field: 'cell',
            headerName: 'Cell Phone',
            width: 150,
            editable: false,
        },

    ];

    const navigate = useNavigate();
   

    const setSelectedUserHandler = (userId: string, cachedUsers: Array<User>) => {
        const foundUser = cachedUsers.filter(data => {
            return userId === data.id;
        });
        setSelectedUser(foundUser[0]);
    }

    // utilize dynamically loaded js file. Will use runtime-env-cra in the future to handle kubernetes/docker/helm loading 
    const baseURL = window.__RUNTIME_CONFIG__.RANDOM_USER_URL;
    React.useEffect(() => {

        axios.get(`${baseURL}`).then((response) => {

            let userList = new Array<User>();

            if (response.data) {
                // populate the data for the list of users
                // transform to a minimal user
                response.data.results.map((data: any) => {
                    let aUser = {
                        'id': data.login.uuid,
                        'username': data.login.username,
                        'firstname': data.name.first,
                        'lastname': data.name.last,
                        'email': data.email,
                        'cell': data.cell
                    };
                    setSelectedUser(aUser.id);
                    userList.push(aUser);
                });
            }
            setUsers(userList);
        }).catch(error => {
            console.log('Error occured');
        });

        return () => {
            // unmount 
        }

    }, [baseURL]);
    return (
        <>
            <h1>Address Book</h1>
            <div style={{ height: 400, width: '100%' }} id='datagrid'>
                <DataGrid
                    rows={users}
                    columns={columns}
                    onSelectionModelChange={(newSelectionModel: any) => {
                        setSelectedUserHandler(newSelectionModel[0], users);
                        navigate('/detail/' + newSelectionModel[0]);

                    }}
                />
            </div>
            <Routes>
                <Route path='/detail/:id' element={<AddressDetail userData={selectedUser} />} />
            </Routes>
        </>
    );
}

export default AddressBook;