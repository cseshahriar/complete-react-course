// https://api.quotable.io/random
import React, { useState, useEffect } from 'react';

const Quote = () => {
    // side effect task
    const [quote, setQuote ] = useState(null);

    useEffect(() => {
            // fetch quote method
            const fetchQuote = async () => {
                const response = await fetch("http://api.quotable.io/random"); // return string
                const data = await response.json();
                console.log('data', data);
                setQuote(data);
            }
        fetchQuote();
    }, []); // dependency fur call use effect

    return (
        <div>
            <h1>Get quotes using fetch API</h1>
            <div>
                { quote?.content }
            </div>
        </div>
    );
};

export default Quote;