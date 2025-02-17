import myKey from "./khaltiKey";
import axios from 'axios';

export const khaltiConfig = {
  baseUrl: 'https://dev.khalti.com/api/v2',
  secretKey: myKey.secretKey ?? '',
  publicKey: myKey.publicKey ?? ''
};

export const khaltiClient = axios.create({
  baseURL: khaltiConfig.baseUrl,
  headers: {
    'Authorization': `Key ${khaltiConfig.secretKey}`, // Set secret key for authorization
    'Content-Type': 'application/json',
  },
});