
import './App.css'
import Search from './Search'
import Card from './Card'
import { useGlobalContext } from './Context';

function App() {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }
  return (
    <>

     {/* <div className="full-page " style={{"height":"100vh","backgroundColor":"#cfcfcf"}}> */}
     <div className="full-page " style={{"height":"100vh","backgroundImage":`url(https://t3.ftcdn.net/jpg/05/80/90/24/360_F_580902442_xmjBIVys6czucJ4T8JgbSxh6h7EAAn1P.jpg)`, }}>
     <div className=" text-center fs-1 fw-bold mb-2 py-4 text-white "> WeatherFry</div>

     {/* main container */}
     <div className="container d-flex" >
    <Search/>
    <Card/>
    </div>
     </div>
    </>
  )
}

export default App
