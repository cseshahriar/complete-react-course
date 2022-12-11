import React from 'react';

const TitleComponent = ({title}) => {
    return (
        <><h1>{title}</h1></>
    );
}

export default React.memo(TitleComponent);
// memo is cache, it's not re-render title component
// hoc for functional component