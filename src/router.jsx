import { lazy } from "react";

const SignUpPage = lazy(() => import("./pages/Auth/SignUp"))
const LoginPage = lazy(() => import("./pages/Auth/Login"))
const DisplayTodosPage = lazy(() => import("./pages/Todos/DisplayTodos"))
// const EditTodoPage = lazy(() => import("./pages/Todos/EditTodo"))
const AddTodoPage = lazy(() => import("./pages/Todos/AddTodo"))

const routers = [
    { path: "/", element: <LoginPage /> },
    { path: "/register", element: <SignUpPage /> },
    { path: "/home", element: <DisplayTodosPage /> },
    // { path: "/edit/:id", element: <EditTodoPage /> },
    { path: "/addTodo", element: <AddTodoPage /> }
]

export default routers;