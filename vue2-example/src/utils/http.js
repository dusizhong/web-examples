import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000

const BASE_URL = 'http://localhost:9000'
const clientSecret = { username: 'test', password: '123' }

function login(url, params) {
  let config = { auth: clientSecret }
  return new Promise((resolve, reject) => {
    axios.post(BASE_URL + url, qs.stringify(params), config).then(response => {
      sessionStorage.setItem('token', 'Bearer ' + response.data.access_token)
      resolve()
    }).catch((error) => {
      if(error.response) {
        if(error.response.status == 400) {
          alert('用户名或密码错误')
        } else if(error.response.status == 401) {
          alert('客户端密钥错误')
        } else {
          alert('未知错误，请联系管理员')
        }
      } else {
        console.log(error)
        alert('连接服务端失败')
      }
      this.loading = false
      reject(error)
    })
  })
}

function post(url, params) {
  let config = { headers: { 'Authorization': sessionStorage.getItem('token') } }
  return new Promise((resolve, reject) => {
    axios.post(BASE_URL + url, params, config).then((response) => {
      if(response.data.code == 200) {
        resolve(response.data.data)
      } else {
        alert(response.data.msg)
        reject()
      }
    }).catch((error) => {
      if(error.response) {
        if(error.response.status == 400) {
          alert('参数有误')
        } else if(error.response.status == 401) {
          alert('会话已过期，请重新登录')
        } else {
          alert('未知错误，请联系管理员')
        }
      } else {
        console.log(error)
        alert('连接服务端失败')
      }
      this.loading = false
      reject(error)
    })
  })
}

// function upload(url, params) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, params, { contentType: false, processData: false, headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).then((response) => {
//       if(response.data.code == 200) {
//         resolve(response.data.data);
//       } else {
//         message.error(response.data.msg);
//         reject();
//       }
//     }).catch((error) => {
//       if(error.response.status == 400) {
//         message.error('参数有误');
//       } else if(error.response.status == 401) {
//         message.error('会话已过期，请退出重新登录');
//       } else {
//         message.error('未知错误，请联系管理员');
//       }
//       this.loading = false;
//       reject(error);
//     })
//   })
// }

function logout() {
  sessionStorage.setItem('token', '');
}


/**
 * 解析 url 中的参数
 * @param url
 * @returns {Object}
 */
function parseUrlParams(url) {
  const params = {}
  if (!url || url === '' || typeof url !== 'string') {
    return params
  }
  const paramsStr = url.split('?')[1]
  if (!paramsStr) {
    return params
  }
  const paramsArr = paramsStr.replace(/&|=/g, ' ').split(' ')
  for (let i = 0; i < paramsArr.length / 2; i++) {
    const value = paramsArr[i * 2 + 1]
    params[paramsArr[i * 2]] = value === 'true' ? true : (value === 'false' ? false : value)
  }
  return params
}

export default {
  BASE_URL,
  login,
  post,
  // upload,
  logout,
  parseUrlParams
}
