import { BiMoviePlay } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer  text-white p-10 rounded-none gap-4 w-8/12 mx-auto">
        <aside>
          <BiMoviePlay className="text-6xl" />
          <p>Screen box</p>
          <p className="text-sm">A New World of Entertainment Awaits</p>
          <nav>
            <div className="flex gap-4 text-3xl">
              <Link to="https://www.facebook.com/">
                <FaFacebook />
              </Link>
              <Link to={"https://x.com/"}>
                <BsTwitterX />
              </Link>
              <Link to={"https://www.youtube.com/"}>
                <FaYoutube />
              </Link>
              <Link to={"https://github.com/"}>
                <FaGithub />
              </Link>
            </div>
          </nav>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <Link className="link link-hover" to="/about">
            About Us
          </Link>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Pricing Plan</a>
          <a className="link link-hover">Faq</a>
        </nav>
        <nav>
          <h6 className="footer-title">Movies to Watch</h6>
          <Link className="link link-hover" to="/all-movie">
            All Movie
          </Link>
          <a className="link link-hover">Featured Movies</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Screen Box
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
