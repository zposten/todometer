'use babel';

import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    }
  }

  renderButtons() {
    let pauseBtn = (
      <button className="pause" onClick={() => this.props.onPause(this.props.item)}></button>
    );

    return (
      <div className="buttons">
        <button className="delete" onClick={() => this.props.onDelete(this.props.item)}></button>
        {this.props.paused ? null : pauseBtn}
        <button className="complete" onClick={() => this.props.onComplete(this.props.item)}></button>
      </div>
    );
  }

  onHover(isHovered) {
    this.setState({isHovered})
  }

  render() {
    let hovered = (this.state.isHovered ? 'hovered' : '');

    return (
      <div className="item-wrapper" 
           onMouseEnter={() => this.onHover(true)}
           onMouseLeave={() => this.onHover(false)}>
        <div className={"item-handle " + hovered}>
          <div className="handle-dot"/>
          <div className="handle-dot"/>
          <div className="handle-dot"/>
          <div className="handle-dot"/>
          <div className="handle-dot"/>
          <div className="handle-dot"/>
        </div>
        <div className="item">
          <div className="item-name">{this.props.text}</div>
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}
