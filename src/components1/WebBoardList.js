import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function WebBoardList(props) {
  const data1 = {
    bno: 1,
    title: "첫번째 글",
    contents: "React 시작",
    writer: "태영1",
  };
  const data2 = {
    bno: 2,
    title: "두번째 글",
    contents: "Spring 시작",
    writer: "태영2",
  };
  const data3 = {
    bno: 3,
    title: "세번째 글",
    contents: "Node 시작",
    writer: "태영3",
  };
  const data_arr = [data1, data2, data3];
  console.log(data_arr);
  return (
    <div>
      <Button as="input" type="button" value="Input" />
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <table>
        <thead>
          <tr style={{ backgroundColor: "orange" }}>
            <th>bno</th>
            <th>title</th>
            <th>contents</th>
            <th>writer</th>
          </tr>
        </thead>
        <tbody>
          {data_arr.map((item, index) => (
            <tr key={index} style={{ backgroundColor: "lightpink" }}>
              <td>{item.bno}</td>
              <td>{item.title}</td>
              <td>{item.contents}</td>
              <td>{item.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default WebBoardList;
