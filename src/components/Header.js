import React from 'react';
import { useHistory } from 'react-router';
//import { Link, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';
import Login from './Login';

const Header = () => {
  const history = useHistory();
  const authToken = localStorage.getItem(AUTH_TOKEN);

  function clickLogout(){
    history.push("/login")
  }
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">

        
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/create" className="ml1 no-underline black"> Modificar CV</Link>
        </div>
        )}

      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              clickLogout()
              window.location.reload()

            }}
          >
            Salir
          </div>
        ) : (
          <Link to="/login" className="ml1 no-underline black" > Ingresar </Link>
          
        )}
        
      </div>
    </div>












  );
};

export default Header;
