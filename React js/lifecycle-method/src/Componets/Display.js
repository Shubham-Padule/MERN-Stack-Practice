import { useState } from "react";
import MyModal from "./MyModal";

function Display(props) {
    const [prodArr, setProdArr] = useState(props.data);
    const [sortOrder, setSortOrder] = useState(true); // true for ascending, false for descending
    const [rowFlag, setRowFlag] = useState(false);
    const [rowData, setRowData] = useState({});

    const imgStyle = { width: "100px", height: "100px" };

    function rowClick(x) {
        setRowFlag(true);
        setRowData(x);
        console.log(x);
    }

    function handleSort(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        const sortedArr = [...prodArr].sort((a, b) => (sortOrder ? a.price - b.price : b.price - a.price));
        console.log(sortedArr);
        setProdArr(sortedArr);
        setSortOrder(!sortOrder);
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>
                            <a href="#" onClick={handleSort} style={{ textDecoration: 'none', color: 'inherit' }}>
                                Price {sortOrder ? '↑' : '↓'}
                            </a>
                        </th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {prodArr.map((x) => (
                        <tr key={x.id} onClick={() => rowClick(x)}>
                            <td>{x.id}</td>
                            <td>{x.title}</td>
                            <td>{x.price}</td>
                            <td><img src={x.thumbnail} style={imgStyle} alt={x.title} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {rowFlag && <MyModal row={rowData} />}
        </div>
    );
}

export default Display;
