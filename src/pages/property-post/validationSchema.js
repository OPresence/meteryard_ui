import * as Yup from "yup";
import moment from "moment";
import checkoutFormModel from "./checkoutFormModel";
const {
  formField: {
    listed_name,
    furnishing,
    bedrooms,
    bathrooms,
    super_building,
    carpet_area,
    total_floors,
    floors_no,
    facing,
    project_name,
    add_title,
    description,
    price,
    location,
    coverImage,
    typeProperty,
  },
} = checkoutFormModel;

export default [
  Yup.object().shape({
    [listed_name.name]: Yup.string().required(
      `${listed_name.requiredErrorMsg}`
    ),
    [furnishing.name]: Yup.string().required(`${furnishing.requiredErrorMsg}`),
    [bedrooms.name]: Yup.string().required(`${bedrooms.requiredErrorMsg}`),
    [bathrooms.name]: Yup.string().required(`${bathrooms.requiredErrorMsg}`),
    [super_building.name]: Yup.string().required(
      `${super_building.requiredErrorMsg}`
    ),
    [carpet_area.name]: Yup.string().required(
      `${carpet_area.requiredErrorMsg}`
    ),
  }),
  // Yup.object().shape({
  //   [product_State.name]: Yup.string().required(
  //     `${product_State.requiredErrorMsg}`
  //   ),
  //   [product_Year.name]: Yup.string().required(
  //     `${product_Year.requiredErrorMsg}`
  //   ),
  //   [product_Season.name]: Yup.string().required(
  //     `${product_Season.requiredErrorMsg}`
  //   ),
  //   [Product_Scheme.name]: Yup.string().required(
  //     `${Product_Scheme.requiredErrorMsg}`
  //   ),
  //   [product_District.name]: Yup.string().required(
  //     `${product_District.requiredErrorMsg}`
  //   ),
  //   [Note_Number.name]: Yup.string().required(
  //     `${Note_Number.requiredErrorMsg}`
  //   ),
  // }),
  // Yup.object().shape({
  //   [Use_Type.name]: Yup.string().required(`${Use_Type.requiredErrorMsg}`),
  //   [Insurance_type.name]: Yup.string().required(
  //     `${Insurance_type.requiredErrorMsg}`
  //   ),
  //   [Policy_Type.name]: Yup.string().required(
  //     `${Policy_Type.requiredErrorMsg}`
  //   ),
  //   [Complaint_Type.name]: Yup.string().required(
  //     `${Complaint_Type.requiredErrorMsg}`
  //   ),
  //   [Complaint_Description.name]: Yup.string().required(
  //     `${Complaint_Description.requiredErrorMsg}`
  //   ),
  //   [Grievance_Description.name]: Yup.string().required(
  //     `${Grievance_Description.requiredErrorMsg}`
  //   ),
  //   [Branch_Code.name]: Yup.string().required(
  //     `${Branch_Code.requiredErrorMsg}`
  //   ),
  //   [Broker_License.name]: Yup.string().required(
  //     `${Broker_License.requiredErrorMsg}`
  //   ),
  //   [Identifier_Type_Value.name]: Yup.string().required(
  //     `${Identifier_Type_Value.requiredErrorMsg}`
  //   ),
  // }),
];
