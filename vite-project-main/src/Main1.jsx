import { Link } from "react-router-dom";

function Main1 () {
    return <>
    <header>
        <div className="wraper">
          <div className="header_wraper">
            <div className="log">
                <Link to='/'><img src='img\Group.png' alt="" /></Link>
              
            </div>
            <div className="link"> 
                <Link to='/About'>О шоколаде</Link>
                <Link to='/Products'>Продукция</Link>
                <Link to='/'>Производство</Link>
                <Link to='/'>Достижения</Link>
                <Link to='/'>Новости</Link>
                <Link to='/Documentation'>Документация</Link>
                <Link to='/Contacts'>Контакты</Link>
            </div>
          </div>
          <div className="heder_logo_text">
            <p>
              СЛАДКО ТАМ
              <br />
              ГДЕ МЫ
            </p>
          </div>
        </div>
      </header>
    </>
}

export default Main1;




<header>
    <div className="wraper">
        <div className="header_wraper">
            <div className="log">
                <Link to='/'><img src='img\Group.png' alt="" /></Link>
            </div>
            <div className="link"> 
                <Link to='/About'>О шоколаде</Link>
                <Link to='/Products'>Продукция</Link>
                <Link to='/'>Производство</Link>
                <Link to='/'>Достижения</Link>
                <Link to='/'>Новости</Link>
                <Link to='/Documentation'>Документация</Link>
                <Link to='/Contacts'>Контакты</Link>
            </div>
        </div>
    </div>
</header>
