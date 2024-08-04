import { useEffect, useState } from "react";
import Header from "../components/dashboardHeader";
import Sidebar from "../components/sidenav";
import Table from "../components/table";
import axios from "axios";
import Cookies from "js-cookie";
import PaginatedTable from "../components/PaginatedTable";
import UpdateBook from "../components/updateBook";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { BiSolidTrash } from "react-icons/bi";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";


export default function ViewBook() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const headers = [
    "Id",
    "Name",
    "Author",
    "Publisher",
    "Publication Year",
    "Subject"
  ];

  const getData = async () => {
    const api = await fetch("http://localhost:8000/api/v1/Books/getAll", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Cookies.get("accessToken"),
      },
    });
    let data = await api.json();
    let Books = await data.data;
    setData(Books);
    console.log(Books);
  };

  useEffect(() => {
    getData();
  }, []);

  const updateRecord = (Book) => {
    return <UpdateBook Book={Book} />;
  };
  const deleteRecord = (id) => {
    const sendRequest = async () => {
      // setLoading(true);
      const api = await axios
        .delete(`http://localhost:8000/api/v1/Books/deleteBook/${id}`,{headers: {
          Authorization: "Bearer " + Cookies.get("accessToken"),
        },})
        .then(({ data }) => {
          notification.success({ message: data.message });
          navigate("/viewBooks");
        })
        .catch((err) => {
          console.log(err)
          notification.error({
            message: "Error Occurred!",
          });
        });
    };

    return (
      <Tooltip content="Delete Book">
        <IconButton variant="text">
          <BiSolidTrash
            className="h-4 w-4 text-red-400"
            onClick={sendRequest}
          />
        </IconButton>
      </Tooltip>
    );
  };

  return (
    <div className="flex h-screen w-full bg-blue p-2 font-quicksand">
      <div className="w-[35%]">
        <Sidebar />
      </div>
      <div className="w-[80%] flex-1 p-[0.5%]">
        <PaginatedTable
          data={data}
          itemsPerPage={5}
          headers={headers}
          UpdateRecord={updateRecord}
          deleteRecord={deleteRecord}
        />
      </div>
    </div>
  );
}
