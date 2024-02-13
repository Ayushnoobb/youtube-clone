import AppRouter from "./AppRouter"
import "./App.css"
import { AuthProvider } from "./Auth"

const App = () =>{
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}

export default App