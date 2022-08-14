import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./Components/Home";

import BookLayout from "./Components/BookLayout";
import BookRoutes from "./Components/BookRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/books" element={<h1> Extra Content </h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/books"> Book List </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/books" element={<BookList />} /> */}
        {/* <Route path="/books/:id" element={<Book />} /> */}

        {/* <Route path="/books/new" element={<NewBook />} /> */}

        {/* <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}

        {/* bisa jadi yang bawah */}

        <Route path="/books/*" element={<BookRoutes />} />

        <Route path="*" element={<h1> Not Found </h1>} />
      </Routes>
    </>
  );
};

export default App;
