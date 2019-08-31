//基本設定用常數
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const loginCheck = require('./login_verify')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

//定義模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


//設定根目錄路由
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  let status = loginCheck(req.body)
  console.log(status)
  if (status === 'wrongAccount') {
    res.render('index', { status: status })
  } else if (status === 'wrongPassword') {
    res.render('index', { status: status })
  } else {
    res.render('welcome', { status: status })
  }
})

//設定伺服器啟動
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})

