import { useState } from 'react'
import "../../css/ForgetPassword.css"
import { AuthInput } from '../../Components/Tags/TextInput'
import { isValidEmail } from '../../utils/Validate'
import db from '../../config/Firebase'
import { collection, updateDoc, query, where, getDocs, doc, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router'

const ForgetPassword = () => {
  const navigator = useNavigate();

  const [user, setUser] = useState({
    emailOrUserName: "",
    passwordOfUser: "",
    confirmPassword: ""
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const validateThePassword = async () => {
    try {
      if (isValidEmail(user.emailOrUserName)) {
        const loginQuery = query(collection(db, "users"), where("emailOfUser", "==", user.emailOrUserName))
        const loginSnapShot = await getDocs(loginQuery);

        if (loginSnapShot.docs.length !== 0) {
          document.getElementById("emailContainer").classList.add("hide");
          document.getElementById("emailContainer").classList.remove("show");
          document.getElementById("passwordContainer").classList.add("show");
          document.getElementById("passwordContainer").classList.remove("hide");
        } else {
          console.log("User not found !!!")
          document.getElementById("emailContainer").classList.add("show");
          document.getElementById("emailContainer").classList.remove("hide");
          document.getElementById("passwordContainer").classList.add("hide");
          document.getElementById("passwordContainer").classList.remove("show");
        }
      } else {
        const loginQuery = query(collection(db, "users"), where("userNameOfUser", "==", user.emailOrUserName))
        const loginSnapShot = await getDocs(loginQuery);

        if (loginSnapShot.docs.length !== 0) {
          document.getElementById("emailContainer").classList.add("hide");
          document.getElementById("emailContainer").classList.remove("show");
          document.getElementById("passwordContainer").classList.add("show");
          document.getElementById("passwordContainer").classList.remove("hide");
        } else {
          console.log("User not found !!!")
          document.getElementById("emailContainer").classList.add("show");
          document.getElementById("emailContainer").classList.remove("hide");
          document.getElementById("passwordContainer").classList.add("hide");
          document.getElementById("passwordContainer").classList.remove("show");
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const resetThePassword = async () => {
    try {
      if (user.passwordOfUser === user.confirmPassword) {
        if (isValidEmail(user.emailOrUserName)) {
          const emailQuery = query(collection(db, "users"), where("emailOfUser", "==", user.emailOrUserName))
          const emailSnapShot = await getDocs(emailQuery);

          const emailDoc = doc(db, "users", emailSnapShot.docs[0].id)
          await updateDoc(emailDoc, { passwordOfUser: user.passwordOfUser })

          navigator("/")
        } else {
          const userNameQuery = query(collection(db, "users"), where("userNameOfUser", "==", user.emailOrUserName))
          const userNameSnapShot = await getDocs(userNameQuery);

          const userNameDoc = doc(db, "users", userNameSnapShot.docs[0].id)
          await updateDoc(userNameDoc, { passwordOfUser: user.passwordOfUser })

          navigator("/")
        }
      } else {
        console.log("Password Not Matched !!!")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="container show" id="emailContainer">
        <AuthInput
          name={"emailOrUserName"}
          type={"email"}
          label={"Email or User Name"}
          value={user.emailOrUserName}
          onChange={onChangeHandler}
        />
        <button onClick={validateThePassword}>Validate</button>
      </div>
      <div className="container hide" id="passwordContainer">
        <AuthInput
          name={"passwordOfUser"}
          type={"password"}
          label={"Enter New Password"}
          value={user.passwordOfUser}
          onChange={onChangeHandler}
        />
        <AuthInput
          name={"confirmPassword"}
          type={"password"} l
          label={"Confirm New Password"}
          value={user.confirmPassword}
          onChange={onChangeHandler}
        />
        <button onClick={resetThePassword}>Reset Password</button>
      </div>
    </>
  )
}

export default ForgetPassword