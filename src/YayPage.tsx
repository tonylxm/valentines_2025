import love from '../public/love.gif'
import heartShower from '../public/heart-shower.gif'

function YayPage() {
  return (
    <div>
      <img className="heart-shower-gif" src={heartShower} alt="Heart shower GIF" />
      <img className="love-gif" src={love} alt="I love you GIF" />
    </div>
  );
}

export default YayPage;
