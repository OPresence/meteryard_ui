// import React, { useState, useEffect } from "react";
// import { Grid, Typography, Box } from "@material-ui/core";
// import { DatePickerField, InputField, SelectField } from "../FormFields";
// import Apiconfigs from "src/ApiConfig/ApiConfig";
// import { PostApiFunctionWipro } from "src/utils";
// import axios from "axios";

// export default function AddressForm(props) {
//   const {
//     formField: {
//       Channel,
//       farmarId,
//       Farmer,
//       Gender,
//       Middel_Name,
//       Last_Name,
//       dob,
//       Address1,
//       Address2,
//       Address3,
//       State,
//       District,
//       City_village,
//       Post_Office,
//       Police_Station,
//       Pin_Code,
//       Mobile_Number,
//       Alternate_Contact_Number,
//       Email_ID,
//       Document_Number,
//       Farmer_Type,
//       Identity_Document_Type,
//     },
//   } = props;
//   const [_grievanceAgainst, setGrievanceAgains] = useState([]);
//   const [_genderlist, setGenderList] = useState([]);
//   const [_statelist, setStateList] = useState([]);
//   const [_destrictlist, setDestrictList] = useState([]);
//   const [_villagelist, set_Village_list] = useState([]);
//   const [_documenttypelist, set_Document_Type_List] = useState([]);
//   const [_farmertypelist, set_Farmer_Type_List] = useState([]);
//   // Change the dropdown value
//   const [_get_state_dropdown, set_State_GetDropdown] = useState("");
//   const [_get_destrict_dropdown, set_Destrict_Getdropdown] = useState("");
//   const [_getfarmer_id, setFarmerId] = useState("");

//   // Grievance Againts API
//   const [isFocused, setIsFocused] = useState(false);
//   function handleFocus() {
//     setIsFocused(true);
//   }
//   function handleBlur() {
//     setIsFocused("false");
//   }

//   const Function_Grievance_Against = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: Apiconfigs.Grievance_Against,
//       });
//       if (res) {
//         setGrievanceAgains(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   //  GENDER API
//   const Function_Gender = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: Apiconfigs.Gender,
//       });
//       if (res) {
//         setGenderList(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   //  STATE API
//   const Function_State = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: Apiconfigs.StateList,
//       });
//       if (res) {
//         setStateList(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   // Destrict API
//   const Function_Destrict = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: Apiconfigs.District_list,
//         data: {
//           grIgmsStateId: _get_state_dropdown,
//         },
//       });
//       if (res) {
//         setDestrictList(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   //  City API
//   const Function_Village = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: Apiconfigs.Village,
//         data: {
//           grIgmsDistrictId: _get_destrict_dropdown,
//         },
//       });
//       if (res) {
//         set_Village_list(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   //  Identity_Document_Type API
//   const Function_Identity_Document_Type = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: Apiconfigs.Identity_Document_Type,
//       });
//       if (res) {
//         set_Document_Type_List(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   }; //  Farmer_Type API
//   const Function_Farmer_Type = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: Apiconfigs.Farmer_Type,
//       });
//       if (res) {
//         set_Farmer_Type_List(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };
//   // check the farmer id
//   const Function_Farmer_IdCheck = async () => {
//     try {
//       const res = await PostApiFunctionWipro({
//         endPoint: Apiconfigs.grievanceIdCheck,
//         data: _getfarmer_id,
//       });
//       if (res) {
//         set_Farmer_Type_List(res?.data?.data);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setFarmerId(e.target.value);
//   };

//   useEffect(() => {
//     if (_get_state_dropdown) {
//       Function_Destrict();
//     }
//   }, [_get_state_dropdown]);

//   useEffect(() => {
//     if (_get_destrict_dropdown) {
//       Function_Village();
//     }
//   }, [_get_state_dropdown, _get_destrict_dropdown]);

//   useEffect(() => {
//     Function_Grievance_Against();
//     Function_Gender();
//     Function_State();
//     Function_Identity_Document_Type();
//     Function_Farmer_Type();
//   }, []);
//   useEffect(() => {
//     if (_getfarmer_id.length > 5) {
//       Function_Farmer_IdCheck();
//     }
//   }, [_getfarmer_id]);

