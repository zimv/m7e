import axios from 'axios';
import cookie from 'cookie';

// 登录过期时间3个月
const admin = {
  uid: null,
  token: null,
};

async function addUser(name) {
  const r = await axios({
    method: 'POST',
    url: 'http://localhost:4222/api/v1/users.create',
    data: {
      bio: '',
      customFields: {},
      email: `${name}@qqq.com`,
      joinDefaultChannels: true,
      name,
      nickname: name,
      password: '12345',
      requirePasswordChange: false,
      roles: ['user'],
      sendWelcomeEmail: true,
      setRandomPassword: false,
      statusText: '',
      username: name,
      verified: false,
    },
    headers: {
      'X-Auth-Token': admin.token,
      'X-User-Id': admin.uid,
    },
  });
  return r;
}

async function adminLogin() {
  /* eslint-disable */
  const adminMessage = await login('zimv');
  admin.uid = adminMessage.result.id;
  admin.token = adminMessage.result.token;
  console.log('admin login success');
}

async function login(userName) {
  const r = await axios({
    method: 'post',
    url: 'http://localhost:4222/api/v1/method.callAnon/login',
    data: {
      // password 12345
      message: `{"msg":"method","method":"login","params":[{"user":{"username":"${userName}"},"password":"12345"}]}`,
    },
  });
  if (r.data && r.data.success) {
    const message = JSON.parse(r.data.message);
    // 说明没有用户
    if (message.error && message.error.error === 403) {
      // 管理员没有登录
      if (!admin.uid) {
        await adminLogin();
        // console.log('adminMessage', adminMessage);
      }
      // 管理员登录后便可以增加用户
      const add = await addUser(userName);
      if (add.data.success) console.log('add new user success:', add.data.user.username);
      else {
        // 可能是管理员登录过期
        console.log('add new user fail:', add.data);
        await adminLogin();
        const add2 = await addUser(userName);
        if (add2.data.success) console.log('add new user success:', add2.data.user.username);
      }
      // 注册成功后，再次登录返回
      return login(userName);
      // 返回token uid
    }
    return message;
  }
}

async function getHistory(channel) {
  if (!admin.uid) {
    await adminLogin();
  }
  const r = await axios({
    method: 'post',
    url: 'http://localhost:4222/api/v1/method.call/loadHistory',
    data: {
      message: `{"msg":"method","method":"loadHistory","params":["${channel}",null,50,{"$date":${new Date().getTime()}},false]}`,
    },
    headers:{
      'X-Auth-Token': admin.token,
      'X-User-Id': admin.uid,
    },
  });
  return r
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

// 当前客户端使用的api
export default async function handler(req, res) {
  const name = req.query.userName || 'test8';
  const method = req.query.method || 'test8';

  if(method === 'login'){
    const r = await login(name);
    console.log(`user[${name}] login success`);
    res.setHeader('Set-Cookie', [
      `X-Auth-Token=${r.result.token};expires=${new Date(
        r.result.tokenExpires.$date,
      ).toUTCString()};domain=${req.headers.host.split(':')[0]};path=/;`,
      `X-User-Id=${r.result.id};expires=${new Date(
        r.result.tokenExpires.$date,
      ).toUTCString()};domain=${req.headers.host.split(':')[0]};path=/`,
    ]);
    res.status(200).json(r);
    return;
  }

  if(method === 'history'){
    const r = await getHistory('iwasfujsYTYnbHgL5');
    // console.log(r.data)
    res.status(200).json(r.data.message);
    return;
  }

  if(method === 'send'){
    console.log(req.body)
    const cookies = cookie.parse(req.headers.cookie || '');
    const uid = cookies['X-User-Id'];
    const token = cookies['X-Auth-Token'];
    const headers = {
      cookie: `rc_uid=${uid};rc_token=${token}`,
      'X-Auth-Token': token,
      'X-User-Id': uid,
    };
    const r = await axios({
      method: 'post',
      url: 'http://localhost:4222/api/v1/method.call/sendMessage',
      data: {
        message: `{"msg":"method","method":"sendMessage","params":[{"rid":"iwasfujsYTYnbHgL5","msg":"${req.body}"}]}`,
      },
      headers,
    });
    console.log(r.data)
    res.status(200).json(r.data.message);
    return;
  }
}
