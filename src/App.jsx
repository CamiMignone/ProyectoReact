import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarComponent from './components/NavbarComponent'
import { useState} from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavbarComponent/>
      <ItemListContainer greeting='Bienvenidos al shop' />
    </div>
  )
}

export default App
