const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const md5 = require('md5')
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
open({
  filename: "./db/test.db",
  driver: sqlite3.Database
}).then((db) => {
  app.get('/reg', async (req, res) => {
    const people = await db.all("SELECT * FROM People")
    res.json(people)
  })
  app.get('/reg', async (req, res) => {
    const people = await db.all("SELECT * FROM People")
    res.json(people)
  })


  //.......regist......................
  app.post('/regis', async (req, res) => {
    const row = { nickname, email, password } = req.body;

    const result = await db.all(`SELECT * FROM People WHERE email = "${email}"`)
    console.log(result)
    if (result.length > 0) {
      return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
    }

    else {
      const userAdd = async (res) => {
       await db.run(`INSERT INTO People (nickname, email, password) VALUES ("${nickname}", "${email}", "${password}")`, (err) => {
          if (err) {
            return res.status(500).json({ message: 'Ошибка при добавлении пользователя в базу данных' });
          }
          res.json({
            data: "responce"
          });
        }

        )
      }
      userAdd(res)
    }
    return res.json({ nickname, email, password });
    
  });
 
//.............................
  //...........login..................
  app.post('/log',async function (req, res) {
    console.log(req.body)
    const logData = { nickname, email, password } = req.body;
    const data=await db.all(`SELECT * FROM People WHERE email = "${email}" AND password = "${password}"`)
    console.log(data)
    if (data!=null){
      console.log('pass')
      res.json(data)
    }else{
      res.json({message:"Не верная почта или пароль"})
    }
      console.log(logData)
  });

  app.post('/logg',async function (req, res) {
    console.log(req.body)
    const logData = { id, brl, usd } = req.body;
    const data=await db.all(`Update People set brl-${brl}, usd=${usd} WHERE id=${id}`)
    console.log(data)
    if (data!=null){
      console.log('passss')
      res.json(data)
    }else{
      res.json({message:"Нет денег"})
    }
      console.log(logData)
  });
  
});








app.listen(3000, () => {
  console.log("rabotaet" + 3000)
})





// expres nodemon sqlite sqlite3 установить