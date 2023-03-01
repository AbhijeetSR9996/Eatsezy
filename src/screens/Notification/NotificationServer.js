import Axios from "axios";
import { Server } from '../../global/index';

export const getNotificationdata = () => Axios.get(`${Server.BASE_URL}/notifications`);
export const delNotificationdata = (notificationid) => Axios.delete(`${Server.BASE_URL}/notifications/${notificationid}`);
