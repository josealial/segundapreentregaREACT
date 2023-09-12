import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, imagen, price, stock }) => {

  return (
    
    <article className="ItemCard">
      <header className='Header'>
        <h2 className='name'>
          {name}
        </h2>
      </header>
      <picture>
        <img src={imagen} alt={name} />
      </picture>
      <section>
        <p>
          Precio: ${price}
        </p>
        <p>
          Stock Disponible: {stock}
        </p>
      </section>
      <footer>
        <Link to={`/item/${id}`} className='Option'> Ver detalle </Link>
      </footer>
    </article>
    
  )
}

export default Item
