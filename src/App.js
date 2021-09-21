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
        <div>
          <h3>Who is Marjorie?</h3>
          <p>
            I am a mother who loves traveling the world with my daughter. Prior
            to software engineering I was a nanny. Although I love working with
            children, I finally had the opportunity to pursue my passion for
            software engineering. My passion for learning led me to the grace
            Hopper Program at Full Stack Academy. There, I was able to further
            develop my problem solving, communication and engineering skills.
            For the future I plan on taking these skills with me all over the
            world and potentially implement them in both a work setting and a
            school setting.
          </p>
        </div>
        <h3>my passion for learning led me to Grace Hopper.</h3>
        <h3>Projects:</h3>
        <p>
          Kiki’s Recipe https://github.com/graceHackers/recipe_graphQL React,
          Bootstrap, GraphQL
        </p>
        <ul>
          <li>
            An app that allows users to explore recipe ingredients already
            available to the users
          </li>
          <li>Created front end with react in a clear, organized way</li>
          <li> Implemented bootstrap for a user friendly design</li>
          <li> Utilized GraphQL to make querying more data specific</li>
        </ul>

        <p>
          Scrapplr https://github.com/team-antheia/scrapplr firebase, webpack,
          react, redux, HTML, CSS{' '}
        </p>
        <ul>
          <li>
            {' '}
            Social scrapbook app that allows users to keep all of their special
            moments in collections all in one place allowing
          </li>
          <li>
            Constructed front-end with interactive map that users of the
            scrapbook app can utilize
          </li>
          <li>
            Incorporated Google maps with react to render users preferred
            locations
          </li>
        </ul>

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
