import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Document.css';

function Document({ todosRaw, setTodosRaw }) {
    const [todos, setTodos] = useState([]);
    const [itemPerPage, setItemPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [numPage, setNumPage] = useState(1);
    const [curPage, setCurPage] = useState(1);

    const navigate = useNavigate();

    // อัพเดทหน้าปัจจุบันเมื่อมีการเปลี่ยนแปลงของ numPage
    useEffect(() => {
        setCurPage(1);
    }, [numPage]);

    // คำนวณจำนวนหน้า
    useEffect(() => {
        setNumPage(Math.ceil(filteredTodos.length / itemPerPage));
    }, [itemPerPage, filteredTodos]);

    // อัพเดท todos
    useEffect(() => {
        setTodos(filteredTodos);
    }, [filteredTodos, itemPerPage]);

    // ค้นหาข้อมูลตามคำค้นหา
    useEffect(() => {
        setFilteredTodos(
            todosRaw.filter(todo =>
                todo.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, todosRaw]);

    // ลบเอกสาร
    const deleteClick = (id) => {
        setTodosRaw(todosRaw.filter(todo => todo.id !== id));
    };

    // แก้ไขเอกสาร
    const editClick = (todo) => {
        navigate('/import', { state: { todo } });
    };

    // ฟังก์ชันสำหรับดาวน์โหลดเอกสาร
    const downloadClick = (todo) => {
        if (!todo) {
            return;
        }

        console.log("ดาวน์โหลดเอกสาร:", todo.title);
        alert(`ดาวน์โหลดเอกสาร: ${todo.title}`);
    };

    return (
        <div className="doc-container">
            <div className="doc-header">
                <h2>บริหารเอกสาร</h2>
                <button className="btn btn-success" onClick={() => navigate('/import')}>
                    นำเข้าเอกสาร
                </button>
            </div>

            {/* Search Filter */}
            <div className="doc-filter">
                <h5>ค้นหา</h5>
                <div className="doc-search-bar">
                    <input
                        type="text"
                        placeholder="ชื่อเอกสาร"
                        className="form-control"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Table */}
            <div className="doc-table-wrapper">
                <select
                    className="form-select"
                    defaultValue={5}
                    style={{ width: '200px', marginBottom: '40px' }}
                    onChange={(e) => setItemPerPage(parseInt(e.target.value))}
                >
                    <option value={5}>5 items per page</option>
                    <option value={10}>10 items per page</option>
                    <option value={20}>20 items per page</option>
                    <option value={50}>50 items per page</option>
                </select>

                <div className="doc-table">
                    <table className="table table-striped">
                        <thead className="table-secondary">
                            <tr>
                                <th>ลำดับเอกสาร</th>
                                <th>ชื่อเอกสาร</th>
                                <th>วันที่</th>
                                <th>หน่วยงาน</th>
                                <th>เครื่องมือ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos
                                .filter((todo, index) => {
                                    const min = (curPage - 1) * itemPerPage;
                                    const max = curPage * itemPerPage - 1;
                                    return index >= min && index <= max;
                                })
                                .map((todo) => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td style={{ textAlign: 'left' }}>{todo.title}</td>
                                        <td>{todo.date}</td>
                                        <td>{todo.agency}</td>
                                        <td>
                                            <i className="bi bi-download" onClick={() => downloadClick(todo)}></i>
                                            <i className="bi bi-pencil" onClick={() => editClick(todo)}></i>
                                            <i className="bi bi-trash" onClick={() => deleteClick(todo.id)}></i>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Page Control */}
            <div className="page-control" style={{ marginTop: '40px', textAlign: 'center' }}>
                <button className="btn btn-outline-success todo-space" onClick={() => setCurPage(1)} disabled={curPage === 1}>
                    First
                </button>

                <button className="btn btn-outline-success todo-space" onClick={() => curPage > 1 && setCurPage(curPage - 1)} disabled={curPage === 1}>
                    Prev
                </button>

                {curPage}/{numPage}

                <button className="btn btn-outline-success todo-space" onClick={() => curPage < numPage && setCurPage(curPage + 1)} disabled={curPage === numPage}>
                    Next
                </button>

                <button className="btn btn-outline-success todo-space" onClick={() => setCurPage(numPage)} disabled={curPage === numPage}>
                    Last
                </button>
            </div>
        </div>
    );
}

export default Document;
