import React from 'react';
import './App.css';

// CSS
import './css/animated_bg.css';
import { H1, H2, P, Button } from './components/Components';

function App() {
  return (
    <div className="App">
      <header>
        {/* animated background */}
        <div className="area" title='area'>
          <ul className="circles">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
          </ul>
        </div >

        <div className="header-content">
          <H1 text={'Boost Your Productivity'} />
          <P className={'header-p'} text={'Track tasks, set goals, and get insights—all in one place.'} />
          <Button 
            text={'Get Started'}
            className={'getStartedBtn'}
          />
        </div>
      </header>

      <main>
        <article className='card'>
          <H2 text={'Task Management'} />
          <P className={'card-p'} text={'Task Management'} />
        </article>

        <article className='card'>
          <H2 text={'Goal Tracking'} />
          <P className={'card-p'} text={'Goal Tracking'} />
        </article>

        <article className='card'>
          <H2 text={'Calendar Integration'} />
          <P className={'card-p'} text={'Calendar Integration'} />
        </article>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
