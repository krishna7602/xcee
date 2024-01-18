import React from "react";

export default function Home() {
  return (
    <>
      <div className="homejs">
        <div className="home">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h3 class="animate-charcter">WELCOME <span>TO</span> XCEED</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description">Where the world’s content creators go to inspire each other</div>
        <div className="registerwithus"><button id="registernow">REGISTER NOW</button></div>
        <div className="free">FREE ADMISSION BEFORE OCT. 1</div>

      <div className="aboutdescription">
        <div id="when">FEBRUARY 6-9</div>
        <div id="location">ONLINE</div>
        <div id="who">AMAZING SPEAKERS+YOU</div>
      </div>

      <div className="listitems">
        <li>3 DAYS</li>
        <li>40+ SPEAKERS</li>
        <li>100% VIRTUAL</li>
      </div>
    </>
  );
}
