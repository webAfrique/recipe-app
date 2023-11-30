import { Link } from "react-router-dom";

const Card = ({ image, title, id }) => {
  return (
    <div className="card">
      <div className="title"> {title}</div>
      <div>
        <img className="image" src={image} alt={title} />
      </div>
      <Link to={`/recipes/${id}`}>
        <button>View Recipe</button>
      </Link>
    </div>
  );
};

export default Card;

/*
<div className="inst">
        <div className="ing">
          <div>
            Ingredient:
            {ingredients.map((item) => {
              return (
                <p className="item" key={id}>
                  {`${item}, `}
                </p>
              );
            })}
          </div>
          <div>Time: {est_time} min</div>
        </div>
        {instructions}
      </div>
 */
