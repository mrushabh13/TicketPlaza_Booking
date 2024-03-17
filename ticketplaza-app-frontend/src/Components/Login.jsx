export default function LoginComponent() {
  return (
    <div className="Login">
      <p>Login</p>
      <form>
        <label htmlFor="uName">
          <b>UserName</b>
        </label>
        <input type="text" placeholder="Enter UserName" name="uName" required />

        <br></br>

        <label htmlFor="pass">
          <b>Password</b>
        </label>
        <input type="text" placeholder="Enter Password" name="pass" required />
        <br></br>
        <input type="submit"></input>
      </form>
    </div>

}
