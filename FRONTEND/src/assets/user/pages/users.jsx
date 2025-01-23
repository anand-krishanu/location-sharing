import React from "react";

import UsersList from "../component/UsersList";

const Users = props => {
    const USERS = [
        { id: 'u1', name: 'Chopped Chin', image: 'https://ipfs.io/ipfs/QmNaPC6LSCGNtRjzwsYDKgUTEMjkH8gihqYTGPgPBGa5nn', placeCount: 3 },
        { id: 'u2', name: 'Locked In Ninja', image: 'https://i1.sndcdn.com/artworks-l31p39jvliTraADN-g71rVw-t1080x1080.jpg', placeCount: 1 }
        ];

    return <UsersList items={USERS} />
}

export default Users;