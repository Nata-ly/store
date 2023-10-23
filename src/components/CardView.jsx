import { ShopCard } from './ShopCard'

export const CardView = (state) => {
  console.log(state.class);

  return (
    <>
      {state.cards.map(card => (
        <ShopCard card = {card} class = {state.class} />
      ))}
    </>
  )
}
