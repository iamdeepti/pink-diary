import React, { Component } from "react";
import { getDistance } from "geolib";
import { Button, Container, Icon, Table, Popup } from "semantic-ui-react";
class Help extends Component {
  userLocations = [
    {
      name: "Priya",
      email: "Priya@gmail.com",
      locations: {
        latitude: "28° 35' N",
        longitude: "77° 5' E",
      },
    },
    {
      name: "Sneha",
      email: "Sneha@gmail.com",
      locations: {
        latitude: "28° 36' N",
        longitude: "77° 6' E",
      },
    },
  ];
  Distance = (obj1, obj2) => {
    let dist = getDistance(obj1, obj2);
    console.log(dist);
    // console.log(toString(dist));
    if (dist > 1000) {
      return dist / 1000 + " km away from you";
    } else {
      return dist + " m away from you";
    }
  };
  render() {
    return (
      <Container>
        <Table>
          <Table.Body>
            {this.userLocations.map((data) => (
              <Table.Row>
                <Table.Cell>{data.name}</Table.Cell>

                <Table.Cell>
                  {this.Distance(this.props.state.location, data.locations)}
                </Table.Cell>
                <Table.Cell>
                  <Popup
                    content="Notification sent"
                    on="click"
                    trigger={
                      <Button>
                        <Icon name="bell" /> Notify User
                      </Button>
                    }
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default Help;
