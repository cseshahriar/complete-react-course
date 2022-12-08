import React from "react";
export default function HoverCounter({count, incrementCount, theme, switchTheme}) {

    {/* app.js -> content.js -> hover.js */}
    const style = theme === 'dark' ? {backgroundColor: '#000000', color: '#ffffff', padding: '15px'} : null;
    console.log('hover rendered');
    return (
        <div style={{padding:'15px'}}>
            <h1 type="button" onMouseOver={incrementCount} style={style}>Hovered {count} times</h1>
            <button type="button" onClick={switchTheme} className="btn btn-primary">Change Theme</button>
        </div>
    );
}