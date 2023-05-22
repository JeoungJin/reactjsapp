import React from "react";

export function MyNavigation(props) {
  console.log("MyNavigation.js.......MyNavigation component");
  return (
    <div>
      <nav>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export const myscore = 100;
export function MyNavigation2() {
  return (
    <div>
      <p>나의 점수공개 : {myscore}</p>
      <p>MyNavigation파일에 있는 MyNavigation2메서드</p>
    </div>
  );
}
