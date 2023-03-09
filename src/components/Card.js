function Card({card, onCardClick}) {
  return (
    <li className="card">
      <button className="card__trash button-hover" />
      <img
        className="card__pic"
        src={card.link}
        alt={card.name}
        onClick={() => onCardClick(card)}
      />
      <div className="card__info">
        <p className="card__name">{card.name}</p>
        <div className="card__likes">
          <button className="card__like button-hover" />
          <p className="card__likes-number">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
