export default function Card() {
  return (
    <div className="card">
      <div className="card__photo-wrapper">
        <img
          className="card__photo"
          src="https://b.zmtcdn.com/data/pictures/3/6701443/419fba3adc3c5d1ef789c8514b0e5c54_featured_v2.jpg?fit=around%7C200%3A200&amp;crop=200%3A200%3B%2A%2C%2A"
          alt="restaurant"
        />
      </div>
      <div className="card__text-wrapper">
        <h3 className="card__name">Nome do Restaurante</h3>
        <p>Av. Paulista, 1300 - Jardim Paulista - São Paulo - SP</p>
      </div>
    </div>
  );
}
