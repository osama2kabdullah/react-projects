// import axios from "axios";
// import { useEffect, useState } from "react";

// const useLoadSelectedData = (email) => {
//   const [datas, setDatas] = useState([]);
//   useEffect(() => {
//     const loadUserSelectedData = async () => {
//       const { data } = await axios.get(
//         "https://sleepy-brushlands-75204.herokuapp.com/selectedtopics?email=" +
//           email,
//         {
//           headers: {
//             authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         }
//       );
//       return data;
//     };

//     setDatas(loadUserSelectedData());
//   }, [email]);
//   return [datas, setDatas];
// };

// export default useLoadSelectedData;
