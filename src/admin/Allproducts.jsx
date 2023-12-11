import React, { useEffect, useState } from "react";
import { onValue, ref, getDatabase } from "firebase/database";
import ReactPaginate from "react-paginate";

const Allproducts = () => {
  const [data, setdata] = useState({});
  const [filtered, setfiltered] = useState({});
  //for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(Object.keys(data).length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = Object.values(data).slice(startIndex, endIndex);

  //for pagination
  const db = getDatabase();
  async function getallproducts() {
    const allProduct = ref(db, "products/");
    onValue(allProduct, (snapshot) => {
      const data = snapshot.val();
      setdata(data);
    });
  }
  useEffect(() => {
    const fetchData = async () => {
      await getallproducts();
    };
    fetchData();
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* <input
        type="text"
        placeholder="search"
        className="border-2 border-black m-1 rounded-lg"
      />
      <button className="bg-red-500 p-1 rounded">search</button> */}
      <table className="w-full  px-3 ms-0  text-white">
        <thead>
          <tr className="bg-blue-900 text-center">
            <td>Id</td>
            <td>Title</td>
            <td>category</td>
            <td>price</td>
            <td>stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="overflow-y-scroll">
          {Object.keys(data).length > 0 ? (
            currentPageData.map((item) => {
              return <Tr item={item} key={item.id} id={item.id} />;
            })
          ) : (
            <tr>
              <td colSpan="5">No products found.</td>
            </tr>
          )}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Previous"}
        previousClassName=" bg-white rounded-md p-1"
        nextLabel={"Next"}
        nextClassName=" bg-white rounded-md p-1"

        pageCount={pageCount}
        pageLinkClassName="bg-white m-1 rounded-lg p-1 px-2"
        onPageChange={({ selected }) => setCurrentPage(selected)}
        containerClassName={"pagination"}
        activeClassName={"active"}
        className="flex justify-center bg-blue-700 p-2"
      />
    </div>
  );
};

export default Allproducts;

function Tr({ item, id }) {
  return (
    <tr className="border-2 text-black text-center" key={id}>
      <td>{id}</td>
      <td>{item.title}</td>
      <td>{item.category}</td>
      <td>{item.price}</td>
      <td>{item.stock}</td>
      <td className="bg-red-500 rounded-md cursor-pointer flex justify-center">
        Delete
      </td>
    </tr>
  );
}
