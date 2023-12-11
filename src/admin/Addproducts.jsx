import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  update,
  child,
} from "firebase/database";

const Addproducts = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [category, setcategory] = useState("");
  const [id, setId] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);

  const db = getDatabase();

  useEffect(() => {
    // Read data for id setting
    const starCountRef = ref(db, "products/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setId(Number(Object.values(data)?.length) + 1);
    });
  }, []);

  function handleForm(event) {
    event.preventDefault();

    const data = {
      id,
      title,
      desc,
      category,
      discountPercentage,
      price,
      stock,
      images,
    };
    set(ref(db, "products/" + id), {
      id,
      title,
      desc,
      category,
      discountPercentage,
      price,
      stock,
      images,
    });
    toast.success("product added");
  }

  return (
    <div>
      <Toaster />
      <div className="h-[100vh] flex px-10 w-[60vw]">
        <form onSubmit={handleForm} className="flex flex-col">
          <label className="text-center text-2xl">Add product</label>
          <div className="flex flex-col w-[60vw] items-stretch">
            <input
              type="number"
              className="border-2 p-2 m-1"
              placeholder="product Id"
              disabled
              value={id + 1}
            />
            <label>Title</label>
            <input
              onChange={(e) => settitle(e.target.value)}
              type="text"
              className="border-2 p-2 m-1"
              placeholder="enter title"
              required
            />
            <label>Description</label>
            <input
              value={desc}
              onChange={(e) => setdesc(e.target.value)}
              type="text"
              className="border-2 p-2 m-1"
              placeholder="enter description"
              required
            />

            <select
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              className="border p-2"
              required
            >
              <option>category</option>
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
            <label>Discount%</label>
            <input
              type="number"
              className="border-2 p-2 m-1"
              placeholder="Discount Percentage"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
              required
            />
            <label>Price</label>
            <input
              type="number"
              className="border-2 p-2 m-1"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <label>Stock</label>

            <input
              type="number"
              className="border-2 p-2 m-1"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
            <label>Image URL</label>

            <input
              type="text"
              className="border-2 p-2 m-1"
              placeholder="Stock"
              value={images}
              onChange={(e) => setImages(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-red-500 rounded-md p-1 text-lime-50"
            >
              Add product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addproducts;
