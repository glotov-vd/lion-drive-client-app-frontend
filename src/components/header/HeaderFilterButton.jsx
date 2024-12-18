import {Link} from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const HeaderFilterButton = ({btn}) => {
  return (
    <div className="button">
      <Link to={btn.href}>
        <div className="button-inner">
          {btn.text}
          <ArrowOutwardIcon className="icon"/>
        </div>
      </Link>
    </div>
  );
}

export default HeaderFilterButton;