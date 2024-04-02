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
    // location,
    // coverImage,
    // typeProperty,
    landmark,
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

  Yup.object().shape({
    [total_floors.name]: Yup.string().required(
      `${total_floors.requiredErrorMsg}`
    ),
    [floors_no.name]: Yup.string().required(`${floors_no.requiredErrorMsg}`),
    [facing.name]: Yup.string().required(`${facing.requiredErrorMsg}`),
    [project_name.name]: Yup.string().required(
      `${project_name.requiredErrorMsg}`
    ),
    [add_title.name]: Yup.string().required(`${add_title.requiredErrorMsg}`),
    [description.name]: Yup.string().required(
      `${description.requiredErrorMsg}`
    ),
  }),
  Yup.object().shape({
    [price.name]: Yup.string().required(`${price.requiredErrorMsg}`),
    [landmark.name]: Yup.string().required(`${landmark.requiredErrorMsg}`),
    // [Policy_Type.name]: Yup.string().required(
    //   `${Policy_Type.requiredErrorMsg}`
    // ),
    // [Complaint_Type.name]: Yup.string().required(
    //   `${Complaint_Type.requiredErrorMsg}`
    // ),
    // [Complaint_Description.name]: Yup.string().required(
    //   `${Complaint_Description.requiredErrorMsg}`
    // ),
    // [Grievance_Description.name]: Yup.string().required(
    //   `${Grievance_Description.requiredErrorMsg}`
    // ),
    // [Branch_Code.name]: Yup.string().required(
    //   `${Branch_Code.requiredErrorMsg}`
    // ),
    // [Broker_License.name]: Yup.string().required(
    //   `${Broker_License.requiredErrorMsg}`
    // ),
    // [Identifier_Type_Value.name]: Yup.string().required(
    //   `${Identifier_Type_Value.requiredErrorMsg}`
    // ),
  }),
];
