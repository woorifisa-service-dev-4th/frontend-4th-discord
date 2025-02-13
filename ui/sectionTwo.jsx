import SectionThree from "@/ui/sectionThree";
import React from 'react';

function SectionTwo({children}) {
    return (
        <div className={"px-2 h-12 flex items-center shadow-elevationLow z-20"}>
            {children}
        </div>
    );


}


export default SectionTwo;