import Sreach from "./components/Sreach"
import Table from "./components/Table"
import Sidebar from "./components/utils/Sidebar"

function App() {

  return (
    <>
      <Sidebar>
        <div className="p-[15px]">  
          <Sreach />
          <Table />
        </div>
      </Sidebar>
    </>
  )
}

export default App
