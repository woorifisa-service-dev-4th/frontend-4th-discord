import React from 'react';

const SectionThree = ({children}) => {
    return (
        <div className={"flex-1 bg-discord2and3  overflow-y-auto custom-scrollbar"}>
            {children}

        </div>
    );
};

export default SectionThree;