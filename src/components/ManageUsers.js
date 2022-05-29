import {
  ArrowDownward,
  ArrowUpwardTwoTone,
  ExpandMoreOutlined,
} from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UpdateUser from "./UpdateUser";

const ManageUsers = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);

  const loadDataFromBackend = () => {
    // to send request on backend
    // 1. url
    fetch("http://localhost:5000/user/getall").then((res) => {
      // first check the status code
      if (res.status === 200) {
        // then extract the json data

        res.json().then((data) => {
          console.log(data);
          setUserList(data);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    loadDataFromBackend();
  }, []);

  const deleteUser = (id) => {
    console.log(id);

    fetch("http://localhost:5000/user/delete/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        toast("Item Deleted!!", {
          icon: "💀",
        });
        loadDataFromBackend();
      }
    });
  };

  const updateUser = (userdata) => {
    // change the value of showUpdateForm to true
    setShowUpdateForm(true);

    // update the userFormData
    setUpdateFormData(userdata);
  };

  const displayData = () => {
    if (!loading) {
      return userList.map((userdata) => (
        <Accordion key={userdata._id} i>
          <AccordionSummary expandIcon={<ArrowDownward />}>
            <h4>{userdata.email}</h4>
          </AccordionSummary>
          <AccordionDetails>
            <h3>{userdata.username}</h3>
            <h3>{userdata.password}</h3>
            <h3>{userdata._id}</h3>
            <button
              className="btn btn-danger"
              onClick={(e) => deleteUser(userdata._id)}
            >
              <i class="fas fa-trash"></i> Delete
            </button>
            &nbsp;
            <button
              className="btn btn-primary"
              onClick={(e) => updateUser(userdata)}
            >
              <i class="fas fa-pen"></i> Edit
            </button>
          </AccordionDetails>
        </Accordion>
      ));
    } else {
      return <h1>Still Loading...</h1>;
    }
  };

  return (
    <div>
      <h1>ManageUsers</h1>
      <div className="container">{displayData()}</div>
      {showUpdateForm ? (
        <div>
          <button
            className="btn btn-danger float-end"
            onClick={(e) => setShowUpdateForm(false)}
          >
            Cancel
          </button>
          <UpdateUser
            userForm={updateFormData}
            loadDataFromBackend={loadDataFromBackend}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ManageUsers;
