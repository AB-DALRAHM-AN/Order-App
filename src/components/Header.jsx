import { useContext } from 'react'
import LogoImg from '../assets/logo.jpg'
import { Button } from './UI/Button'
import { CartContext } from '../app/CartContext'

export const Header = () => {
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity
  } , 0)

  return (
    <header id="main-header">
      <div id='title'>
        <img src={LogoImg} />
        <h1>Food Order App</h1>
      </div>
      <div>
        <Button textOnly >{`Cart (${numberOfCartItems})`}</Button>
      </div>
    </header>
  )
}
