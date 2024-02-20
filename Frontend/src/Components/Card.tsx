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
          <p>{value.icon}</p>
          <p>{value.info}</p>
          <p>{value.cardname}</p>
          <button className="card-btn">{value.button}</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
