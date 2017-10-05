const db = require('../model/users')
const jwt = require('jsonwebtoken')
const FB = require('fb')

const loginFB = (req, res) => {
  FB.api('/me', {
    fields: ['id','name','email','picture']
  }, (response) => {
    console.log('ini response dari tokenFB :', response)
    db.find({email:response.email})
    .then(result => {
      console.log('ini result dari hasil finding by id : ', result)
      if (result.length === 0) {
        db.create({
          fb_id: response.id,
          email: response.email,
          picture: response.picture.data.url,
          name: response.name
        })
        .then(rows => {
          console.log('ini response dari create new user : ', rows);
          let bungkusanBaru = {
            id: rows._id,
            fb_id: rows.fb_id,
            email: rows.email,
            picture: rows.picture
          }
          // console.log('ini token yang siap dibuat dari user baru : ',bungkusanBaru);
          let token = jwt.sign(bungkusanBaru, 'nasilele')
          res.send({token: token, data: rows})
        })
        .catch(err => {
          // console.log('gagal create token : ', err)
          res.send(err)
        })
      } else {
        let bungkusanLama = {
          id: result[0]._id,
          fb_id: result[0].fb_id,
          email: result[0].email,
          picture: result[0].picture
        }
        // console.log('ini token yang siap dibuat dari user lama : ', bungkusanLama);
        let token = jwt.sign(bungkusanLama, 'nasilele')
        res.send({token: token, profile: result[0]})
      }
    })
    .catch(err => {
      console.log('gagal finding by email : ', err);
    })
  })
}

module.exports = {
  loginFB
}
