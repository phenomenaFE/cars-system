import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from 'react';
// https://www.figma.com/file/sfhbAjBDDlKrdvthrMA8B4/Bookland_BookStoreEcommerceWebsite_AllPage?node-id=8%3A4716
function Home() {
    return ( 
        <Container fluid>
            <h3>hello</h3>
            <Link to="/cars/2">
                products
            </Link>
        </Container>
     );
}

export default Home;