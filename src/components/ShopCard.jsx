export const ShopCard = (data) => {
  return (
    <div className={data.class}>
      <img src={data.card.img} />
      <span>{data.card.name}</span>
      <span>{data.card.price}</span>
      <span>{data.card.color}</span>
    </div>
  )
}
