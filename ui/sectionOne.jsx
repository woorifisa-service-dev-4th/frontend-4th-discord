import React from 'react';

const SectionOne = ({children}) => {
    return (
        <div className={"flex h-[48px] shadow-elevationLow p-2"}>
            {children}
        </div>
    );
};

export default SectionOne;