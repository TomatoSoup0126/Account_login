let matchUser = {}


// input = {
//   account: 'captain@hotmail.com',
//   password: 'icandothisallday'
// }

const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  },
]


function findUser(input) {
  matchUser = users.find(function (user, index, array) {
    return user.email === input.account
  })
  console.log(matchUser)
}

function checkUser() {
  if (matchUser === undefined) { //找不到matchUser會是undefind
    return false
  } else if (matchUser.firstName) { //真的有找到人會有firstName
    return true
  }
}

function checkPassword(input) {
  if (input.password === matchUser.password) {
    return true
  } else {
    return false
  }
}

function loginCheck(input) {
  let
    status = ''
  findUser(input)
  if (!checkUser()) {
    status = 'wrongAccount'
  } else {
    if (!checkPassword(input)) {
      status = 'wrongPassword'
    } else {
      status = `Wellcome back, ${matchUser.firstName}!`
    }
  }
  return status
}

module.exports = loginCheck