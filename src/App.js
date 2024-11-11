import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
        <Sidebar />
        <main>
            <Home />
            <About />
            <Portfolio />
            <Footer />
        </main>

    </>
  );
}

export default App;
