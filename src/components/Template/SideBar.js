import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Keagan Chasenski</h2>
        <p>
          <a href="mailto:k.chasenski@gmail.com">k.chasenski@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Keagan. Keags if we&apos;ve met. I am a{' '}
        <a href="https://ebe.uct.ac.za/">University of Cape town</a> Electrical and computer Engineering graduate,
        born and raised in South Africa. I currently work as a safari guide at <a href="https://www.londolozi.com/">Londolozi Private Game Reserve. </a>
        When I am not out in the bush, I enjoy exploring the world fintech and AI,
        where I have a few exciting projects brewing.
        I am also a passionate photographer.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Keagan Chasenski @2025 <Link to="/">keaganchasenski.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
