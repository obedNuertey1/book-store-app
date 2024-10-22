import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AddBook from "./components/Book/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetails from "./components/Book/BookDetails";

const App = ():JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add" element={<AddBook />}/>
          <Route path="/books" element={<Books />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/books/:id" element={<BookDetails />}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
