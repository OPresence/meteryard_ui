import axios from "axios";
export const cityName = [
  { name: "Delhi NCR" },
  { name: "Bengaluru" },
  { name: "Kolkata" },
  { name: "Hyderabad" },
  { name: "Bhubaneswar" },
  { name: "Varanasi" },
  { name: "Lucknow" },
  { name: "Panchkula" },
  { name: "Srinagar" },
  { name: "Udhampur" },
  { name: "Bhatinda" },
  { name: "Guwahati" },
];

export const cityObject = [
  //   {
  "Bengaluru",
  "Kolkata",
  "Hyderabad",
  "Bhubaneswar",
  "Varanasi",
  "Lucknow",
  "Panchkula",
];

// export const getAPIdata = async ({ endPoint }) => {
//   try {
//     let res;
//     res = await axios({
//       url: endPoint,
//       method: "GET",
//     })
//       .then((res) => {
//         if (res?.status === 200) {
//           return decryptData(res?.data);
//         }
//         if (res?.data?.status === 400) {
//           return false;
//         }
//         if (res?.data?.status === 401) {
//           return false;
//         }
//         if (res?.data?.status === 205) {
//           return false;
//         }
//       })
//       .catch((error) => {
//         return false;
//         if (res?.data?.status === 400) {
//           return false;
//         }
//         if (res?.data?.status === 401) {
//           return false;
//         }
//         if (res?.data?.status === 205) {
//           return false;
//         }
//       });
//     return res;
//   } catch (error) {
//     return false;
//   }
// };
// export const putAPIdata = async ({ params, data, endPoint, headers }) => {
//   try {
//     let res;

//     res = await axios({
//       url: endPoint,
//       method: "PUT",
//       params: params,
//       data: data,
//       headers: headers,
//     })
//       .then((res) => {
//         if (res?.data?.status === 200) {
//           return res?.data?.data;
//         }
//         if (res?.data?.status === 400) {
//           return false;
//         }
//         if (res?.data?.status === 401) {
//           return false;
//         }
//       })
//       .catch((error) => {
//         return false;
//       });
//     return res;
//   } catch (error) {
//     return false;
//   }
// };
export const PostApiFunction = async ({ endPoint, data }) => {
  try {
    let res;
    res = await axios({
      url: endPoint,
      method: "POST",
      data: data,
    })
      .then((res) => {
        console.log("bfhdhfres--->", res);
        if (res?.status === 200) {
          return res?.data;
        }
        if (res?.data?.responseCode === 400) {
          return false;
        }
        if (res?.data?.responseCode === 401) {
          return false;
        }
        if (res?.data?.responseCode === 205) {
          return false;
        }
      })
      .catch((error) => {
        return false;
        if (res?.data?.responseCode === 400) {
          return false;
        }
        if (res?.data?.responseCode === 401) {
          return false;
        }
        if (res?.data?.responseCode === 205) {
          return false;
        }
      });
    return res;
  } catch (error) {
    return false;
  }
};
