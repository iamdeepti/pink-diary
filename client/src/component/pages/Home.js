import React from "react";

import { Button, Icon, Grid } from "semantic-ui-react";
// https://www.npmjs.com/package/react-calendar
// https://reactjsexample.com/ultimate-calendar-for-your-react-app/
import Calendar from "react-calendar";
import "../../Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickDay = this.handleClickDay.bind(this);
    this.handleRenderCalendar = this.handleRenderCalendar.bind(this);
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let setUserLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      this.props.state.location = setUserLocation;
      console.log(setUserLocation);
    });
  }
  handleClick(e) {
    let state = this.props.state;
    state["currentPage"] = "Add";
    this.props.handleChangeState(state);
  }

  handleClickDay(date) {
    let state = this.props.state;
    state["currentDate"] = date;
    this.props.handleChangeState(state);
  }
  handleRenderCalendar(value) {
    const view = value["view"];
    const date = value["date"].toString();
    const userData = this.props.state["userData"];
    const startDate = this.props.state["startDate"];
    const totalDuration = this.props.state["totalDuration"];
    const periodDuration = this.props.state["periodDuration"];
    const msPerDay = 60 * 60 * 24 * 1000;
    if (view !== "month") {
      // not in month view
      return null;
    } else if (!(date in userData)) {
      // no data, render class predict-n
      const fromStartDateMs = Date.parse(date) - Date.parse(startDate);
      const fromStartDateDay = fromStartDateMs / msPerDay;
      const fromStartDate = fromStartDateDay % totalDuration;
      if (fromStartDate <= 0) {
        return null;
      } else if (fromStartDateDay < periodDuration) {
        return "blood-1";
      } else if (fromStartDate < periodDuration) {
        return "predict-1";
      } else {
        return "predict-0";
      }
    } else {
      // has data, render class blood-n
      return "blood-" + userData[date]["Blood"];
    }
  }

  render() {
    const state = this.props.state;

    return (
      <Grid>
        <Grid.Column textAlign="center">
          <div>
            <Calendar
              value={state["currentDate"]}
              onClickDay={this.handleClickDay}
              tileClassName={this.handleRenderCalendar}
            />
            <br />

            <Button circular icon onClick={this.handleClick} color="pink">
              <Icon name="add" /> Log period/symptoms
            </Button>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Home;
