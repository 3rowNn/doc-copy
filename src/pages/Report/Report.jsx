import { useEffect, useState } from 'react'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import './Report.css';

function Report() {
    const [onlywaiting, setonlywaiting] = useState(false);
    const [ReportsRaw, setReportsRaw] = useState([]);
    const [filteredReports, setFilteredReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [itemsPerPage, setItemsPerPage] = useState(5); // จำนวนรายการต่อหน้า
    const [curPage, setcurPages] = useState(1); // หน้าเริ่มต้น
    const [numPages, setNumPages] = useState(1); // จำนวนหน้าทั้งหมด

    const [show, setShow] = useState(false);
    const handleshow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [newTitle, setNewTitle] = useState('');

    useEffect(() => {
        setcurPages(1); // รีเซ็ตหน้าเป็นหน้าแรกเมื่อมีการเปลี่ยนแปลงการกรอง
    }, [onlywaiting]);

    // Load reports from localStorage or fallback to an empty array
    useEffect(() => {
        const savedReports = JSON.parse(localStorage.getItem('reports')) || [];
        setReportsRaw(savedReports);
        setLoading(false);
    }, []);

    useEffect(() => {
        if (onlywaiting) {
            setFilteredReports(ReportsRaw.filter(report => !report.completed)); 
        } else {
            setFilteredReports(ReportsRaw); 
        }
    }, [ReportsRaw, onlywaiting]);

    // คำนวณจำนวนหน้าทั้งหมด
    useEffect(() => {
        const pages = Math.ceil(filteredReports.length / itemsPerPage);
        setNumPages(pages);
    }, [filteredReports, itemsPerPage]);

    const paginatedReports = filteredReports.slice((curPage - 1) * itemsPerPage, curPage * itemsPerPage); // เลือกรายการตามหน้า

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    function deleteclick(id) {
        const updatedReports = ReportsRaw.filter(report => report.id !== id);
        setReportsRaw(updatedReports);
        localStorage.setItem('reports', JSON.stringify(updatedReports)); // Update localStorage
    }

    function waitingclick(id) {
        const updatedReports = ReportsRaw.map(report => {
            if (report.id === id) {
                return { ...report, completed: !report.completed };
            }
            return report;
        });

        setReportsRaw(updatedReports);
        localStorage.setItem('reports', JSON.stringify(updatedReports)); // Update localStorage
    }

    function addclick() {
        if (!newTitle.trim()) { 
            alert("Please enter a problem description!"); 
            return;
        }

        const newId = ReportsRaw.length > 0 ? Math.max(...ReportsRaw.map(report => report.id)) + 1 : 1;

        const newitem = {
            id: newId,
            title: newTitle,
            completed: false,
            useId: 1,
        };

        const updatedReports = [...ReportsRaw, newitem];
        setReportsRaw(updatedReports);
        localStorage.setItem('reports', JSON.stringify(updatedReports)); // Save to localStorage
        setNewTitle('');
        handleClose();
    }

    // ฟังก์ชันสำหรับปุ่มก่อนหน้าและถัดไป
    const handlePreviousPage = () => {
        if (curPage > 1) {
            setcurPages(curPage - 1);
        }
    };

    const handleNextPage = () => {
        if (curPage < numPages) {
            setcurPages(curPage + 1);
        }
    };

    return (
        <div className='Report-container'>
            {/* Modal for adding new report */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ID :</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Problem :</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)} 
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={addclick}> Send
                        <span className='bi bi-send'></span>
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Header with the button to open modal */}
            <h1>Report</h1>
            <div style={{ textAlign: 'right' }}>
                <h2 className='bi bi-plus-circle-fill' onClick={handleshow}></h2>
            </div>

            {/* Filters */}
            <div className='Report-filters-container'>
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        onChange={(e) => setonlywaiting(e.target.checked)} 
                    />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Show only &nbsp;
                       <button className='btn btn-warning'> <span className='bi bi-clock'></span> waiting </button></label>
                </div>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    value={itemsPerPage}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        setItemsPerPage(value);
                    }}
                    style={{ width: '200px' }}
                >
                    <option value="5">5 items per page</option>
                    <option value="10">10 items per page</option>
                    <option value="50">50 items per page</option>
                </select>
            </div>

            {/* Table to display reports */}
            <table className='custom-table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Id</th>
                        <th>Problem Report</th>
                        <th style={{ textAlign: 'right' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedReports.map((report) => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td style={{ textAlign: 'center' }}>{report.title}</td>
                            <td style={{ textAlign: 'right' }}>
                                <span
                                    className={`badge ${report.completed ? 'bg-success' : 'bg-warning'}`}
                                    onClick={() => waitingclick(report.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {report.completed ? "Done" : 'Waiting'}
                                    <span className={`bi ${report.completed ? 'bi-check-lg' : 'bi-clock'}`}></span>
                                </span>
                                <button className='btn btn-danger' onClick={() => deleteclick(report.id)}>
                                    <span className='bi bi-trash-fill'></span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div style={{ textAlign: 'center' }}>
                <button
                    className='btn btn-success Report-space'
                    onClick={handlePreviousPage}
                    disabled={curPage === 1}
                >
                    Previous
                </button>
                <span className='Report-space'> {curPage}&nbsp;/&nbsp;{numPages} </span>
                <button
                    className='btn btn-success Report-space'
                    onClick={handleNextPage}
                    disabled={curPage === numPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Report;