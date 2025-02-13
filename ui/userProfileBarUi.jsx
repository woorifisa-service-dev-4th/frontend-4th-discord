import React from 'react';

const UserProfileBarUi = ({children}) => {
    return (
        <section className={"absolute bottom-0 z-10 w-full bg-discordSidebar"}>
            {children}
        </section>
    );
};

export default UserProfileBarUi;