import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell'; // Import the Cell component

const Index = () => (
  <Main
    description={
      "Keagan Chasenski's personal website. South Africa based Electrical and Computer Engineering grad, "
      + 'working as a safari guide in the Sabi Sand game reserve. Exploring Fintech, software development, and the outdoors.'
    }
  >
    {/* Use the Cell component to display the hero image */}
    <Cell
      data={{
        title: 'Ndzanzeni Female in Golden Light',
        // subtitle: 'A moment from the Sabi Sand',
        image: '/images/KE_Nkoveni Female golden sunset.JPG',
      }}
    />
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            This is my personal portfolio, a scary way to share myself.
            It is a responsive, statically-generated and beautifully simple react application
            written with modern Javascript, showingcasing some of my photography along the way.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/KeaganChasenski/KeaganChasenski.github.io">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
