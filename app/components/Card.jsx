export default function Card({restaurant}) {
  const {restaurant: local} = restaurant
  return (
    <div className="card">
      <div className="card__photo-wrapper">
            <img
            className="card__photo"
            src={local.thumb}
            alt="restaurant"
            />
      </div>
      <div className="card__text-wrapper">
            <h3 className="card__name">{local.name}</h3>
            <p>{local.location.address}</p>

            <Star numberStars={local.user_rating.aggregate_rating}/>
            

            
            <div className="card__button-wrapper">
              <span className="card__price">R$ {local.average_cost_for_two}</span>
              <span className="card__country">{local.cuisines}</span>
            </div>
      </div>
    
    </div>
  );
}

export function Star({numberStars}) {

  if (numberStars >= 1 && numberStars < 2 && numberStars !== "") {
    return <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
  }
  else if (numberStars >= 2 && numberStars < 3 && numberStars !== "") {
    return (
      <>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
      </>
    )
  }
  else if (numberStars >= 3 && numberStars < 4 && numberStars !== "") {
    return (
      <>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
      </>
    )    
  }
  else if (numberStars >= 4 && numberStars < 5 && numberStars !== "") {
    return (
      <>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
      </>
    )
  }
  else if (numberStars >= 5) {
    return (
      <>
       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
      </>
    )
  }
  else if (numberStars == "0") {
    return (
      <svg style={{visibility: "hidden"}} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="#39b54a" stroke="#39b54a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="m132.4 190.7 50.4 32c6.5 4.1 14.5-2 12.6-9.5l-14.6-57.4a8.7 8.7 0 0 1 2.9-8.8l45.2-37.7c5.9-4.9 2.9-14.8-4.8-15.3l-59-3.8a8.3 8.3 0 0 1-7.3-5.4l-22-55.4a8.3 8.3 0 0 0-15.6 0l-22 55.4a8.3 8.3 0 0 1-7.3 5.4l-59 3.8c-7.7.5-10.7 10.4-4.8 15.3L72.3 147a8.7 8.7 0 0 1 2.9 8.8L61.7 209c-2.3 9 7.3 16.3 15 11.4l46.9-29.7a8.2 8.2 0 0 1 8.8 0Z"/></svg>
    )
  }  
}

