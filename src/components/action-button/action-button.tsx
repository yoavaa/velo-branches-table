import {Component, h, State} from '@stencil/core';
import {moreIcon} from "../icons";

@Component({
  tag: 'action-button',
  styleUrl: 'action-button.css',
  shadow: true,
})
export class ActionButton {

  @State() isOpen: boolean = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  render() {
    return <div class="action-button-root">
      <button class="action-button" onClick={_ => this.open()}>{moreIcon()}</button>
      {this.isOpen && (
        <div class="click-trap" onClick={_ => this.close()}/>
      )}
      {this.isOpen && (
        <div class="menu"><slot/></div>
      )}
    </div>
  }
}
