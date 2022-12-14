import React from 'react';

const SectionTitleComponent = ({title, titleStyle}) => {
    const commonStyle = {
        marginBottom: '50px'
    }

    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <h1 style={{...titleStyle, ...commonStyle}}>{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default SectionTitleComponent;