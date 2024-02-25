import '../Styles/Card.css';

interface CardInfo {
  icon: string;
  info: string;
  cardname: string;
  button: string;
}

interface CardInfoObject {
  [key: string]: CardInfo;
}

const Card = ({ cardInfo }: { cardInfo: CardInfoObject }) => {
  return (
    <div className='card-container'>
      {Object.entries(cardInfo).map(([key, value]) => (
        <div className='card' key={key}>
          <h1>{value.icon}</h1>
          <h3>{value.cardname}</h3>
          <p>{value.info}</p>
          {/* <button className="card-btn">{value.button}</button> */}
        </div>
      ))}
    </div>
  );
};

export default Card;
