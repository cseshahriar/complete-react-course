import React, {useEffect, useState } from "react";
const ListComponent = ({getItems}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
        console.log('updating items ', items);
    }, [getItems]);

    return items.map(item => <div key={item}>{item}</div>)
}

export default  ListComponent;