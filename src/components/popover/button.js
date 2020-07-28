import React from "react";

export const SocialButton = (props) => {
  console.log(props);
  return (
    <div className="socialButton">
      <a
        href={props.link}
        target="_blank"
        title={props.title}
        class="btn btn-sm"
      >
        <img
          class="siteImg"
          src={require(props.image)}
          alt={props.title}
        />
      </a>
    </div>
  );
};
