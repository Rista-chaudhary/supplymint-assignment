/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import './styles.css';

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid  mx-sm-5">
          <a className="navbar-brand fw-500" href="/">
            <img src={logo} alt="" className="me-2" />
            Supplymint
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={()=>setShowMenu(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-none d-sm-block">
            <div className="d-flex">
              <div className="me-4 d-flex  flex-column align-items-end">
                <div className="d-flex gap-5">
                  <div className="text-muted fw-400 p-2">
                    Call us +911234567890
                  </div>
                  <div className="text-muted fw-400 p-2">B2B Marketplace</div>
                  <div className="text-muted fw-400 p-2">Sign In</div>
                </div>

                <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle text-black"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Solutions
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="/">
                          Solution 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Solution 2
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Solution 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black">Pricing</a>
                  </li>
                </ul>
              </div>
              <button
                className="btn btn-dark align-self-center px-4 py-2"
                type="submit"
              >
                Get Demo
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className={"bg-white position-fixed top-0 bottom-0 start-0 end-0 p-4 navbar__mweb-overlay "+(showMenu && 'show')}>
        <div className="btn-close position-absolute end-0 top-0 m-4" onClick={()=>setShowMenu(false)} />

        <div className="d-flex flex-column h-100 justify-content-between1">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle text-black"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Solution 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Solution 2
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Solution 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted">Call us +911234567890</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted">B2B Marketplace</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted">PricSign Ining</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
