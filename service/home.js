import request from './network.js'
import fly from '../utils/fly'
// import Fly from '../utils/wx'
// var fly = new Fly

export function getBooks() {
  return fly.post("/book/getBooks")
  // return request({
  //   url: '/book/getBooks'
  // })
}

export function getLessons(bookId) {
  return fly.get("/category/getCateLessons", {
    bookId
  })
}

export function getSubtitle(lessonId) {
  return fly.get("/subtitle/getWeChatSubtitle", {
    lessonId
  })
}

export function getWords(lessonId) {
  return fly.get("/word/getWeChatWords", {
    lessonId
  })
}