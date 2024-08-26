import React from "react";
import img from "../../../public/deadpool.png";
function HiThere() {
  return (
    <div className="HiThere">
      <div className="hiThereText">
        <h1
          style={{
            position: "relative",
            fontFamily: "serif",
            fontSize: "10rem",
            color: "white",
            fontStyle: "italic",
            zIndex: "0",
            top: "1.3rem",
          }}
        >
          Hi There,
        </h1>
      </div>
      <div className="deadpoolImg">
        <img src={img} alt="DeadPool" />
      </div>

      <div className="letsTalk">
        <h1>Let's talk about TMDB</h1>
        <p>
          The Movie Database (TMDB) is a community built movie and TV database.
          Every piece of data has been added by our amazing community dating
          back to 2008. TMDB's strong international focus and breadth of data is
          largely unmatched and something we're incredibly proud of. Put simply,
          we live and breathe community and that's precisely what makes us
          different.
        </p>
      </div>
      <div className="advantage">
        <h1>The TMDB advantage</h1>
        <div>
          <h1>1</h1>
          <p>
            Every year since 2008, the number of contributions to our database
            has increased (check out our last years wrap!) With over 1,500,000
            developers and companies using our platform, TMDB has become a
            premiere source for metadata.
          </p>
        </div>
        <div>
          <h1>2</h1>
          <p>
            Along with extensive metadata for movies, TV shows and people, we
            also offer one of the best selections of high resolution posters and
            fanart. On average, over 1,000 images are added every single day.
          </p>
        </div>
        <div>
          <h1>3</h1>
          <p>
            We're international. While we officially support 39 languages we
            also have extensive regional data. Every single day TMDB is used in
            over 180 countries.
          </p>
        </div>
        <div>
          <h1>4</h1>
          <p>
            Our community is second to none. Between our staff and community
            moderators, we're always here to help. We're passionate about making
            sure your experience on TMDB is nothing short of amazing.
          </p>
        </div>
        <div>
          <h1>5</h1>
          <p>
            Trusted platform. Every single day our service is used by millions
            of people while we process over 3 billion requests. We've proven for
            years that this is a service that can be trusted and relied on.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HiThere;
