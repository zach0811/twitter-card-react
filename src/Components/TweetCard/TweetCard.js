import "./TweetCard.css";
import logo from "../../Resources/logo.png";
import me from "../../Resources/poster.png";
import hc from "../../Resources/hc.jpeg";
import checkmark from "../../Resources/checkmark.png";
import bird from "../../Resources/bird.png";

export const TweetCard = () => {
  return (
    <div className="card">
      <div className="container">
        <div className="top-row">
          <div className="heading">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="title">
              <span>
                <h1 className="name">Avis Car Rental</h1>
                <img className="checkmark" src={checkmark} alt="" />
              </span>
              <h1 className="tag">@Avis</h1>
            </div>
          </div>
          <div className="bird">
            <img src={bird} alt="" />
          </div>
        </div>

        <div className="post">
          <p>
            Do you love burpees? Have you never been to Rubicon? Wanna do
            something hard? If that's you in any way, punch that{" "}
            <img src={hc} alt="" />! This Thursday we're partnering with AO
            Rubicon and Beach Body By Avis&trade; to bring you Avis' Beachbody
            and Burpee Birthday Bash!
          </p>
          <div className="hashtags">
            <span>#beachbodystartstoday</span>
            <span>#unlessyouownaboat</span>
            <span>#burpeessavelives</span>
          </div>
        </div>
        <div className="me">
          <img src={me} alt="" />
        </div>
        <div className="date-time">
          <span>12:00 PM Aug 26, 1990</span>
        </div>
        <hr className="line" />
        <div className="likes">
          <span>
            <strong>150</strong> Reposts <strong>150</strong> Likes
          </span>
        </div>
        <hr className="line" />
        {/* <div className="icons">
            <span>
              <div className="icon-container">
                <img src={bookmark} alt="" />
                <img src={bookmark} alt="" />
                <img src={bookmark} alt="" />
                <img src={bookmark} alt="" />
                <img src={bookmark} alt="" />
              </div>
            </span>
          </div> */}
        {/* <hr className="line" /> */}
      </div>
    </div>
  );
};
