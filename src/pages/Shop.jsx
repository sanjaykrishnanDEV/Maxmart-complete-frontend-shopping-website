import { getDatabase, ref, get, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import ProductCard from "../components/UI/ProductCard";
const Shop = () => {
  const db = getDatabase();
  const [allproducts, setallproducts] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allproducts);
  const [sortOrder, setSortOrder] = useState("ascending");

  async function getallproducts() {
    const allProductRef = ref(db, "products/");
    const snapshot = await get(allProductRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const products = Object.values(data);
      setallproducts(products);
      setFilteredProducts(products);
    } else {
      console.log("No data available");
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      await getallproducts();
      setFilteredProducts(() => Object.values(allproducts));
      setFilteredProducts(() => Object.values(allproducts));
    };
    fetchData();
  }, []);

  //filtering
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "all") {
      const filteredData = allproducts;
      setFilteredProducts(() => Object.values(filteredData));
    } else if (filterValue === "laptops") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "fragrances") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "skincare") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "groceries") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "home-decoration") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "furniture") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "tops") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "womens-dresses") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "womens-shoes") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "mens-shirts") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "mens-shoes") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "mens-watches") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "womens-watches") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "womens-bags") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "womens-jewellery") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "sunglasses") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "automotive") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "motorcycle") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    } else if (filterValue === "lighting") {
      const filteredData = allproducts.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredData);
    }
  };
  //filtering

  let arr = [];
  if (allproducts) {
    arr = Object.values(allproducts);
  }
  //sorting
  const handleSort = (e) => {
    const selectedSortOrder = e.target.value;
    setSortOrder(selectedSortOrder);

    const sortedData = [...filteredProducts].sort((a, b) => {
      if (selectedSortOrder === "ascending") {
        return a.title?.localeCompare(b.title);
      } else {
        return b.title?.localeCompare(a.title);
      }
    });

    setFilteredProducts(sortedData);
  };
  //sorting
  
  //search
  function handleSearch() {
    const filteredProduct = allproducts.filter((item) => {
      return item.title?.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProducts(filteredProduct);
  }

  //search
  console.log(filteredProducts);
  if (!allproducts) return <div>loading</div>;
  return (
    <div className="h-screen">
      <div>
        <div className="p-2 w-full flex justify-around">
          <select
            onChange={handleFilter}
            className="border p-1"
            defaultValue="all"
          >
            <option value="all">Filter By category</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Decoration</option>
            <option value="furniture">Furniture</option>
            <option value="tops">Tops</option>
            <option value="womens-dresses">Womens-dresses</option>
            <option value="womens-shoes">womens-shoes</option>
            <option value="mens-shirts">Mens-shirts</option>
            <option value="mens-shoes">Mens-shoes</option>
            <option value="mens-watches">Mens-watches</option>
            <option value="womens-watches">Womens-watches</option>
            <option value="womens-bags">Womens-bags</option>
            <option value="womens-jewellery">womens-jewellery</option>
            <option value="sunglasses">sunglasses</option>
            <option value="automotive">Automotive</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="lighting">Lighting</option>
          </select>
          <div>
            <input
              placeholder="search"
              className="border p-1"
              onChange={(e) => setsearchTerm(e.target.value)}
            />
            <button
              className="bg-red-500 p-1 text-white"
              onClick={handleSearch}
            >
              search
            </button>
          </div>
          <select onChange={handleSort} className="border p-1">
            <option>Sort By</option>
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
          </select>
        </div>
      </div>
      <div className="bg-black h-[90vh] flex flex-wrap justify-center overflow-y-scroll">
        {filteredProducts.length === 0
          ? allproducts.map((item) => {
              return <ProductCard info={item} key={item.id} />;
            })
          : ""}

        {filteredProducts.map((item) => {
          return <ProductCard info={item} key={item.id} />;
        })}

      </div>
    </div>
  );
};

export default Shop;
