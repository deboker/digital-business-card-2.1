import React from "react"
import { FaTwitterSquare, FaFacebookSquare, FaInstagram, FaLinkedin, FaGithubSquare } from 'react-icons/fa'


export default function Footer() {
    return (
      <div className="footer-images">
        <a href="https://twitter.com/AndrasikAndrej">
          <FaTwitterSquare />
        </a>
        <a href="https://www.facebook.com/andrej.andrasik.7">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/a__andrej_/">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/andrej-andrasik-542091aa/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/deboker">
          <FaGithubSquare />
        </a>
      </div>
    );
  }