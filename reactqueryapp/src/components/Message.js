import Alert from 'react-bootstrap/Alert';

function MessageComponent({variant, message}) {
    return (
        <Alert variant={variant}>{message}</Alert>
    );
}

export default MessageComponent;