import { Link, useParams } from 'react-router-dom';

import '../css/Header.css'


const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);

  return <Link to={`/${page}`} className='headerlink-title'>{title}</Link>;
};

const Header = () => {
    const page = useParams().page || 'home';
    return (
      <div className='header'>
        <HeaderLink page='Home' selected={page === 'home'}/>
        <HeaderLink page='Task' selected={page === 'task'}/>
        <HeaderLink page='Users' selected={page === 'users'}/>
        <HeaderLink page='companyDetails' selected={page === 'companyDetails'}/>
        <HeaderLink className="signUp" page='signup' selected={page === 'signup'}/>
      </div>
    );
  };
  
  export default Header;