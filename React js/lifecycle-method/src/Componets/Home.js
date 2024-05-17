import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutLink from "./RoutLink";
function Home() {
    return (
        <div>
            <h1>This is Home Page</h1>
            <Button variant="primary">Primary Button</Button>
            <RoutLink />
        </div>
    );
}

export default Home;
