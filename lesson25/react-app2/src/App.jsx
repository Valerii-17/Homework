import Header from './components/Header';
import SearchForm from './components/SearchForm';
import Result from './components/Result';
import './index.css';


function App() {
    return (
        <main className="container">
            <Header />
            <SearchForm />
            <Result />
        </main>
    );
}


export default App;
