import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import data from "./provided.json"

function App() {
  return (
    <div className="App">
      <Header />
      <Main 
      data={data}
      />
      <Footer />
    </div>
  );
}

export default App;