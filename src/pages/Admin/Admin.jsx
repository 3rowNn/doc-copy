import { useState, useEffect } from "react";
import { fetchAdmins } from "../../data/admins";

import "./Admin.css";

function Admin() {
  const [adminsRaw, setAdminsRaw] = useState([]);

  const [admins, setAdmins] = useState([]);

  const [onlyWaiting, setOnlyWaiting] = useState(false);

  const [itemPerPage, setItemPerPage] = useState(5);

  const [numPages, setNumPages] = useState(1);

  const [curPage, setCurPage] = useState(1);
  const deleteClick = (id) => {
    // ลบรายการที่มี id ตรงกันจาก adminsRaw
    const updatedAdmins = adminsRaw.filter((admin) => admin.id !== id);

    // อัปเดตสถานะใหม่
    setAdminsRaw(updatedAdmins);
  };

  const approveUser = (id) => {
    const updatedAdmins = adminsRaw.map((admin) =>
      admin.id === id ? { ...admin, approved: true } : admin
    );
    setAdminsRaw(updatedAdmins);
  };

  useEffect(() => {
    setNumPages(Math.ceil(adminsRaw.length / itemPerPage));
    if (curPage > Math.ceil(adminsRaw.length / itemPerPage)) {
      setCurPage(Math.max(1, curPage - 1));
    }
  }, [adminsRaw, itemPerPage]);

  useEffect(() => {
    setCurPage(1);
  }, [numPages]);

  useEffect(() => {
    console.log(`itemPerPage: ${itemPerPage}`);
    setNumPages(Math.ceil(adminsRaw.length / itemPerPage));
  }, [itemPerPage, adminsRaw]);

  useEffect(() => {
    setAdminsRaw(fetchAdmins());
    setCurPage(1);
  }, []);

  useEffect(() => {
    if (onlyWaiting) {
      setAdmins(adminsRaw.filter((admin) => !admin.completed));
    } else {
      setAdmins(adminsRaw);
    }
  }, [adminsRaw, onlyWaiting, itemPerPage]);

  useEffect(() => {
    // console.log(adminsRaw)
    setAdmins(adminsRaw);
  }, [adminsRaw]); // *** bypass filters ***

  return (
    <div className="admin-container">
      {/* dropdown & table */}
      <div className="dropdown-and-table">
        <select
          className="form-select"
          aria-label="Default select example"
          defaultValue={5}
          style={{ width: "200px" }}
          onChange={(e) => {
            setItemPerPage(e.target.value);
          }}
        >
          <option value={5}>5 items per page</option>
          <option value={10}>10 items per page</option>
          <option value={50}>50 items per page</option>
        </select>

        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th className="action-column">Action</th>
            </tr>
          </thead>
          <tbody className="table-style">
            {admins
              .filter((admin, index) => {
                const min = (curPage - 1) * itemPerPage;
                const max = curPage * itemPerPage - 1;
                return index >= min && index <= max;
              })
              .map((admin) => (
                <tr key={admin.id}>
                  <td>{admin.id}</td>
                  <td>{admin.name}</td>
                  <td>{admin.username}</td>
                  <td>{admin.email}</td>
                  <td style={{ color: admin.approved ? "green" : "red" }}>
                    {admin.approved ? "Approved" : "Pending"}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => approveUser(admin.id)}
                      disabled={admin.approved} // ป้องกันการกดซ้ำเมื่อ Approved แล้ว
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="pagination-controls">
          <button
            className="btn btn-outline-primary admin-space"
            onClick={() => setCurPage(1)}
            disabled={curPage === 1}
          >
            First
          </button>
          <button
            className="btn btn-outline-primary admin-space"
            onClick={() => curPage > 1 && setCurPage(curPage - 1)}
            disabled={curPage === 1}
          >
            Previous
          </button>
          <span className="admin-space">
            {curPage}&nbsp;/&nbsp;{numPages}
          </span>
          <button
            className="btn btn-outline-primary admin-space"
            onClick={() => curPage < numPages && setCurPage(curPage + 1)}
            disabled={curPage === numPages}
          >
            Next
          </button>
          <button
            className="btn btn-outline-primary admin-space"
            onClick={() => setCurPage(numPages)}
            disabled={curPage === numPages}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;