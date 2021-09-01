import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React from "react";
import Ticket from "./components/Ticket";
import RaffleDraw from "./components/RaffleDraw";


function App() {


  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light m-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src={require("./images/logo.448e3bcd.svg").default} height="40" width="40" alt="logo" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <form class="d-flex search-bar">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Browse</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Discover</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Mint an Item</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Vote/DAO</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My Account
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><a class="dropdown-item" href="#">Logout </a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Ethereum
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Zilliqa</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="content-container">

        <div className="row">
          <div className="ticket-column col-lg-5 col-sm-12">
            <Ticket />
          </div>
          <div className="raffle-column col-lg-7 col-sm-12">
            <RaffleDraw />
          </div>
        </div>
      </div>
      <div className="footer p-3">
        <footer className="row mt-3">
          <div className="col">
            <a href="#" class="d-flex align-items-center footer-link">
              <img src={require("./images/logo.448e3bcd.svg").default} height="40" width="40" alt="logo" /> Mintable
            </a>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a class="footer-link nav-link p-0" href="#">Join Our Community</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Need Help?</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class=" footer-link nav-link p-0">FAQ</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="footer-link nav-link p-0">Mintable Guide</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Buy An Item</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="footer-link nav-link p-0">Digital Item</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="footer-link nav-link p-0">Stores</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Legal</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="footer-link nav-link p-0">Privacy Policy</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="footer-link nav-link p-0">Terms Of Use</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
