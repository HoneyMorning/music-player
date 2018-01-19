import React from 'react';
import Header from './components/Header';
import Player from './components/Player';

/**
 * App root component
 *
 * @return
 */
function App() {
  return (
    <section>
      <Header />
      <div className="container">
        <Player />
      </div>
    </section>
  );
}

export default App;
