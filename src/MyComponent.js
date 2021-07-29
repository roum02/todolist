import React from "react";
import PropsTypes from "prop-types";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다.
      <br />
      chiledren 값은 {children}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.PropsTypes = {
  name: PropsTypes.string,
};

export default MyComponent;
