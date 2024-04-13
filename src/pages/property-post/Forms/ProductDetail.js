// import React, { useState, useEffect } from "react";
// import { Grid, Typography, Box } from "@material-ui/core";
// import { SelectField, InputField } from "../FormFields";
// import Apiconfigs from "src/ApiConfig/ApiConfig";
// import { baseurlWipro } from "src/ApiConfig/ApiConfig";
// import { PostApiFunctionWipro } from "src/utils";

// export default function PaymentForm(props) {
//   const states = [
//     {
//       value: undefined,
//       label: "None",
//     },
//     {
//       value: "11",
//       label: "Florida",
//     },
//     {
//       value: "22",
//       label: "Michigan",
//     },
//     {
//       value: "33",
//       label: "Texas",
//     },
//   ];
//   const {
//     formField: {
//       product_State,
//       product_Year,
//       product_Season,
//       Product_Scheme,
//       product_District,
//       product_Level_4,
//       product_Level_5,
//       product_Level_6,
//       product_Level_7,
//       Note_Number,
//       Crop_Name,
//     },
//   } = props;

//   const [_statelist, setStateList] = useState([]);
//   const [_destrictlist, setDestrictList] = useState([]);
//   const [_yearlist, setYearList] = useState([]);
//   const [_seasonlist, setSeasonList] = useState([]);
//   const [_productscheme, setProductScheme] = useState([]);
//   const [_level_4_list, set_Label_4_List] = useState([]);
//   const [_level_5_list, set_Label_5_List] = useState([]);
//   const [_level_6_list, set_Label_6_List] = useState([]);
//   const [_level_7_list, set_Label_7_List] = useState([]);
//   const [_getCrop_list, setGetCropNameList] = useState([]);
//   // Change the dropdown value
//   const [_get_state_dropdown, set_State_GetDropdown] = useState("");
//   const [_get_destrict_dropdown, set_Destrict_Getdropdown] = useState("");
//   const [_get_year_dropdown, set_Year_Getdropdown] = useState("");
//   const [_get_season_dropdown, set_Season_getdropdown] = useState("");
//   const [_get_productscheme, set_ProductScheme_getdropdown] = useState("");
//   // select label dropdown
//   const [_get_label_4, setLabel_4_Getdropdown] = useState("");
//   const [_get_label_5, setLabel_5_Getdropdown] = useState("");
//   const [_get_label_6, setLabel_6_Getdropdown] = useState("");
//   const [_get_label_7, setLabel_7_Getdropdown] = useState("");
//   const [_get_crop_name, set_CropName_dropdown] = useState("");
//   // State API Function
//   const Product_Function_State = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: Apiconfigs.Product_state_List,
//       });
//       if (res) {
//         setStateList(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   // Season API Function
//   const Product_Function_Year = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: Apiconfigs.Year_List,
//         data: {
//           stateId: _get_state_dropdown,
//         },
//       });
//       if (res) {
//         setYearList(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   // Product Scheme API Function
//   const Product_Function_Season = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: Apiconfigs.Season_List,

//         data: {
//           stateId: _get_state_dropdown,
//           yearId: _get_year_dropdown,
//         },
//       });
//       if (res) {
//         setSeasonList(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   // District API Function
//   const Product_Function_ProductScheme = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: Apiconfigs.Product_scheme_List,
//         data: {
//           stateId: _get_state_dropdown,
//           yearId: _get_year_dropdown,
//           seasonId: _get_season_dropdown,
//         },
//       });
//       if (res) {
//         setProductScheme(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   // Destrict API
//   const Product_Function_Destrict = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: `https://mob.aicofindia.com/MAWrapper/cpmaNewInsuranceController/cpmaGrsServiceCall?serviceName=%2Fgrv%2FgetNtyDisrtictByStatePSY%3FstateId%3D${_get_state_dropdown}&methodType=POST`,
//         data: {},
//       });
//       if (res) {
//         setDestrictList(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   // Level 4 API Function
//   const Product_Function_Level_4 = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: `https://mob.aicofindia.com/MAWrapper/cpmaNewInsuranceController/cpmaGrsServiceCall?serviceName=/pc/loadlcn/[${_get_destrict_dropdown}]/4&methodType=POST`,
//         data: {},
//       });
//       if (res) {
//         set_Label_4_List(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   // Level 5 API Function
//   const Product_Function_Level_5 = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: `https://mob.aicofindia.com/MAWrapper/cpmaNewInsuranceController/cpmaGrsServiceCall?serviceName=/pc/loadlcn5/[${_get_label_4}]/5&methodType=POST`,
//         data: {},
//       });
//       if (res) {
//         set_Label_5_List(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   // Level 6 API Function
//   const Product_Function_Level_6 = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: `https://mob.aicofindia.com/MAWrapper/cpmaNewInsuranceController/cpmaGrsServiceCall?serviceName=/pc/loadlcn6/[${_get_label_5}]/6&methodType=POST`,
//         data: {},
//       });
//       if (res) {
//         set_Label_6_List(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   // Level 7 API Function
//   const Product_Function_Level_7 = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: `https://mob.aicofindia.com/MAWrapper/cpmaNewInsuranceController/cpmaGrsServiceCall?serviceName=/pc/loadlcn7/[${_get_label_6}]/7&methodType=POST`,
//         data: {},
//       });
//       if (res) {
//         set_Label_7_List(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   // Crop Name Function

