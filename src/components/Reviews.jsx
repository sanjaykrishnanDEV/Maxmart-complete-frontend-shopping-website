import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../utils/firebase";
const Reviews = ({ id }) => {
  console.log(id);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const allreviews = ref(db, "products/" + id + "/reviews/");
    onValue(allreviews, (snapshot) => {
      const data = snapshot.val();
      setReviews(data || []);
    });
  }, []);
  const arr = [...Object.values(reviews)];
  console.log(arr);
  if(!arr)return <div>loading...</div>
  return (
    <div>
      {arr.map((item) => {
        return (
          <div key={item} className="border bg-slate-200 m-1">
            <div className=" font-semibold text-lg">{item.userName}</div>
            <div>{item.userReview}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
