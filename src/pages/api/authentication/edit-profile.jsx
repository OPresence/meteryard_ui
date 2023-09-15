import { api_configs } from "@/api-services";
import axios from "axios";

export default async function handler(req, res) {
  const { method, query, body, headers } = req;

  try {
    const response = await axios({
      method: method,
      url: api_configs.editUserProfile,
      params: query,
      data: body,
      headers: {
        token: headers.token,
      },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error?.response?.data?.responseCode || 500).json(
      error.response?.data || {
        message: error?.response?.data?.responseMessage,
      }
    );
  }
}
