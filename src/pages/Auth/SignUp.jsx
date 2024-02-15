import { useState } from 'react'
import { AuthInput } from '../../Components/Tags/TextInput'
import "../../css/SignUp.css"
import { v1 } from 'uuid'
import { isEmptyData, isValidEmail, isValidPassword } from "../../utils/Validate"
import { addDoc, collection, where, getDoc, query } from "firebase/firestore"
import db from '../../config/Firebase'
import { useNavigate } from 'react-router'

const SignUp = () => {
  const userID = v1();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userID,
    nameOfUser: "",
    emailOfUser: "",
    userNameOfUser: "",
    passwordOfUser: ""
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const SignUpUser = async () => {
    try {
      if (!isEmptyData(user.emailOfUser) && !isEmptyData(user.userNameOfUser) && !isEmptyData(user.passwordOfUser) && !isEmptyData(user.nameOfUser)) {
        if (!isValidEmail(user.emailOfUser)) {
          console.log("Please Enter valid email")
        } else if (!isValidPassword(user.passwordOfUser)) {
          console.log("Please Enter valid password")
        } else {
          await addDoc(collection(db, "users"), user);
          navigate("/")
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
        <AuthInput name={"nameOfUser"} type={"text"} label={"Name"} onChange={onChangeHandler} value={user.nameOfUser} />
        <AuthInput name={"emailOfUser"} type={"email"} label={"Email"} onChange={onChangeHandler} value={user.emailOfUser} />
        <AuthInput name={"userNameOfUser"} type={"text"} label={"User Name"} onChange={onChangeHandler} value={user.userNameOfUser} />
        <AuthInput name={"passwordOfUser"} type={"password"} label={"Password"} onChange={onChangeHandler} value={user.passwordOfUser} />
        <button onClick={SignUpUser}>Register</button>
      </div>
    </>
  )
}

export default SignUp