//   return (
//     <Box mb={4} mt={2} onClick={handleBlur}>
//       <Box mb={4}>
//         <Typography variant="h2" gutterBottom style={{ fontWeight: "600" }}>
//           Complainant Details
//         </Typography>
//       </Box>

//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_grievanceAgainst}
//             name={Channel.name}
//             valueName={Channel.value}
//             label={Channel.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={farmarId.name}
//             valueName={farmarId.value}
//             label={farmarId.label}
//             fullWidth
//             changeValue={setFarmerId}
//             setIsFocused={setIsFocused}
//             isFocused={isFocused}
//             handleInputChange={handleInputChange}
//             handleFocus={handleFocus}
//             handleBlur={handleBlur}
//             inputType="string"
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={Farmer.name}
//             valueName={Farmer.value}
//             label={Farmer.label}
//             fullWidth
//             yourMaxLengthValue={50}
//             inputType="string"
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_genderlist}
//             name={Gender.name}
//             valueName={Gender.value}
//             label={Gender.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={Middel_Name.name}
//             valueName={Middel_Name.value}
//             label={Middel_Name.label}
//             fullWidth
//             inputType="string"
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={Last_Name.name}
//             valueName={Last_Name.value}
//             label={Last_Name.label}
//             fullWidth
//             inputType="string"
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <DatePickerField
//             name={dob.name}
//             valueName={dob.value}
//             label={dob.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={Address1.name}
//             valueName={Address1.value}
//             label={Address1.label}
//             fullWidth
//             yourMaxLengthValue={50}
//             inputType="string"
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={Address2.name}
//             valueName={Address2.value}
//             label={Address2.label}
//             fullWidth
//             inputType="string"
//             yourMaxLengthValue={50}
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={Address3.name}
//             valueName={Address3.value}
//             label={Address3.label}
//             fullWidth
//             inputType="string"
//             yourMaxLengthValue={50}
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_statelist}
//             set_State_GetDropdown={set_State_GetDropdown}
//             name={State.name}
//             valueName={State.value}
//             label={State.label}
//             fullWidth
//             type="stateValue"
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             set_Destrict_Getdropdown={set_Destrict_Getdropdown}
//             data={_destrictlist}
//             name={District.name}
//             valueName={District.value}
//             label={District.label}
//             fullWidth
//             type="destrictValue"
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_villagelist}
//             name={City_village.name}
//             valueName={City_village.value}
//             label={City_village.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={Post_Office.name}
//             valueName={Post_Office.value}
//             label={Post_Office.label}
//             fullWidth
//             inputType="string"
//             yourMaxLengthValue={20}
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={Police_Station.name}
//             valueName={Police_Station.value}
//             label={Police_Station.label}
//             fullWidth
//             inputType="string"
//             yourMaxLengthValue={20}
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={Pin_Code.name}
//             valueName={Pin_Code.value}
//             label={Pin_Code.label}
//             fullWidth
//             inputType="number"
//             yourMaxLengthValue={6}
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={Mobile_Number.name}
//             valueName={Mobile_Number.value}
//             label={Mobile_Number.label}
//             fullWidth
//             inputType="number"
//             yourMaxLengthValue={10}
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={Alternate_Contact_Number.name}
//             valueName={Alternate_Contact_Number.value}
//             label={Alternate_Contact_Number.label}
//             fullWidth
//             inputType="number"
//             yourMaxLengthValue={10}
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={Email_ID.name}
//             valueName={Email_ID.value}
//             label={Email_ID.label}
//             fullWidth
//             inputType="email"
//             yourMaxLengthValue={50}
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_documenttypelist}
//             name={Identity_Document_Type.name}
//             valueName={Identity_Document_Type.value}
//             label={Identity_Document_Type.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <InputField
//             _isloading={props._isloading}
//             name={Document_Number.name}
//             valueName={Document_Number.value}
//             label={Document_Number.label}
//             fullWidth
//             inputType="number"
//             yourMaxLengthValue={""}
//           />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <SelectField
//             _isloading={props._isloading}
//             data={_farmertypelist}
//             name={Farmer_Type.name}
//             valueName={Farmer_Type.value}
//             label={Farmer_Type.label}
//             fullWidth
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
import React from "react";

const AddressForm = () => {
  return <div>AddressForm</div>;
};

export default AddressForm;
