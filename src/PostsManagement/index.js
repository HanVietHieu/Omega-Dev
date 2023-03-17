import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { apiGetDataPost } from "../Api/ApiPostManagement";
import { API_SUCCESS, PER_PAGE } from "../Constants/Type";
import PopupDetail from "./PopupDetail";
import Pagination from "./Pagination";
import Filter from "./Filter";
import Form from "./Form";

export default function PostsManagement() {
  const [dataManagements, setDataManagements] = useState([]);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [dataDetailPost, setDataDetailPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPerPage, setTotalPerPage] = useState(PER_PAGE);
  const [dataFilterResul, setDataFilterResult] = useState(null);

  useEffect(() => {
    const params = {
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
      responseType: "stream",
    };
    apiGetDataPost(params)
      .then((res) => {
        if (res.status === API_SUCCESS)
          return setDataManagements(JSON.parse(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleShowDetailPost = (data) => {
    setIsShowPopup(true);
    setDataDetailPost(data);
  };

  const onChangeItem = (data) => {
    setTotalPerPage(data.value);
    setCurrentPage(1);
  };

  const onSubmit = (data) => {
    const dataFilter = dataManagements.filter((item, index) => {
      if (
        item.userId === +data.valueFilter ||
        item.title.includes(data.valueFilter.trim())
      )
        return item;
    });
    setDataFilterResult(dataFilter);
    setCurrentPage(1);
  };

  let result = [];
  const data = dataFilterResul || dataManagements;

  if (data.length !== 0 && data) {
    for (let i = 0; i < data.length; i += totalPerPage) {
      const chunk = data.slice(i, i + totalPerPage);
      result = [...result, chunk];
    }
  }

  return (
    <div>
      <div className="d-flex font-size-18">
        Show
        <span className="m-3 mt-0">
          <Filter onChangeItem={onChangeItem} />
        </span>
        result per page
        <span className="ps-3">
          <Form onSubmit={onSubmit} />
        </span>
      </div>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Id</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {result[currentPage - 1] &&
            result[currentPage - 1].map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>
                  <i
                    onClick={() => handleShowDetailPost(item)}
                    className="fa fa-pencil-square-o"
                    aria-hidden="true"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {result.length > 1 && (
        <Pagination
          totalBooks={data.length}
          totalPerPage={totalPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {dataDetailPost && (
        <PopupDetail
          show={isShowPopup}
          handleClose={() => setIsShowPopup(false)}
          dataDetailPost={dataDetailPost}
        />
      )}
    </div>
  );
}
