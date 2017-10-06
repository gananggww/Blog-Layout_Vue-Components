const db = require('../model/articles')
const FB = require('fb')

const all = (req, res) => {
  db.find().populate('author')
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const allById = (req, res) => {
  db.find({
    _id: req.params.id
  }).populate('author')
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}


const allByIdPribadi = (req, res) => {
  db.find({
    author: req.headers.auth.id
  }).populate('author')
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const insert = (req, res) => {
  db.create({
    title: req.body.title,
    short_desc: req.body.short_desc,
    desc: req.body.desc,
    picture: req.body.picture,
    author: req.headers.auth.id
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const lost = (req, res) => {
  db.remove({
    _di: req.params.id,
    author: req.headers.auth.id
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  allById,
  allByIdPribadi,
  insert,
  all,
  lost
}