//   const Product_Function_Crop_Name = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: `https://mob.aicofindia.com/MAWrapper/cpmaNewInsuranceController/cpmaGrsServiceCall?serviceName=%2Fgrv%2FfetchCropDetails%3Fproduct%3D${_get_productscheme}%26season%3D${_get_season_dropdown}%26year%3D${_get_year_dropdown}%26state%3D${_get_state_dropdown}"&methodType=GET`,
//         data: {},
//       });
//       if (res) {
//         setGetCropNameList(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };
//   useEffect(() => {
//     if (_get_state_dropdown) {
//       Product_Function_Destrict();
//       Product_Function_Year();
//     }
//   }, [_get_state_dropdown]);

//   useEffect(() => {
//     if (_get_destrict_dropdown) {
//       Product_Function_Level_4();
//     }
//   }, [_get_destrict_dropdown]);
//   useEffect(() => {
//     if (_get_label_4) {
//       Product_Function_Level_5();
//     }
//     // }, []);
//   }, [_get_label_4]);

//   useEffect(() => {
//     if (_get_label_5) {
//       Product_Function_Level_6();
//     }
//   }, [_get_label_5]);
//   useEffect(() => {
//     if (_get_label_6) {
//       Product_Function_Level_7();
//     }
//   }, [_get_label_6]);

//   useEffect(() => {
//     if (_get_year_dropdown) {
//       Product_Function_Season();
//     }
//   }, [_get_year_dropdown]);

//   useEffect(() => {
//     if (_get_season_dropdown) {
//       Product_Function_ProductScheme();
//     }
//   }, [_get_season_dropdown]);

//   useEffect(() => {
//     if (
//       _get_productscheme != "" &&
//       _get_season_dropdown != "" &&
//       _get_year_dropdown != "" &&
//       _get_state_dropdown != ""
//     )
//       Product_Function_Crop_Name();
//   }, [
//     _get_productscheme,
//     _get_season_dropdown,
//     _get_year_dropdown,
//     _get_state_dropdown,
//   ]);
//   useEffect(() => {
//     Product_Function_State();
//   }, []);

//   return (
//     <Box mb={2}>
//       <Box mb={4}>
//         <Typography variant="h6" gutterBottom>
//           Product Detail
//         </Typography>
//       </Box>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             type="ProductDetails"
//             data={_statelist}
//             set_State_GetDropdown={set_State_GetDropdown}
//             name={product_State.name}
//             valueName={product_State.value}
//             label={product_State.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_yearlist}
//             set_Year_Getdropdown={set_Year_Getdropdown}
//             name={product_Year.name}
//             valueName={product_Year.value}
//             label={product_Year.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_seasonlist}
//             set_Season_getdropdown={set_Season_getdropdown}
//             name={product_Season.name}
//             valueName={product_Season.value}
//             label={product_Season.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             set_ProductScheme_getdropdown={set_ProductScheme_getdropdown}
//             data={_productscheme}
//             name={Product_Scheme.name}
//             valueName={Product_Scheme.value}
//             label={Product_Scheme.label}
//             fullWidth
//           />
//         </Grid>

//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_destrictlist}
//             set_Destrict_Getdropdown={set_Destrict_Getdropdown}
//             name={product_District.name}
//             valueName={product_District.value}
//             label={product_District.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_level_4_list}
//             setLabel_4_Getdropdown={setLabel_4_Getdropdown}
//             name={product_Level_4.name}
//             valueName={product_Level_4.value}
//             label={product_Level_4.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_level_5_list}
//             setLabel_5_Getdropdown={setLabel_5_Getdropdown}
//             name={product_Level_5.name}
//             valueName={product_Level_5.value}
//             label={product_Level_5.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_level_6_list}
//             setLabel_6_Getdropdown={setLabel_6_Getdropdown}
//             name={product_Level_6.name}
//             valueName={product_Level_6.value}
//             label={product_Level_6.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_level_7_list}
//             setLabel_7_Getdropdown={setLabel_7_Getdropdown}
//             name={product_Level_7.name}
//             valueName={product_Level_7.value}
//             label={product_Level_7.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             name={Note_Number.name}
//             valueName={Note_Number.value}
//             label={Note_Number.label}
//             fullWidth
//             inputType="string"
//             yourMaxLengthValue={30}
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_getCrop_list}
//             name={Crop_Name.name}
//             valueName={Crop_Name.value}
//             label={Crop_Name.label}
//             fullWidth
//             set_CropName_dropdown={set_CropName_dropdown}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
import React from "react";

const ProductDetail = () => {
  return <div>ProductDetail</div>;
};

export default ProductDetail;
