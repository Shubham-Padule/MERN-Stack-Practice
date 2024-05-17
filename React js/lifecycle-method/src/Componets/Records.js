import { useEffect, useState } from "react";
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./Display";

function Records() {
    const [prodArr, setProdArr] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    async function getAllRecords(pageNumber) {
        try {
            const skip = (pageNumber - 1) * 10;
            const url = `https://dummyjson.com/products?limit=10&skip=${skip}`;
            const response = await fetch(url);
            const { products } = await response.json();
            setProdArr(products);
        } catch (error) {
            console.error("Error fetching records:", error);
        }
    }

    useEffect(() => {
        getAllRecords(currentPage);
    }, [currentPage]);

    function handlePageClick(pageNumber) {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <Display data={prodArr} />
            <Pagination>
                <Pagination.First onClick={() => handlePageClick(1)} />
                <Pagination.Prev onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1} />
                <Pagination.Item onClick={() => handlePageClick(1)} active={currentPage === 1}>1</Pagination.Item>
                <Pagination.Item onClick={() => handlePageClick(2)} active={currentPage === 2}>2</Pagination.Item>
                <Pagination.Item onClick={() => handlePageClick(3)} active={currentPage === 3}>3</Pagination.Item>
                <Pagination.Next onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === 3} />
                <Pagination.Last onClick={() => handlePageClick(3)} />
            </Pagination>
        </>
    );
}

export default Records;
