import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts.jsx";
import AboutMe from "./components/AboutMe.jsx";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { themes, ThemeContext } from "./themeContext";

const App = () => {
  const theme = useState(themes.orange);
  const [currentTheme] = theme;

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <ErrorBoundary>
          <div
            className='content'
            style={{
              background: currentTheme.backgroundColor,
            }}
          >
            <Header />
            <main>
              <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<Main />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/aboutMe' element={<AboutMe />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
