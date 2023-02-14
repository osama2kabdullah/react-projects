import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="footer-image-bg">
      <div className="footer p-16 flex justify-between px-12">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      </div>
      <div className="p-5 text-center">
      Copyright {year} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
