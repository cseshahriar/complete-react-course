import {useState, useCallback} from "react";
import TitleComponent from "./title.component";
import ListComponent from "./list.component";

const HomeComponent = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    },[number]);

    const theme = {
        backgroundColor: dark ? 'blue' : '#fff',
        color: dark ? '#fff' : 'blue',
        padding: '30px',
        margin: '30px'
    };

    return (
        <div style={theme}>
            <TitleComponent title="Home Component" />

            <input
                style={{marginTop: '15px', marginBottom: '15px'}}
                className="form-control"
                type="number"
                value={number}
                onChange={ e => setNumber(parseInt(e.target.value))}
            />

            <button
                onClick={() => setDark(prevDark => !prevDark)}
                type="button"
                className="btn btn-primary"
            >Toggle Theme</button>

            <ListComponent getItems={getItems}/>
        </div>
    )
}

export default HomeComponent;