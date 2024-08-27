import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./Dashboard.css";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(users, "user");
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div className="table">
        <DataTable
          value={users}
          // stripedRows
          tableStyle={{ minWidth: "50rem" }}
          // className="datatable-gridlines"
        >
          <Column header="id" field="id"></Column>
          <Column header="Name" field="name"></Column>
          <Column header="Email" field="email"></Column>
          <Column header="Address" field=""></Column>
          <Column header="Mobile No" field="phone"></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default Dashboard;
