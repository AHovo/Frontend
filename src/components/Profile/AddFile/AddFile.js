import React, {useState} from "react";
import {Button, Form, Row, Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const AddFile = () => {
    const [file,setFile] = useState('')
    const [visibility,setVisibility] = useState('public')
    let user_id = JSON.parse(localStorage.getItem('user')).id
    const history = useHistory()


    const handleForm = (e) => {
        e.preventDefault()
        // const fileData = { user_id, file, visibility }
        const fileData = new FormData();
        fileData.append('user_id', user_id);
        fileData.append('file', file);
        fileData.append('visibility', visibility);

        let result = fetch(`http://localhost:8000/api/uploadPdf`, {
            method: 'POST',
            body: fileData
        });

        history.push('/myfiles')

    }




    return (
        <div>
            <h3>Add New File</h3>

            <Form onSubmit={handleForm}>
                <Form.Group  as={Row} controlId="formBasicEmail">
                    <Form.Control name='file_name' sm={10} onChange={e => setFile(e.target.files[0])} type="file" accept="application/pdf" />
                </Form.Group>

                <fieldset>
                    <Form.Group as={Row}>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="public"
                                name="visibility"
                                value="public"
                                onChange={e => setVisibility(e.target.value)}
                                defaultChecked
                            />
                            <Form.Check
                                type="radio"
                                label="private"
                                name="visibility"
                                value="private"
                                onChange={e => setVisibility(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                </fieldset>

                <Button variant="dark" type="submit" className='formButton'>
                    Save
                </Button>
            </Form>
        </div>
    )
}

export default AddFile