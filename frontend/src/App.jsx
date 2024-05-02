import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditBook from "./pages/editBook";
import ShowBook from "./pages/showBook";
import DeleteBook from "./pages/deleteBook";
import CreateBooks from "./pages/createBooks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
}

export default App;