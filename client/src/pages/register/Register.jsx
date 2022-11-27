import '../register/register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' required/>
            <input type="email" placeholder='Email' required/>
            <input type="password" placeholder='Password' required/>
            <input type="text" placeholder='Name' required/>
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Izzet Social</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam maiores iste expedita temporibus dolorem deleniti, totam, vero voluptatibus facere nihil, hic illum laborum ut!</p>
          <span>Do you have an account</span>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Register