import React from 'react';
import Shoes from './Database';
import { useState } from 'react';
import './styles.css';


function App() {

  const [search, setSearch] = useState("")

  const [product, setProduct] = useState(Shoes)

  // const [blur, setBlur] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setProduct(
      Shoes.filter((item) => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
    )
  }

  // const handleBlur = () => {
  //   setBlur()
  // }

  return (
    <>
      <div className='header'>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
          <input
            onChange={handleSearch}
            value={search}
            // onBlur={handleBlur}
            type="text"
            class="form-control"
            aria-label="Пример размера поля ввода"
            aria-describedby="inputGroup-sizing-default" />
        </div>
      </div>
      <div className="App">
        {product.map((item) => {
          return (
            <>
              <div className='main'>
                <div class="shadow p-3 mb-5 bg-body rounded">
                  <div className='card'>
                    <img key={item.id} className='images' src={item.img} alt={item.name} />
                    <div className='nameNprice'>
                      <div className='names'>{item.name}</div>
                      <div className='btnDiv'>
                        <button className='btnButton'>{item.details}</button>
                      </div>
                      <div className='price'>{item.price}</div>
                    </div>
                    <div>
                      <hr className="line" />
                    </div>
                    <div className='cardFooter'>
                      <p className='footerText'>{item.info}</p>
                    </div>
                    <button type="button" class="btn btn-success">Добавить в корзину</button>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  );
}

export default App;