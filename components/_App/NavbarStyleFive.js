import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";

const NavbarStyleFive = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const cart = useSelector((state) => state.cart);
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header id="header" className="headroom navbar-style-three">
        <div className="startp-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/it-startup" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/" && "active"
                      }`}
                    >
                      Home 
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about-3/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/about-3/" && "active"
                      }`}
                    >
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Pages <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/features/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/features/" && "active"
                          }`}
                        >
                          Features <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/features/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/features/" && "active"
                              }`}
                            >
                              Features
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/feature-details/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/feature-details/" && "active"
                              }`}
                            >
                              Features Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services-5/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/services-5/" && "active"
                          }`}
                        >
                          Services <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">

                          <li className="nav-item">
                            <Link
                              href="/services-5/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/services-5/" && "active"
                              }`}
                            >
                              Services Style 5
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/service-details/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/service-details/" && "active"
                              }`}
                            >
                              Services Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/feedback/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/feedback/" && "active"
                          }`}
                        >
                          Testimonials
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/projects-2/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/projects-2/" && "active"
                          }`}
                        >
                          Projects <Icon.ChevronDown />
                        </Link>

                        <ul className="dropdown-menu">

                          <li className="nav-item">
                            <Link
                              href="/projects-2/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/projects-2/" && "active"
                              }`}
                            >
                              Portfolio
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/project-details/"
                              onClick={toggleNavbar}
                              className={`nav-link ${
                                currentPath == "/project-details/" && "active"
                              }`}
                            >
                              Project Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/faq/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/faq/" && "active"
                          }`}
                        >
                          FAQ's
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/404/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/404/" && "active"
                          }`}
                        >
                          404 Error Page
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/blog-6/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/blog-6/" && "active"
                      }`}
                    >
                      Blog <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">

                      <li className="nav-item">
                        <Link
                          href="/blog-6/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-6/" && "active"
                          }`}
                        >
                          Blog
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-details/"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentPath == "/blog-details/" && "active"
                          }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              <div className="others-option">

                <Link href="/contact/" className="btn btn-gradient">
							    Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarStyleFive;
