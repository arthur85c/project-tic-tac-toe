const store = require('./store.js')

const signInSuccess = function (response) {
  store.user = response.user
  $('.sign-up').html(``)
  $('.sign-in').html(``)
  $('#allOthers.afterSignin').html(`
    <button type="submit" class="changePasswordForm">Change Password</button><p></p>
  <button type="submit" class="getGame">Get Game</button><p></p>
  <button type="submit" class="createGame">New Game</button><p></p>
  <button type="submit" class="signout">Sign out</button><p></p>`)
}

// <form class="specificGame">
//   <input required type="text" name="game[id]" placeholder="Check specific game">
//   <button type="submit">Get Specific Game</button>
//   </form><p></p>

const signInFail = function (response) {
  $('.sign-up').html(``)
  $('.sign-up').html(`<p></p><div class="alert alert-danger" role="alert">Incorrect Password, please try again</div>`)
}

const showSignInForm = function () {
  $('.sign-up').html(`
    <div class="alert alert-warning" role="alert">
    <h2>Sign up</h2>
    <form id="sign-up-form">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" name="credentials[email]" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" name="credentials[password]" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password Confirmation</label>
        <input type="password" class="form-control" name="credentials[password_confirmation]" placeholder="Password">
      </div>
      <div class="form-check">
      <button type="submit" class="btn btn-primary">Sign Me Up!</button>
      </div>
    </form>
    </div>
    `)
}

const getGameSuccess = function (response) {
  $('.game').append('<div class="gameScore"></div>')
  $('.gameScore').html(`You have played ` + response.games.length + ` games(s)`)
}

const createGameSuccess = function (response) {
  store.newGame = response.game
  $('.game').show()
  $('#change-pw.afterSignin').html(``)
  $('.game').html(`
          <div class="row-article text-center">
            <div class="col-xs-4 col-sm-4 box" id="box-1"><h2><span class="image" id="0">0</span></h2></div>
            <div class="col-xs-4 col-sm-4 box" id= "box-2"><h2><span class="image" id="1">1</span></h2></div>
            <div class="col-xs-4 col-sm-4 box" id="box-3"><h2><span class="image" id="2">2</span></h2></div>
          </div>
          <div class="row-article text-center">
            <div class="col-xs-4 col-sm-4 box" id="box-4"><h2><span class="image" id="3">3</span></h2></div>
            <div class="col-xs-4 col-sm-4 box" id="box-5"><h2><span class="image" id="4">4</span></h2></div>
            <div class="col-xs-4 col-sm-4 box" id="box-6"><h2><span class="image" id="5">5</span></h2></div>
          </div>
          <div class="row-article text-center">
            <div class="col-xs-4 col-sm-4 box" id="box-7"><h2><span class="image" id="6">6</span></h2></div>
            <div class="col-xs-4 col-sm-4 box" id="box-8"><h2><span class="image" id="7">7</span></h2></div>
            <div class="col-xs-4 col-sm-4 box" id="box-9"><h2><span class="image" id="8">8</span></h2></div>
          </div>
          <p></p>`)
  store.player1 = []
  store.player2 = []
}

const specificGameSuccess = function (response) {
  console.log(response.game.length)
  // $('.sign-up').html(`response.length`)
}

const specificGameFail = function (response) {
  console.log(response)
}

const createSuccess = function (response) {
  $('.sign-up').html(`<div class="alert alert-success" role="alert">Now sign in down below!</div>`)
}

const createFail = function (response) {
  $('.sign-up').html(`<div class="alert alert-danger" role="alert">Email may be already taken, or passwords needs to be identical. Please try again!</div>
  <div class="alert alert-warning" role="alert">
  <h2>Sign up</h2>
  <form id="sign-up-form">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" name="credentials[email]" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" name="credentials[password]" placeholder="Password">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password Confirmation</label>
      <input type="password" class="form-control" name="credentials[password_confirmation]" placeholder="Password">
    </div>
    <div class="form-check">
    <button type="submit" class="btn btn-primary">Sign Me Up!</button>
    </div>
  </form>
  </div>`)
}

const signoutSuccess = function (response) {
  $('.game').html(``)
  $('#change-pw.afterSignin').html(``)
  $('#allOthers.afterSignin').html(``)
  $('.sign-up').html(`<div class="alert alert-success" role="alert">Signout Successful</div>`)
  $('.sign-in').html(`
    <h2>Sign In</h2>
    <form id="login-form">
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" name="credentials[email]" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" name="credentials[password]" placeholder="Password">
      </div>
      <div class="form-check">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
      <span>Don't have an account? Click on the button to make a new account! ---->  </span><button type="submit" class="generate-sign-up-form">Click me!</button>
    </form>
    `)
}

const signoutFail = function (response) {

}

const showChangePWForm = function () {
  $('#change-pw.afterSignin').html(`
    <form id="change-password-form">
  <div class="form-group">
    <label for="exampleInputEmail1">Old Password</label>
    <input type="password" class="form-control" name="passwords[old]" placeholder="Enter previous password">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">New Password</label>
    <input type="password" class="form-control" name="passwords[new]" placeholder="New Password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<p></p>
    `)
}

const changePWsuccess = function (response) {
  $('#change-pw.afterSignin').html(`<div class="alert alert-success" role="alert">Password Successfully changed!</div>`)
}
const changePWfail = function (resposne) {
  $('#change-pw.afterSignin').html(`
    <form id="change-password-form">
  <div class="form-group">
    <label for="exampleInputEmail1">Old Password</label>
    <input type="password" class="form-control" name="passwords[old]" placeholder="Enter previous password">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">New Password</label>
    <input type="password" class="form-control" name="passwords[new]" placeholder="New Password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<p></p>
<div class="alert alert-danger" role="alert">Your previous password did not match our record, please try again!</div>`)
}

module.exports = {
  signInSuccess,
  getGameSuccess,
  createGameSuccess,
  specificGameSuccess,
  specificGameFail,
  showSignInForm,
  createSuccess,
  signoutSuccess,
  signoutFail,
  showChangePWForm,
  changePWsuccess,
  changePWfail,
  createFail,
  signInFail
}
