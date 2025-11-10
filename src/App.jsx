import './App.css'
import { store } from "./app/store";
import { SubjectsList } from "./pages/subjectsList/SubjectsList";
import { Provider } from "react-redux";
function App() {
  return (
    <>
   <Provider store={store}>
      <SubjectsList />
    </Provider>
    </>
  )
}

export default App
