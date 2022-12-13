import React from 'react';
import '../stylesheets/footer.css';

const FooterComponent = () => {
    return (
        <footer className="footer bd-dark">
            <p className="text-center">&copy; cseshahriar 2022. All rights reserved.</p>
        </footer>
    );
}

export default React.memo(FooterComponent);