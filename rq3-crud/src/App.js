import {Routes, Route} from "react-router-dom";

import BooksList from "./components/BooksList";
import CreateBook from "./components/CreateBook";
import UpdateBook from "./components/UpdateBook";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/update-book" element={<UpdateBook />} />
                <Route path="/create-book" element={<CreateBook />} />
                <Route path="/" element={<BooksList />} />
            </Routes>
        </>
    );
}


export default App;
