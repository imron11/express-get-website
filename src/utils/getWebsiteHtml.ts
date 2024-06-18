import axios from 'axios';
import { url } from '../config/constant';


export const getWebsiteHtml = async () => {
  const response = await axios.get(url);
  return response.data;
};
