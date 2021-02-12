import React from "react";
import { Button, Menu, Popup } from "semantic-ui-react";
import axios from "axios";
export default function NavBar(props) {
  const logOut = () => {
    axios.get("http://localhost:5000/api/auth/logout").then((res) => {
      // props.setUser(null);
      props.state.user = null;
      console.log('logged out');
      // console.log(props.state);
      props.handleChangeState(props.state);
    });
  };
  const handleClick = () => {
    props.state.currentPage = "login";

    props.handleChangeState(props.state);
  };
  const HelpDirect = () => {
    props.state.currentPage = "Help";
    props.handleChangeState(props.state);
  };
  const ToHome = () => {
    props.state.currentPage = "Home";
    props.handleChangeState(props.state);
  };
  return (
    <Menu color="pink" inverted>
      <Menu.Item onClick={ToHome}>Pink Diary</Menu.Item>

      {props.user === null ? (
        <Menu.Menu position="right">
          <Menu.Item>
            <Button onClick={handleClick}>Log In</Button>
          </Menu.Item>
        </Menu.Menu>
      ) : (
        <Menu.Menu position="right">
          <Menu.Item>
            {props.user.email}
            <Button onClick={() => logOut()} icon="log out" />
          </Menu.Item>
          <Menu.Item>
            <Popup
              trigger={<Button onClick={HelpDirect}>Help</Button>}
              content="Ask users near you for help"
              on={["hover", "click"]}
            />
          </Menu.Item>
        </Menu.Menu>
      )}
    </Menu>
  );
}
