import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import { Hero, Navbar} from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
