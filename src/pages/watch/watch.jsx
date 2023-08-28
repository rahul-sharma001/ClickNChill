import { ArrowBackOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        <Link to ="/"className="link">Home</Link>
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
    </div>
  );
}