import React from 'react';
import background from '../src/Humaaans - Space.png';

function GlassUI() {
  return (
    <div>
      <div>
        <section>
          <div className="page">
            <header>
              <a href="#" className="logo">
                Logo
              </a>
              <ul>
                <li>
                  <a href="#" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
              </ul>
            </header>
            <div className="content">
              <h2>Glasmorphism in React</h2>
              <p>
                Ever since Glassmorphism entered the mainstream It has been adopted by
                Microsoft and Windows and a host of others. Glassmorphism has gone on to
                become the go-to UI design.
              </p>
              <a href="#">Learn more</a>
            </div>
            <div>
              <img src={background}></img>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default GlassUI;
