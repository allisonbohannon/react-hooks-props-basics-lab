import React from "react";
import Links from "./Links"

function About(props) {

  const bioElement = <p>{props.bio}</p>

  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? bioElement : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedIn={props.links.linkedin} />
    </div>
  );
}

export default About;
