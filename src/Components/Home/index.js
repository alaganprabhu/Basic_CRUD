// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import "./home.css";
// import Button from "../../component/ButtonComponent";
// import DialogModule from "../../component/Dialog";
// import { ToastContainer, toast } from "react-toastify";
// import {
//   deleteUserData,
//   fetchUsersData,
//   postUsersData,
//   updateUser,
// } from "./Apistore/api";

// const defaultFormValue = {
//   id: "",
//   name: "",
//   email: "",
//   address: "",
//   mobile: "",
// };
// const Home = () => {
//   const [users, setUsers] = useState([]); //list statee
//   const [userData, setuserData] = useState(defaultFormValue);
//   const [visible, setVisible] = useState(false);
//   const [showMobileWarning, setShowMobileWarning] = useState(false);

//   const showDialog = () => {
//     setVisible(true);
//   };

//   const hideDialog = () => {
//     setVisible(false);
//     setuserData(defaultFormValue);
//   };

//   useEffect(() => {
//     fetchUsers();

//     handleresize();
//     window.addEventListener("resize", handleresize);

//     return () => {
//       window.removeEventListener("resize", handleresize);
//     };
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const listdata = await fetchUsersData();
//       setUsers(listdata);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const postUsers = async () => {
//     try {
//       if (userData.id) {
//         console.log(userData.id, "iiii");
//         const edit = await updateUser(userData.id, userData);
//         console.log(edit, "eeeee");
//       } else {
//         await postUsersData(userData);
//       }
//       await fetchUsers();
//       // fetchUsers(response);
//       // setUsers((prevUsers) => [...prevUsers, response.data]);
//       hideDialog(); // Close the dialog after saving
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deleteUser = async (id) => {
//     const isConfirm = window.confirm("Are you want to Delete!!");
//     if (isConfirm) {
//       try {
//         await deleteUserData(id);
//         setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

//         // await fetchUsers();
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   console.log(userData, "user");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setuserData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const actionTemplate = (rowData) => {
//     console.log(rowData, "rowdata");
//     return (
//       <div className="actions">
//         <Button
//           variant="secondary"
//           label="Edit"
//           onClick={() => {
//             setuserData(rowData);
//             console.log(rowData, "edit rowData---");
//             showDialog();
//           }}
//         />
//         <Button
//           variant="danger"
//           label="Delete"
//           onClick={() => deleteUser(rowData.id)}
//         />
//       </div>
//     );
//   };

//   const handleresize = () => {
//     console.log("handleresize called. Window width:", window.innerWidth); // Debugging log

//     if (window.innerWidth < 500) {
//       setShowMobileWarning(true);
//       setTimeout(() => setShowMobileWarning(false), 3000); // Hide after 3 seconds
//     }
//   };

//   const dialogFooter = (
//     <div className="footer">
//       <Button label="Cancel" variant="secondary" onClick={hideDialog} />
//       <Button label="Save" variant="primary" onClick={postUsers} />
//     </div>
//   );

//   const bodyTemplate = (rowData) => {
//     return (
//       <div className="data-table-row">
//         <div className="data-table-cell">
//           <strong>Name:</strong> {rowData.name}
//         </div>
//         <div className="data-table-cell">
//           <strong>User Id:</strong> {rowData.id}
//         </div>
//         <div className="data-table-cell">
//           <strong>Email:</strong> {rowData.email}
//         </div>
//         <div className="data-table-cell">
//           <strong>Address:</strong> {rowData.address}
//         </div>
//         <div className="data-table-cell">
//           <strong>Mobile No:</strong> {rowData.mobile}
//         </div>
//       </div>
//     );
//   };

//   <DataTable
//     value={users}
//     style={{ width: "100%" }}
//     className="custom-datatable"
//   >
//     <Column body={bodyTemplate}></Column>
//     <Column body={actionTemplate}></Column>
//   </DataTable>;

//   return (
//     <div className={visible ? "blurred" : ""}>
//       {showMobileWarning && (
//         <div className="mobile-warning">Switch to desktop view</div>
//       )}
//       <div className="header">Header</div>
//       <div className="button-container">
//         <Button label="Add New" variant="primary" onClick={showDialog} />
//       </div>
//       <div className="containe">
//         <div className="table">
//           <DataTable
//             value={users}
//             style={{
//               width: "100%",
//             }}
//           >
//             <Column header="Name" field="name"></Column>
//             <Column header="User Id" field="id"></Column>
//             <Column header="Email" field="email"></Column>
//             <Column header="Address" field="address"></Column>
//             <Column header="Mobile No" field="mobile"></Column>
//             <Column body={actionTemplate}></Column>
//           </DataTable>
//           <DataTable
//             value={users}
//             style={{ width: "100%" }}
//             className="custom-datatable"
//           >
//             <Column body={bodyTemplate}></Column>
//             <Column body={actionTemplate}></Column>
//           </DataTable>
//         </div>
//       </div>

//       <DialogModule
//         visible={visible}
//         header={"Add New User"}
//         onHide={hideDialog}
//         footer={dialogFooter}
//       >
//         <div className="main">
//           <div className="input_section">
//             <div>
//               <label htmlFor="name">Name:</label>
//               <br />
//               <input
//                 type="text"
//                 className="inputs"
//                 name="name"
//                 onChange={handleChange}
//                 value={userData.name}
//               />
//             </div>
//             <div>
//               <label htmlFor="name">Email:</label>
//               <br />

//               <input
//                 type="text"
//                 className="inputs"
//                 name="email"
//                 onChange={handleChange}
//                 value={userData.email}
//               />
//             </div>
//           </div>
//           <div className="input_section">
//             <div>
//               <label htmlFor="name">Address:</label>
//               <br />

//               <input
//                 type="text"
//                 className="inputs"
//                 name="address"
//                 onChange={handleChange}
//                 value={userData.address}
//               />
//             </div>
//             <div>
//               <label htmlFor="name">Mobile:</label>
//               <br />

//               <input
//                 type="text"
//                 className="inputs"
//                 name="mobile"
//                 onChange={handleChange}
//                 value={userData.mobile}
//               />
//             </div>
//           </div>
//         </div>
//       </DialogModule>

//       {/* <ToastContainer /> */}
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./home.css";
import Button from "../../component/ButtonComponent";
import DialogModule from "../../component/Dialog";
import { ToastContainer, toast } from "react-toastify";
import {
  deleteUserData,
  fetchUsersData,
  postUsersData,
  updateUser,
} from "./Apistore/api";

const defaultFormValue = {
  id: "",
  name: "",
  email: "",
  address: "",
  mobile: "",
};

const Home = () => {
  const [users, setUsers] = useState([]); // list state
  const [userData, setuserData] = useState(defaultFormValue);
  const [visible, setVisible] = useState(false);
  const [showMobileWarning, setShowMobileWarning] = useState(false);
  const [viewMode, setViewMode] = useState("table"); // State for view mode

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
    setuserData(defaultFormValue);
  };

  useEffect(() => {
    fetchUsers();

    handleresize();
    window.addEventListener("resize", handleresize);

    return () => {
      window.removeEventListener("resize", handleresize);
    };
  }, []);

  const fetchUsers = async () => {
    try {
      const listdata = await fetchUsersData();
      setUsers(listdata);
    } catch (error) {
      console.log(error);
    }
  };

  const postUsers = async () => {
    try {
      if (userData.id) {
        const edit = await updateUser(userData.id, userData);
      } else {
        await postUsersData(userData);
      }
      await fetchUsers();
      hideDialog(); // Close the dialog after saving
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    const isConfirm = window.confirm("Are you want to Delete!!");
    if (isConfirm) {
      try {
        await deleteUserData(id);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const actionTemplate = (rowData) => {
    return (
      <div className="actions">
        <Button
          variant="secondary"
          label="Edit"
          onClick={() => {
            setuserData(rowData);
            showDialog();
          }}
        />
        <Button
          variant="danger"
          label="Delete"
          onClick={() => deleteUser(rowData.id)}
        />
      </div>
    );
  };

  const handleresize = () => {
    if (window.innerWidth < 500) {
      setViewMode("grid");
      setShowMobileWarning(true);
      setTimeout(() => setShowMobileWarning(false), 3000); // Hide after 3 seconds
    } else {
      setViewMode("table");
    }
  };

  const dialogFooter = (
    <div className="footer">
      <Button label="Cancel" variant="secondary" onClick={hideDialog} />
      <Button label="Save" variant="primary" onClick={postUsers} />
    </div>
  );

  return (
    <div className={visible ? "blurred" : ""}>
      <div className="header">Header</div>
      <div className="button-container">
        <Button label="Add New" variant="primary" onClick={showDialog} />
      </div>
      <div className="containe">
        {viewMode === "table" ? (
          <div className="table">
            <DataTable
              value={users}
              style={{
                width: "100%",
              }}
            >
              <Column header="Name" field="name"></Column>
              <Column header="User Id" field="id"></Column>
              <Column header="Email" field="email"></Column>
              <Column header="Address" field="address"></Column>
              <Column header="Mobile No" field="mobile"></Column>
              <Column body={actionTemplate}></Column>
            </DataTable>
          </div>
        ) : (
          <div className="grid-view">
            {users.map((user) => (
              <div key={user.id} className="grid-item">
                <h3>{user.name}</h3>
                <div>
                  <p>
                    <b>Email:</b> {user.email}
                  </p>
                  <p>
                    <b>Address:</b> {user.address}
                  </p>
                  <p>
                    <b>Mobile:</b> {user.mobile}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="secondary"
                    label="Edit"
                    onClick={() => {
                      setuserData(user);
                      showDialog();
                    }}
                  />
                  <Button
                    variant="danger"
                    label="Delete"
                    onClick={() => deleteUser(user.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <DialogModule
        className="dialog"
        visible={visible}
        header={"Add New User"}
        onHide={hideDialog}
        footer={dialogFooter}
      >
        <div className="main">
          <div className="input_section">
            <div>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                className="inputs"
                name="name"
                onChange={handleChange}
                value={userData.name}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="text"
                className="inputs"
                name="email"
                onChange={handleChange}
                value={userData.email}
              />
            </div>
          </div>
          <div className="input_section">
            <div>
              <label htmlFor="address">Address:</label>
              <br />
              <input
                type="text"
                className="inputs"
                name="address"
                onChange={handleChange}
                value={userData.address}
              />
            </div>
            <div>
              <label htmlFor="mobile">Mobile:</label>
              <br />
              <input
                type="text"
                className="inputs"
                name="mobile"
                onChange={handleChange}
                value={userData.mobile}
              />
            </div>
          </div>
        </div>
      </DialogModule>

      {/* <ToastContainer /> */}
    </div>
  );
};

export default Home;
