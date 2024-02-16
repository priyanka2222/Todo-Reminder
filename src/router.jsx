import { lazy } from "react";

const SignUpPage = lazy(() => import("./pages/Auth/SignUp"))
const LoginPage = lazy(() => import("./pages/Auth/Login"))
const ForgetPassword = lazy(() => import("./pages/Auth/ForgetPassword"))
const DisplayTodosPage = lazy(() => import("./pages/Todos/DisplayTodos"))
const AddTodoPage = lazy(() => import("./pages/Todos/AddTodo"))

const routers = [
    { path: "/", element: <LoginPage /> },
    { path: "/register", element: <SignUpPage /> },
    { path: "/forgetPassword", element: <ForgetPassword /> },
    { path: "/home", element: <DisplayTodosPage /> },
    { path: "/addTodo", element: <AddTodoPage /> }
]

export default routers;