import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Import.css';

function Import({ addTodo, setTodosRaw }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [number, setNumber] = useState("");
    const [agency, setAgency] = useState("");
    const [show, setShow] = useState(false);
    const [editingTodo, setEditingTodo] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.todo) {
            const todo = location.state.todo;
            setEditingTodo(todo);
            setTitle(todo.title);
            setDate(todo.date);
            setNumber(todo.id);
            setAgency(todo.agency);
        }
    }, [location.state]);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleAdd = () => {
        if (title.trim() === "" || number.trim() === "" || agency.trim() === "" || date.trim() === "") {
            alert("กรุณากรอกให้ครบ");
            return;
        }

        const newTodo = {
            id: editingTodo ? editingTodo.id : number.trim(),
            title: title.trim(),
            date: date.trim(),
            agency: agency.trim(),
            time: new Date().toLocaleTimeString(),
        };

        if (editingTodo) {
            // แก้ไขข้อมูลที่มีอยู่
            setTodosRaw((prevTodos) =>
                prevTodos.map((todo) => (todo.id === editingTodo.id ? newTodo : todo))
            );
        } else {
            // เพิ่มข้อมูลใหม่
            if (setTodosRaw) {
                setTodosRaw((prevTodos) => [...prevTodos, newTodo]);
            } else {
                console.error("setTodosRaw is not a function");
            }
        }

        navigate('/document');
    };

    return (
        <div className='import-container'>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className='bi bi-folder-plus'></span>&nbsp;{editingTodo ? 'แก้ไข' : 'เพิ่ม'} เอกสาร
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ID :</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setNumber(e.target.value)}
                                value={number}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>ชื่อเอกสาร</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>วันที่</Form.Label>
                            <Form.Control
                                type="text"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                placeholder="กรุณากรอกวันที่"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label>หน่วยงาน</Form.Label>
                            <Form.Control
                                type="text"
                                value={agency}
                                onChange={(e) => setAgency(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-cancel" onClick={handleClose}>
                        <span className='bi bi-x'>&nbsp;Cancel</span>
                    </Button>
                    <Button className="btn-add" onClick={() => {
                        handleAdd();
                        handleClose();
                    }}>
                        <span className='bi bi-plus'>{editingTodo ? ' Edit' : ' Add'}</span>
                    </Button>
                </Modal.Footer>
            </Modal>

            <h2>{editingTodo ? 'แก้ไขเอกสาร' : 'นำเข้าเอกสาร'}</h2>
            <button className='btn-primary' onClick={handleShow}>
                <span className='bi bi-folder-plus'></span>
                {editingTodo ? ' Edit' : ' ADD'}
            </button>
        </div>
    );
}

export default Import;
