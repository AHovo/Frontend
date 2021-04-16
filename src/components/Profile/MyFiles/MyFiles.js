import React, {useEffect, useState} from "react";
import {Table, Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const MyFiles = () => {
    const [files, setFiles] = useState([])
    const user = JSON.parse(localStorage.getItem('user'))
    const history = useHistory()

    useEffect( () => {
        getData()
    },[]);


// console.log(files)
    const deleteFile = async (id) => {
        let result = await fetch(`http://localhost:8000/api/delete/${id}`,{
            method: 'DELETE'
        })
        result = await result.json()
        getData()
        console.log(result)
    }

    const getData = async () => {
        let result = await fetch(`http://localhost:8000/api/getFiles/${user.id}`);
        result = await result.json();
        setFiles(result);
    }

    return(
        <div>
            <h3>My files</h3>
            <Button onClick={() =>{history.push('/addfile')}}>Add new file</Button>

            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>File</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                   files.map((item)=>
                       <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.file_name}</td>
                        <td><Button onClick={() => {deleteFile(item.id)}}>Delete</Button></td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}

export default MyFiles