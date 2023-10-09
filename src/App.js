import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ToDos from './components/ToDos';
import EditToDos from './components/EditToDos';
import AdminView from './components/AdminView';
import Navbar from './components/Navbar';
import EditAdmin from './components/EditAdmin';
import AddAdmin from './components/AddAdmin';
import Home from './components/Home';
import AddTodos from './components/AddTodos';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />
        <Home />
      </>
    },
    {
      path: "/todos",
      element: <>
        <Navbar />
        <h1>React Redux To Dos App</h1>
        <ToDos />
      </>
    },
    {
      path: "/edit",
      element: <>
        <Navbar />
        <EditToDos />
      </>
    },
    {
      path: "/isAdmin",
      element: <>
        <Navbar />
        <AdminView />
      </>
    },
    {
      path: "/edit-admin",
      element: <>
        <Navbar />
        <EditAdmin />
      </>
    },

    {
      path: "/add-admin",
      element: <>
        <Navbar />
        <AddAdmin />
      </>
    },
    {
      path: "/add-todos",
      element: <>
        <Navbar />
        <AddTodos />
      </>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// step1: install packages
// step2: constants define
// step3: async action create
// step4: reducer
// step5: create store
// step6: provide store
// step7: use store
// step8: adding css
