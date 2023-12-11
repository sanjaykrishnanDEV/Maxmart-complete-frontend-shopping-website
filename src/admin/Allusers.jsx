import React, { useEffect, useState } from "react";
import { ref, getDatabase, onValue } from "firebase/database";
const Allusers = () => {
  const [users, setusers] = useState({});
  const db = getDatabase();
  async function getUserList() {
    const data = await ref(db, "users/");
    onValue(data, (snapshot) => {
      const users = snapshot.val();
      setusers(users);
    });
  }
  useEffect(() => {
    getUserList();
  }, []);
  return (
    <div className="flex justify-center w-[80vh]">
      <table className="w-full  px-3 ms-5  text-white">
        <thead>
          <tr className="bg-blue-900 text-center">
            <td>S.no</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody className="text-black">
          {Object.values(users).map((item,index) => {
            return <tr key={index} className="text-center border-2">
                <td>{index+1}</td>
                <td>
                {item.email}
                </td>
                </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Allusers;
