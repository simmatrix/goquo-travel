import React, { Component } from 'react';
import { Tooltip, Modal, message } from 'antd';
import { Spring } from 'react-spring';
import Typist from 'react-typist';
import classes from './HotelDetail.module.scss';
import Header from './../Header/Header';
import ActionBar from './../ActionBar/ActionBar';
import HotelRoomMainGroup from './HotelRoomMainGroup/HotelRoomMainGroup';
import { getSampleRooms } from './../../services/FakeDataProvider';

class HotelDetail extends Component {
  state = {
    roomTypeLabel: '',
    roomName: '',
    roomPrice: '',
    rooms: [],
    typing: false
  };

  componentDidMount() {
    const rooms = getSampleRooms();
    if (rooms !== undefined) {
      this.setState(() => {
        return {
          rooms: rooms
        };
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.roomName !== this.state.roomName || prevState.roomTypeLabel !== this.state.roomTypeLabel) {
      this.setState(() => {
        return {
          typing: true
        };
      });
    }
  }

  showSuccessMessage() {
    Modal.success({
      title: 'Thank you for your consideration',
      content: "Thank you for reviewing this assignment. Looking forward to your feedback. I have poured in effort in crafting out this site to show that I am truly interested to be part of GoQuo's core development team."
    });
  }

  updateSummary = (roomTypeLabel, roomName, roomPrice) => {
    if (roomName.toUpperCase() === this.state.roomName && roomTypeLabel === this.state.roomTypeLabel) {
      this.currentSelectionMessage();
    } else {
      if (this.state.typing !== true) {
        this.setState(() => {
          return {
            roomTypeLabel: roomTypeLabel,
            roomName: roomName.toUpperCase(),
            roomPrice: roomPrice
          };
        });
      }
    }
  };

  finishTyping = () => {
    this.setState(() => {
      return {
        typing: false
      };
    });
  };

  currentSelectionMessage = () => {
    message.warning('This is your current selection');
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <ActionBar />
        <div className={classes.HotelGallery}>
          <div className={classes.HeaderImage} />
        </div>
        <div className={classes.HotelRoomHeader}>
          <div className={classes.RatingWrapper}>
            <div className={classes.Rating}>8.8</div>
            <div className={classes.RatingLabel}>SCORES OVER 10</div>
          </div>

          <div className={classes.HotelNameWrapper}>
            <div className={classes.RatingMobile}>8.8 SCORES OVER 10</div>
            <div className={classes.HotelReviewPercentage}>PRAISED BY 90% OF CUSTOMERS</div>
            <div className={classes.HotelName}>CREATOR HOTEL</div>
            <div className={classes.HotelAddress}>Lot 1566, Batu 20, Jalan Besar, Kulai Jaya, Johor Bahru, Malaysia, 81000</div>
          </div>
        </div>
        <div className={classes.HotelRoomSubHeader}>CHOOSE YOUR ROOM</div>
        <div className={classes.HotelDetailContainer}>
          {/* this.props.match.params.id */}
          {this.state.rooms.map((group, key) => {
            return <HotelRoomMainGroup key={key} updateSummary={this.updateSummary} group={group} typing={this.state.typing} />;
          })}
        </div>

        {this.state.roomName ? (
          <Tooltip placement="top" title="The purpose of this panel is to demonstrate the passing of user's selected room type from the child component to this parent component">
            <div className={classes.SummaryPanel}>
              <div className={classes.BottomLeftPanel}>
                YOU HAVE CHOSEN:
                {this.state.typing ? (
                  <Typist onTypingDone={this.finishTyping}>
                    {this.state.roomTypeLabel} ({this.state.roomName})
                  </Typist>
                ) : (
                  <span>
                    {this.state.roomTypeLabel} ({this.state.roomName})
                  </span>
                )}
              </div>
              <div className={classes.BottomRightPanel}>
                <div className={classes.ConfirmNow} onClick={this.showSuccessMessage}>
                  CONFIRM
                  <div className={classes.MobileDisplayPrice}>{this.state.roomPrice}</div>
                </div>
                <div className={classes.PriceSummary}>
                  <div className={classes.PriceSummaryLabel}>PER NIGHT (MYR)</div>
                  <div className={classes.PriceSummaryValue}>
                    <Spring from={{ number: 0 }} to={{ number: this.state.roomPrice.toFixed(2) }}>
                      {props => <div>{props.number.toFixed(2)}</div>}
                    </Spring>
                  </div>
                </div>
              </div>
            </div>
          </Tooltip>
        ) : (
          <Tooltip placement="top" title="The purpose of this panel is to demonstrate the passing of user's selected room type from the child component to this parent component">
            <div className={classes.SummaryPanel}>
              <div className={classes.BottomLeftPanel}>PICK A ROOM & VIEW SUMMARY HERE</div>
            </div>
          </Tooltip>
        )}
      </React.Fragment>
    );
  }
}

export default HotelDetail;
