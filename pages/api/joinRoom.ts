import axios from 'axios';
import cookie from 'cookie';

async function joinRoom(channel, headers) {
  const r = await axios({
    method: 'post',
    url: 'http://localhost:4222/api/v1/method.call/joinRoom',
    data: {
      message: `{"msg":"method","method":"joinRoom","params":["${channel}"]}`,
    },
    headers,
  });
  if (r.data && r.data.success) {
    return r.data;
  }
}

// 当前客户端使用的api
export default async function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const uid = cookies['X-User-Id'];
  const token = cookies['X-Auth-Token'];
  const headers = {
    cookie: `rc_uid=${uid};rc_token=${token}`,
    'X-Auth-Token': token,
    'X-User-Id': uid,
  };
  const r = await joinRoom('iwasfujsYTYnbHgL5', headers);
  res.status(200).json(r);
}
