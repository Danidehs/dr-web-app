import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar'; 

function MyApp({ Component, pageProps }) {
    return (
      <div>
        <NavBar /> {/* NavBar component */}
        <Component {...pageProps} />
      </div>
    );
  }

export default MyApp;