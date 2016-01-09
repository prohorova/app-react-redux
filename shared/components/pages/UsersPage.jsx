import React from 'react';

import Grid, { Cell } from 'react-mdl/lib/Grid';

import UserCard    from '../UserCard/UserCard.jsx';

export default ({ users = [], onItemClick }) => {
    return (
        <div>
            <Grid>
                {users.map(user => {
                    if (user.type === 'USER') {
                        return (
                            <Cell col={4} phone={12} key={user.id}>
                                <UserCard
                                    id={user.id}
                                    pictureURL={user.pictureURL}
                                    firstName={user.firstName}
                                    lastName={user.lastName}
                                    country={user.country}
                                    city={user.city}
                                    onClick={onItemClick.bind(this, user)}
                                />
                            </Cell>
                        );
                    }
                })}
            </Grid>
        </div>
    );
};
