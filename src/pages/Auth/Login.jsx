import { useState } from 'react'
import "../../css/Login.css"
import { collection, query, where, getDocs, doc } from "firebase/firestore"
import { isEmptyData, isValidEmail } from '../../utils/Validate'
import db from '../../config/Firebase'
import { AuthInput } from '../../Components/Tags/TextInput'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    emailOrUserName: "",
    passwordOfUser: ""
  })

  useEffect(() => {
    localStorage.getItem("userName") ? navigate("/home") : ""
  }, [])


  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const LoginUser = async () => {
    try {
      if (!isEmptyData(user.emailOrUserName) && !isEmptyData(user.passwordOfUser)) {
        if (isValidEmail(user.emailOrUserName)) {
          const loginQuery = query(collection(db, "users"), where("emailOfUser", "==", user.emailOrUserName), where("passwordOfUser", "==", user.passwordOfUser))
          const loginSnapShot = await getDocs(loginQuery);
          loginSnapShot.forEach((doc) => {
            localStorage.setItem("userName", doc.data().userNameOfUser)
          })
          if (loginSnapShot.docs.length !== 0) {

            navigate("/home")
          } else {
            console.log("Invalid Credentials !!!")
          }
        } else {
          const loginQuery = query(collection(db, "users"), where("userNameOfUser", "==", user.emailOrUserName), where("passwordOfUser", "==", user.passwordOfUser))
          const loginSnapShot = await getDocs(loginQuery);
          loginSnapShot.forEach((doc) => {
            localStorage.setItem("userName", doc.data().userNameOfUser)
          })
          if (loginSnapShot.docs.length !== 0) {
            navigate("/home")
          } else {
            console.log("Invalid Credentials !!!")
          }
        }
      } else {
        console.log("Please fill all data")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='container'>
        <AuthInput name={"emailOrUserName"} type={"email"} label={"Email or User Name"} onChange={onChangeHandler} value={user.emailOrUserName} />
        <AuthInput name={"passwordOfUser"} type={"password"} label={"Password"} onChange={onChangeHandler} value={user.passwordOfUser} />
        <button onClick={LoginUser}>Login</button>
        <p
          style={{ marginLeft: "8rem" }}
        >
          New to our site? &nbsp;
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#3a30ca" }}
          >
            SignUp Here
          </Link>
        </p>
        <Link
          to="/forgetPassword"
          style={{ textDecoration: "none", color: "#3a30ca", marginLeft: "21em" }}
        >
          Forget Password
        </Link>
      </div>
    </>
  )
}

export default Login