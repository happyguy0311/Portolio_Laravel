import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function CreateForm() {
    const [values, setValues] = useState({
        group: "",
        key: "",
        id: "",
        en: "",
    });

    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post("/translate", values);
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="group">
                <Form.Label>Group</Form.Label>
                <Form.Control
                    type="text"
                    name="group"
                    placeholder="Translate Group"
                    onChange={handleChanges}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="key">
                <Form.Label>Key</Form.Label>
                <Form.Control
                    type="text"
                    name="key"
                    placeholder="Translate Key"
                    onChange={handleChanges}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="id">
                <Form.Label>Lang ID</Form.Label>
                <Form.Control
                    type="text"
                    name="id"
                    placeholder="Translate in Indonesia"
                    onChange={handleChanges}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="en">
                <Form.Label>Lang EN</Form.Label>
                <Form.Control
                    type="text"
                    name="en"
                    placeholder="Translate in English"
                    onChange={handleChanges}
                />
            </Form.Group>
            <Button
                href={route("translate.index")}
                variant="success"
                className="me-2"
            >
                Back
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}
