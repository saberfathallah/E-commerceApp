import fetch from 'node-fetch';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { generateToken, verifyToken } from '../../../utils/authorization';

async function loginMicroService(mail, password) {
  const url = `${process.env.BACK_END_SERVICES}/login`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ mail, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function loginUser (mail, password) {
  const result = await loginMicroService(mail, password);
  const data = await result.json();
  if (result.status !== 200) {
    return data;
  } else {
    const token = generateToken(data._id);        
    return { user: data, token };
    }
}

export default loginUser