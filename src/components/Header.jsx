import Container from 'react-bootstrap/Container';

function Header(){
    return (
        <Container className="bg-success pt-5 pb-5 shadow-sm text-center text-white" fluid>
            <p className="display-2 fw-bold">Task Master</p>
        </Container>
    
    )
}

export default Header;