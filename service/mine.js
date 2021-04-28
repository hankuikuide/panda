import request from './network.js'

import fly from '../utils/fly'
// import Fly from '../utils/wx'
// var fly = new Fly

export function getOpenId(code) {
  return fly.post("/getOpenId", {
    code
  })
  // return request({
  //   url: '/getOpenId',
  //   data: {
  //     code
  //   },
  //   method: "POST"
  // })
}

export function getPhoneNumber(encryptedData, iv) {
  return fly.post("/getPhoneNumber", {
    encryptedData,
    iv
  })
  // return request({
  //   url: '/getPhoneNumber',
  //   data: {
  //     encryptedData,
  //     iv
  //   }
  // })
}

export function getUserInfo(encryptedData, iv) {
  return fly.get("/getUserInfo", {
    encryptedData,
    iv
  })
  // return request({
  //   url: '/getUserInfo',
  //   data: {
  //     encryptedData,
  //     iv
  //   }
  // })
}