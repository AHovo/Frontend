import React, {useEffect, useState} from "react";
import {Table, Button} from "react-bootstrap";

const AllFiles = () => {
    const [files, setFiles] = useState([])

    const user = JSON.parse(localStorage.getItem('user'))
    useEffect( () => {
        getData()
    },[]);


    const getData = async () => {
        let result = await fetch(`http://localhost:8000/api/getFiles`);
        result = await result.json();
        setFiles(result);
    }

    return(
        <div>
            <h3>All files</h3>

            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>File</th>
                </tr>
                </thead>
                <tbody>
                {
                   files.map((item)=>
                       <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.file_name}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}

export default AllFiles