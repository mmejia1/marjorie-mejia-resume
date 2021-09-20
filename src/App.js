import logo from './logo.png';
import './App.css';
//functional component

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>
          Welcome to my site!! Please Be patient website under construction.
        </h1>
        <p>my passion for learning led me to Grace Hopper. </p>
        <h3>
          Experience:
          <p>
            Kiki’s Recipe https://github.com/graceHackers/recipe_graphQL React,
            Bootstrap, GraphQL
            <li>
              An app that allows users to explore recipes using ingredients
              already available to the users  Created front end with react in a
              clear, organized way  Implemented bootstrap for a user friendly
              design  Utilized GraphQL to make querying more data specific
              Scrapplr https://github.com/team-antheia/scrapplr firebase,
              webpack, react, redux, HTML, CSS ● Social scrapbook app that
              allows users to keep all of their special moments in collections
              all in one place allowing ● Constructed front-end with interactive
              map that users of the scrapbook app can utilize ● Incorporated
              Google maps with react to render users preferred locations
            </li>
          </p>
        </h3>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
