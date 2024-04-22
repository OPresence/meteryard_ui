// import * as React from "react";
// import PropTypes from "prop-types";
// // import { Dropdown } from "@mui/base/Dropdown";
// import { Menu } from "@mui/base/Menu";
// import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
// import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
// import { styled } from "@mui/system";
// import { CssTransition } from "@mui/base/Transitions";
// import { PopupContext } from "@mui/base/Unstable_Popup";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import Apiconfigs from "@/ApiConfig/ApiConfig";
// import { PostApiFunction, getAPIdata } from "@/utils";
// import { useRouter } from "next/router";

// export default function ProfileMenu({ setAccessToken }) {
//   const [_isloading, setIsLoading] = React.useState();
//   const router = useRouter();

//   const LogOut = async () => {
//     try {
//       setIsLoading(true);
//       const res = await PostApiFunction({
//         endPoint: Apiconfigs?.logOut,
//         data: {
//           deviceToken: sessionStorage.getItem("token"),
//         },
//       });
//       if (res?.responseCode == 200) {
//         setIsLoading(false);
//         sessionStorage.removeItem("token");
//         router.push("/");
//         setAccessToken(null);
//       }
//     } catch (error) {
//       setIsLoading(false);

//       console.log("eror", error);
//     }
//   };

//   return (
//     // <Dropdown>
//       <MenuButton>
//         <PermIdentityIcon />
//       </MenuButton>
//       <Menu slots={{ listbox: AnimatedListbox }} style={{ zIndex: "9999" }}>
//         <MenuItem onClick={() => router.push("/seller-profile")}>
//           Profile
//         </MenuItem>

//         <MenuItem onClick={LogOut}>Log out</MenuItem>
//       </Menu>
//     // </Dropdown>
//   );
// }

// const blue = "#A9D910 0% 0% no-repeat padding-box";
// const grey = {
//   50: "#F3F6F9",
//   100: "#E5EAF2",
//   200: "#DAE2ED",
//   300: "#C7D0DD",
//   400: "#B0B8C4",
//   500: "#9DA8B7",
//   600: "#6B7A90",
//   700: "#434D5B",
//   800: "#303740",
//   900: "#1C2025",
// };

// const Listbox = styled("ul")(
//   ({ theme }) => `
//   padding: 0px;
//   margin: 12px 0;
//   min-width: 200px;
//   border-radius: 12px;
//   overflow: auto;
//   outline: 0px;
//   background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
//   border: none;
//   color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   z-index: 1;
//   .closed & {
//     opacity: 0;
//     transform: scale(0.95, 0.8);
//     transition: opacity 200ms ease-in, transform 200ms ease-in;
//   }
  
//   .open & {
//     opacity: 1;
//     transform: scale(1, 1);
//     transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
//   }

//   .placement-top & {
//     transform-origin: bottom;
//   }

//   .placement-bottom & {
//     transform-origin: top;
//   }
//   `
// );

// const AnimatedListbox = React.forwardRef(function AnimatedListbox(props, ref) {
//   const { ownerState, ...other } = props;
//   const popupContext = React.useContext(PopupContext);

//   if (popupContext == null) {
//     throw new Error(
//       "The `AnimatedListbox` component cannot be rendered outside a `Popup` component"
//     );
//   }

//   const verticalPlacement = popupContext.placement.split("-")[0];

//   return (
//     <CssTransition
//       className={`placement-${verticalPlacement}`}
//       enterClassName="open"
//       exitClassName="closed"
//     >
//       <Listbox {...other} ref={ref} />
//     </CssTransition>
//   );
// });

// AnimatedListbox.propTypes = {
//   ownerState: PropTypes.object.isRequired,
// };

// const MenuItem = styled(BaseMenuItem)(
//   ({ theme }) => `
//   list-style: none;
//   padding: 8px;
//   border-radius: 8px;
//   cursor: pointer;
//   user-select: none;

//   &:last-of-type {
//     border-bottom: none;
//   }

//   &:focus {
//     outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
//     background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   }

//   &.${menuItemClasses.disabled} {
//     color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
//   }
//   `
// );

// const MenuButton = styled(BaseMenuButton)(
//   ({ theme }) => `

//   cursor: pointer;
//   padding: 0px;
//   border: none;

//   color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
//   box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

//   &:hover {
//     background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
//     border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
//   }

//   &:active {
//     background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
//   }

//   &:focus-visible {
//     box-shadow: 0 0 0 4px ${
//       theme.palette.mode === "dark" ? blue[300] : blue[200]
//     };
//     outline: none;
//   }
//   `
// );
