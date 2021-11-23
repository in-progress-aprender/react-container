import { Card, CardContent, Typography } from '@mui/material';
import React from 'react'

// a minimal user to display the detailed data for
interface User {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    cell: string;
}

// the props that are passed in
interface UserProps {
    userData: User;
}

/**
 *   The detail portion of the product. Routing was added to eventually allow a user to bookmark
 *   the detail and come back to it.  This would require an api call to get the details.
 */
const AddressDetail: React.FC<UserProps> = ({ userData, children }) => {
    return (
        <>
            <h1>Address Details </h1>

            <React.Fragment>
                <Card variant='outlined'>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Selected User
                        </Typography>
                        <Typography >
                            {userData.firstname}
                        </Typography>
                        <Typography >
                            {userData.lastname}
                        </Typography>
                        <Typography >
                            {userData.email}
                        </Typography>
                        <Typography >
                            {userData.cell}
                        </Typography>
                    </CardContent>
                </Card>
            </React.Fragment>
        </>
    );
}

export default AddressDetail;