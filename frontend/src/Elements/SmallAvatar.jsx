import { Link } from "react-router-dom";
import "./SmallAvatar.sass";
import {useNavigate} from "react-router-dom";

function SmallAvatar({ src, path, text, percent, id }) {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("click");
    navigate("/compare/:id")
    console.log("click");
  }

  return (
    <Link to={`/compare/${id}`} className="small-avatar-container" >
      {src ? (
        <img  src={src} alt="small user avatar"  className="img-small-avatar" />
      ) : (
        <svg
          width="448"
          height="512"
          viewBox="0 0 448 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="img-small-svg" onClick={handleClick}
        >
          <path
            d="M224 256C294.7 256 352 198.7 352 128C352 57.3 294.7 0 224 0C153.3 0 96 57.3 96 128C96 198.7 153.3 256 224 256ZM178.3 304C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3C434.7 512 448 498.7 448 482.3C448 383.8 368.2 304 269.7 304H178.3Z"
            fill="#FFE600"
          />
        </svg>
      )}

      {text ? <span className="small-avatar-text">{text}</span> : <span className="small-avatar-percent">{percent}</span>}
      {id && <span className="small-avatar-text">ID: {id}</span>}
    </Link>
  );
}

export default SmallAvatar;
