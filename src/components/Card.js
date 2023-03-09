function Card(props) {
  return (
    <>
      <button className="card__trash button-hover"></button>
      <img
        className="card__pic"
        src={props.card.link}
        alt={props.card.name}
        onClick={() => props.onCardClick(props.card)}
      />
      <div className="card__info">
        <p className="card__name">{props.card.name}</p>
        <div className="card__likes">
          <button className="card__like button-hover"></button>
          <p className="card__likes-number"></p>
        </div>
      </div>
    </>
  )
}

export default Card;
