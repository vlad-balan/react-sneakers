import "./App.scss";

function App() {
  return (
    <div className='wrapper'>
      <div className='header'>
        <div className='container'>
          <div className='header-info d-flex justify-between align-center'>
            <div className='d-flex align-center'>
              <img width={40} height={40} src='./img/logo.png' alt='logo' />
              <div className='ml-20'>
                <h1 className='header-title'>REACT SNEAKERS</h1>
                <p className='header-subtitle'>Магазин лучших кроссовок</p>
              </div>
            </div>
            <div className='d-flex align-center'>
              <img
                className='mr-10 cu-p'
                width={20}
                height={20}
                src='./img/cart.svg'
                alt='корзина'
              />
              <p className='header-cart-count mr-30 cu-p'>1205 руб.</p>
              <img
                className='mr-30 cu-p'
                width={20}
                height={20}
                src='./img/favorite.svg'
                alt='Понравившиеся'
              />
              <img
                className='cu-p'
                width={20}
                height={20}
                src='./img/user.svg'
                alt='Пользователь'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='home'>
          <div className='slider mt-40'>slider</div>
          <div className='market'>
            <div className='d-flex justify-between mb-40'>
              <h2>Все кроссовки</h2>
              <div className='search-block'>
                <img src='./img/search.svg' alt='поиск' />
                <input className='search-field' placeholder='Поиск...'></input>
              </div>
            </div>

            <div className='showcase d-flex justify-between flex-wrap'>
              <div className='card'>
                <img src='./img/heart-liked.svg' alt='favorite' />
                <div className='d-flex flex-column'>
                  <img
                    width={133}
                    src='./img/sneakers-card_1.jpg'
                    alt='кроссовки'
                  />
                  <h3>Мужские Кроссовки Nike Blazer Mid Suede</h3>
                </div>
                <div className='d-flex justify-between align-center mt-15'>
                  <div className='card-price d-flex flex-column'>
                    <span>Цена</span>
                    <b>12000 р.</b>
                  </div>
                  <button className='button cu-p'>
                    <img
                      width={11}
                      height={11}
                      src='./img/plus.svg'
                      alt='добавить в корзину'
                    />
                  </button>
                </div>
              </div>

              <div className='card'>
                <img src='./img/heart-liked.svg' alt='favorite' />
                <div className='d-flex flex-column'>
                  <img
                    width={133}
                    src='./img/sneakers-card_1.jpg'
                    alt='кроссовки'
                  />
                  <h3>Мужские Кроссовки Nike Blazer Mid Suede</h3>
                </div>
                <div className='d-flex justify-between align-center mt-15'>
                  <div className='card-price d-flex flex-column'>
                    <span>Цена</span>
                    <b>12000 р.</b>
                  </div>
                  <button className='button cu-p'>
                    <img
                      width={11}
                      height={11}
                      src='./img/plus.svg'
                      alt='добавить в корзину'
                    />
                  </button>
                </div>
              </div>

              <div className='card'>
                <img src='./img/heart-liked.svg' alt='favorite' />
                <div className='d-flex flex-column'>
                  <img
                    width={133}
                    src='./img/sneakers-card_1.jpg'
                    alt='кроссовки'
                  />
                  <h3>Мужские Кроссовки Nike Blazer Mid Suede</h3>
                </div>
                <div className='d-flex justify-between align-center mt-15'>
                  <div className='card-price d-flex flex-column'>
                    <span>Цена</span>
                    <b>12000 р.</b>
                  </div>
                  <button className='button cu-p'>
                    <img
                      width={11}
                      height={11}
                      src='./img/plus.svg'
                      alt='добавить в корзину'
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
