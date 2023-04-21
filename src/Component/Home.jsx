import '../Component/home.css'
import Bajrang from "../Component/img/bajrang.jpg"


function Home() {
  return (
    <div>
      
      <div id='detail'>
        <h1 id='h'>Hello Guy's this is your Friend list DataBase</h1>
        <p> where u acn create friend data and Secure it</p>
      </div>

     <hr></hr>

     <div id='i'>
        <img id='imgg' src={Bajrang}></img>
     </div>



    </div>
  );
}

export default Home;