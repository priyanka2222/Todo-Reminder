import { useState } from 'react'
import "../../css/Login.css"
import { collection, query, where, getDocs, limit } from "firebase/firestore"
import { isEmptyData, isValidEmail } from '../../utils/Validate'
import db from '../../config/Firebase'
import { AuthInput } from '../../Components/Tags/TextInput'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate= useNavigate();
  const [user, setUser] = useState({
    emailOrUserName: "",
    passwordOfUser: ""
  })

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
          const loginQuery = query(collection(db, "users"), where("emailOfUser", "==", user.emailOrUserName),where("passwordOfUser","==",user.passwordOfUser))
          const loginSnapShot = await getDocs(loginQuery);

          if(loginSnapShot.docs.length!==0){
              navigate("/home")
          }else{
            console.log("Invalid Credentials !!!")
          }
        } else {

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
      </div>
    </>
  )
}

export default Login