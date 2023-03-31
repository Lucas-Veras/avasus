import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <Spinner animation="border" role="status" className='red mb100'>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export default Loading