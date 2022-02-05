import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchSearchMovie } from "../../redux/movies/movieSlice";
import "./Navbar.css"

function NavbarComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearchMovie(searchTerm));
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Movie Details</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                className="movie-input"
                placeholder="Search...."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <button className="search-button"> Search </button>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
