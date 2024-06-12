// import React from "react";
// import { Box, Typography, Divider } from "@mui/material";

// import { Container, styled } from "@mui/system";
// const Root = styled(Box)(({ theme }) => ({
//   "& .mainAboutSection": {
//     padding: "30px 0px",
//     "& h2": {
//       fontFamily: "Inter",
//       fontSize: "45px",
//       fontWeight: "600",
//       lineHeight: "58.09px",
//     },
//     "& p": {
//       fontSize: "18px",
//       color: "#000",
//       fontWeight: "500",
//     },
//   },
// }));
// const Aboutus = () => {
//   return (
//     <>
//       <Root>
//         <Container>
//           <Box className="mainAboutSection">
//             <Typography variant="h2">About Us</Typography>

//             <Typography variant="body1">
//               Contrary to popular belief, Lorem Ipsum is not simply random text.
//               It has roots in a piece of classical Latin literature from 45 BC,
//               making it over 2000 years old. Richard McClintock, a Latin
//               professor at Hampden-Sydney College in Virginia, looked up one of
//               the more obscure Latin words, consectetur, from a Lorem Ipsum
//               passage, and going through the cites of the word in classical
//               literature, discovered the undoubtable source. Lorem Ipsum comes
//               from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
//               Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
//               BC. This book is a treatise on the theory of ethics, very popular
//               during the Renaissance. The first line of Lorem Ipsum, "Lorem
//               ipsum dolor sit amet..", comes from a line in section 1.10.32. The
//               standard chunk of Lorem Ipsum used since the 1500s is reproduced
//               below for those interested. Sections 1.10.32 and 1.10.33 from "de
//               Finibus Bonorum et Malorum" by Cicero are also reproduced in their
//               exact original form, accompanied by English versions from the 1914
//               translation by H. Rackham.
//             </Typography>

//             <Typography variant="body1">
//               Contrary to popular belief, Lorem Ipsum is not simply random text.
//               It has roots in a piece of classical Latin literature from 45 BC,
//               making it over 2000 years old. Richard McClintock, a Latin
//               professor at Hampden-Sydney College in Virginia, looked up one of
//               the more obscure Latin words, consectetur, from a Lorem Ipsum
//               passage, and going through the cites of the word in classical
//               literature, discovered the undoubtable source. Lorem Ipsum comes
//               from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
//               Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
//               BC. This book is a treatise on the theory of ethics, very popular
//               during the Renaissance. The first line of Lorem Ipsum, "Lorem
//               ipsum dolor sit amet..", comes from a line in section 1.10.32. The
//               standard chunk of Lorem Ipsum used since the 1500s is reproduced
//               below for those interested. Sections 1.10.32 and 1.10.33 from "de
//               Finibus Bonorum et Malorum" by Cicero are also reproduced in their
//               exact original form, accompanied by English versions from the 1914
//               translation by H. Rackham.
//             </Typography>
//             <Typography variant="body1">
//               Contrary to popular belief, Lorem Ipsum is not simply random text.
//               It has roots in a piece of classical Latin literature from 45 BC,
//               making it over 2000 years old. Richard McClintock, a Latin
//               professor at Hampden-Sydney College in Virginia, looked up one of
//               the more obscure Latin words, consectetur, from a Lorem Ipsum
//               passage, and going through the cites of the word in classical
//               literature, discovered the undoubtable source. Lorem Ipsum comes
//               from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
//               Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
//               BC. This book is a treatise on the theory of ethics, very popular
//               during the Renaissance. The first line of Lorem Ipsum, "Lorem
//               ipsum dolor sit amet..", comes from a line in section 1.10.32. The
//               standard chunk of Lorem Ipsum used since the 1500s is reproduced
//               below for those interested. Sections 1.10.32 and 1.10.33 from "de
//               Finibus Bonorum et Malorum" by Cicero are also reproduced in their
//               exact original form, accompanied by English versions from the 1914
//               translation by H. Rackham.
//             </Typography>
//           </Box>
//         </Container>
//       </Root>
//     </>
//   );
// };

// export default Aboutus;
import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { Container, styled } from "@mui/system";
import { PostApiFunction } from "../../utils";
const Root = styled(Box)(({ theme }) => ({
  "& .mainAboutSection": {
    padding: "30px 0px",
  },
}));
const Aboutus = () => {
  const [_aboutUs, setAboutUS] = useState("");
  const ListPrivacytUsContent = async (values) => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllStaticContent,
        data: {
          search: "About US",
        },
      });
      if (res) {
        console.log("dnkknsdknfn--->", res?.result?.docs);
        setAboutUS(res?.result?.docs[0]);
      }
    } catch (error) {
      console.log("erorr", error);
    }
  };
  useEffect(() => {
    ListPrivacytUsContent();
  }, []);
  return (
    <>
      <Root>
        <Container>
          <Box className="mainAboutSection">
            <div
              dangerouslySetInnerHTML={{ __html: _aboutUs?.description }}
            ></div>
          </Box>
        </Container>
      </Root>
    </>
  );
};

export default Aboutus;
