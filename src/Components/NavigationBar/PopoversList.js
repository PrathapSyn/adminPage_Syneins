import React from "react";
import ProfilePopup from "./profilePopup";
import { Popover, PopoverBody, PopoverHeader } from "reactstrap";
import Button from "@material-ui/core/Button";
import avatar from "../../Assets/coloredAvatar.jpg";


class PopoversList extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        popovers: [
          {
            placement: "bottom",
            text: "Left",
          },
        ],
      };
    }
  
    render() {
      return (
        <div className="manage-margin">
          {this.state.popovers.map((popover, i) => {
            return <ProfilePopup key={i} item={popover} id={i} />;
          })}
        </div>
      );
    }
  }
  export default PopoversList;