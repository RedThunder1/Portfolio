import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';

function App() {
  return (
    <>
        <Sidebar />
        <Loading />
        <main id="main">
            <Home />
            <About />
            <Portfolio />
            <Footer />
        </main>

    </>
  );
}

export default App;
