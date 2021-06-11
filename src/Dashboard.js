import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import { logout } from "./features/userSlice";
import { useDispatch } from "react-redux";

function Dashboard() {
    const dispatch = useDispatch();
    const taskobj = useSelector((state) => state.todos.data);
    const handleLogout =(e) => {
        e.preventDefault();
        dispatch(logout());

    };
    
    return (
      <div className='App'>
        <h1>Todo Application: Remaining Tasks: {taskobj.length}</h1>
        <button className="logout-btn" type="submit" onClick={(e)=> handleLogout(e)}><i class="fas fa-sign-out-alt"></i></button>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
  
  export default Dashboard;
  