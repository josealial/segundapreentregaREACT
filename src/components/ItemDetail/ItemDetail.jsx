import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
 
const ItemDetail = ({ id, name, imagen, category, description, price, stock }) => {
  return (
    <article className='CardItem'>
      <header className='header'>
        <h2>
          {name}
        </h2>
      </header>
      <picture>
        <img src={imagen} alt={name} className='ItemImg'></img>
      </picture>
      <section>
        <p className='info'>
          categoria: {category}
        </p>
        <p className='info'>
          Descripcion: {description}
        </p>
        <p className='info'>
          precio: ${price}
        </p>
      </section>
      <footer>
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
      </footer>
    </article>
  )
}

export default ItemDetail