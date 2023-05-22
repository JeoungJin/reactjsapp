import { Header, HeaderF1 } from "./components1/MyHeader";
import {
  MyNavigation,
  myscore,
  MyNavigation2,
} from "./components1/MyNavigation";
import MySection, { MySection2 } from "./components1/MySection";

function App2(props) {
  console.log("myscore=" + myscore);
  var subject = "!!!!";

  console.log(true && "hello"); // hell
  console.log(false && "hello"); // fals
  console.log("hello" && "bye"); // by
  console.log(null && "hello"); // nul
  console.log(undefined && "hello"); // undefine
  console.log("" && "hello"); // '
  console.log(0 && "hello"); //
  console.log(1 && "hello"); // hello

  const score = 200;
  return (
    <div>
      {/* 3항 연산자 */}
      {score >= 100 ? <strong>{score}Good~~~</strong> : <i>{score} 노력!!!</i>}
      {/* //조건부 렌더링 */}
      {score >= 100 && <strong>{score}Good~~~</strong>}

      <h1>{subject ? subject : "3항연산자..결과가false이면 여기"}</h1>
      <h1>{subject && "앞의결과가 참이면 뒤부분을 수행한다."}</h1>
      <p>나의 점수는 {myscore}</p>
      {/* <p>여기:{null} {false} {undefined}</p> */}
      <Header />
      <HeaderF1 />
      <MyNavigation />
      <MyNavigation2 />
      <MySection />
      <MySection2 />
    </div>
  );
}

export default App2;

//export default function aa(){}
//function aa(){} export {aa}
//function aa(){} export default aa
