import React from "react";
import { Button, Container, Grid } from "semantic-ui-react";
import "../../Add.css";
import ChatBot from "react-simple-chatbot";
import b1 from "../../ICON/bleed/1.png";
import b2 from "../../ICON/bleed/2.png";
import b3 from "../../ICON/bleed/3.png";
import b4 from "../../ICON/bleed/4.png";
import m1 from "../../ICON/mood/1.png";
import m2 from "../../ICON/mood/2.png";
import m3 from "../../ICON/mood/3.png";
import m4 from "../../ICON/mood/4.png";
import p1 from "../../ICON/pain/1.png";
import p2 from "../../ICON/pain/2.png";
import p3 from "../../ICON/pain/3.png";
import p4 from "../../ICON/pain/4.png";
import s1 from "../../ICON/sex/1.png";
import s2 from "../../ICON/sex/2.png";
import bleed from "../../ICON/bleed/theme.png";
import mood from "../../ICON/mood/theme.png";
import pain from "../../ICON/pain/theme.png";
import sex from "../../ICON/sex/theme.png";
import EmptyUserData from "../../dataset/EmptyUserData";
const steps = [
  {
    id: '0',
    message: "Hi, You just logged pain, how's it?",
    trigger: '1',
  },
  {id: '1',
  options: [
    // { value: 1, label: 'Just a lil cramp', trigger: '4' },
    { value: 2, label: 'Unbearable', trigger: '3' },
    { value: 3, label: 'Bearable', trigger: '5' },
  ],},
  {
    id: '4',
    message: "that's good to hear!",
    end: true,
  },
  {
    id:'5',
    message: " here are some things you can try to ease your pain ",
    trigger: '8'
  },
  {
    id:'8',
    message: " 1) Drink more water/ herbal tea",
    trigger: '9'
  },
  {
    id:'9',
    message: " 2) exercise",
    trigger: '10'
  },
  {
    id:'10',
    message: " 3) apply heat in that area.",
    trigger: '11'
  },
  {
    id:'11',
    message: " See you soon in good health.",
    end:true
  },
  {
    id: '3',
    message :'are you experincing heavy bleeding',
    trigger: '6'
  },
  {
    id: '6',
        options: [
          { value: 1, label: 'Yes', trigger: '7' },
          { value: 2, label: 'No', trigger: '5' },
          
        ]
  },
  {
    id: '7',
    message: "doesn't seem normal, please contact your doctor!",
    end : true
  }
];
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "Add",
      showChatBot: false,
      userData: JSON.parse(JSON.stringify(EmptyUserData)),
    };
    this.handleOnSave = this.handleOnSave.bind(this);
    this.handleOnCancel = this.handleOnCancel.bind(this);
  }

  handleOnSave() {
    let appState = this.props.state;
    let thisState = this.state;
    const currentDate = appState["currentDate"];
    appState["userData"][currentDate] = thisState["userData"];
    appState["currentPage"] = "Home";
    this.props.handleChangeState(appState);
  }

  onChangePictureBlood1 = () => {};
  handleOnCancel() {
    let appState = this.props.state;
    appState["currentPage"] = "Home";
    this.props.handleChangeState(appState);
  }

  handleClick = (e) => {
    const id = e.target.id;
    console.log(this.props);
    let appState = this.props.state;
    let thisState = this.state;
    e.target.style.opacity = 0.3;
    const currentDate = this.state["currentDate"];
    if (id.search(/b/) === 0) {
      thisState["userData"]["Blood"] = parseInt(id.substring(1, 2));
      thisState["currentPage"] = "add";
    } else if (id.search(/m/) === 0) {
      thisState["userData"]["Mood"] = parseInt(id.substring(1, 2));
      thisState["currentPage"] = "add";
    } else if (id.search(/p/) === 0) {
      thisState["userData"]["Pain"] = parseInt(id.substring(1, 2));
      thisState["currentPage"] = "add";
      thisState.showChatBot = true;
    } else if (id.search(/s/) === 0) {
      thisState["userData"]["Sex"] = parseInt(id.substring(1, 2));
      appState["userData"][currentDate] = thisState["userData"];
    } else {
      console.log(e);
    }
    this.setState(thisState);
  };

  render() {
    return (
      <div>
      <Container>
        <Button.Group>
          <Button onClick={this.handleOnCancel}>Cancel</Button>
          <Button.Or />
          <Button positive onClick={this.handleOnSave}>
            Save
          </Button>
        </Button.Group>
        <br /> <br /> <br />
        <Grid divided="vertically">
          <Grid.Row columns="5">
            <Grid.Column>
              <img className="image" alt="bleed" src={bleed} />
              Flow
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={b1}
                id="b1"
                onClick={this.handleClick}
              />
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={b2}
                id="b2"
                onClick={this.handleClick}
              />
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={b3}
                id="b3"
                onClick={this.handleClick}
              />
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={b4}
                id="b4"
                onClick={this.handleClick}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns="5">
            <Grid.Column>
              <img className="image" alt="mood" src={mood} />
              Mood
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={m1}
                id="m1"
                onClick={this.handleClick}
              />
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={m2}
                id="m2"
                onClick={this.handleClick}
              />
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={m3}
                id="m3"
                onClick={this.handleClick}
              />
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={m4}
                id="m4"
                onClick={this.handleClick}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns="5">
            <Grid.Column>
              <img className="image" alt="sex" src={sex} />
              Sex
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={s1}
                id="s1"
                onClick={this.handleClick}
              />
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={s2}
                id="s2"
                onClick={this.handleClick}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns="5">
            <Grid.Column>
              <img className="image" alt="pain" src={pain} />
              Pain
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={p1}
                id="p1"
                onClick={this.handleClick}
              />
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={p2}
                id="p2"
                onClick={this.handleClick}
              />
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={p3}
                id="p3"
                onClick={this.handleClick}
              />
            </Grid.Column>
            <Grid.Column>
              <img
                className="image"
                alt="404"
                src={p4}
                id="p4"
                onClick={this.handleClick}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </Container>
      { this.state.showChatBot && 
      <ChatBot steps = {steps} floating='true' opened='true'/> 
} 
      </div>
    );
  }
}
export default Add;
