import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <>
        <Sidebar />
        <main>
            <Home />
            <About />
            <Portfolio />
        </main>

    </>
  );
}

export default App;
