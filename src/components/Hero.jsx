import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Hero() {
  const [heroProduct, setheroproduct] = useState(null);
  useEffect(() => {
    getHero();
  }, []);
  async function getHero() {
    const data = await fetch(
      "https://dummyjson.com/products/category/smartphones"
    );
    const json = await data.json();
    setheroproduct(json.products);
  }
  if (!heroProduct) return <div>loading...</div>;
  <div className=" md:h-[50vh] sm:h-fit h-[90vh] bg-black w-full flex flex-wrap  justify-center items-center">
    <div className="text-white p-3 flex flex-wrap flex-col justify-center items-center">
      <span className="text-6xl">{heroProduct[0].title}</span>
      <span className="text-xl">{heroProduct[0].description}</span>
      <span className="text-md font-mono">@Just ${heroProduct[0].price}</span>
      <Link to="/shop">
        <button className="bg-red-600 m-3 p-3 rounded-lg hover:bg-red-100 hover:text-black text-white">
          Know More
        </button>
      </Link>
    </div>
    <div>
      <img src={heroProduct[0].images[0]} />
    </div>
  </div>;
}
