import axios from 'axios';
import cookie from 'cookie';

async function getHistory(channel, headers) {
  const r = await axios({
    method: 'post',
    url: 'http://localhost:4222/api/v1/method.call/loadHistory',
    data: {
      message: `{"msg":"method","method":"loadHistory","params":["${channel}",null,50,{"$date":${new Date().getTime()}},false]}`,
    },
    headers,
  });
  console.log(r);
}

async function sendMessage(msg, headers) {
  const r = await axios({
    method: 'post',
    url: 'http://localhost:4222/api/v1/method.call/sendMessage',
    data: {
      message: `{"msg":"method","method":"sendMessage","params":[{"rid":"iwasfujsYTYnbHgL5","msg":"${msg}"}]}`,
    },
    headers,
  });
  console.log(r);
}

// async function getUser(name, headers) {
//   const r = await axios({
//     method: 'get',
//     url: 'http://localhost:4222/api/v1/users.list',
//     params: {
//       query: `{"name":"${name}"}`,
//     },
//     withCredentials: true, // 允许携带cookie
//     headers,
//   });
//   console.log(r);
// }

export default async function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const uid = cookies['X-User-Id'];
  const token = cookies['X-Auth-Token'];
  const headers = {
    cookie: `rc_uid=${uid};rc_token=${token}`,
    'X-Auth-Token': token,
    'X-User-Id': uid,
  };

  await sendMessage('test msg', headers);
  await getHistory('iwasfujsYTYnbHgL5', headers);
  res.status(200).json('ok');
}
