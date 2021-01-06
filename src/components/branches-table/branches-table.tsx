import {Component, h, Prop, Element} from '@stencil/core';
import {Branch, BranchState} from "./branches-table-types";
import {clockIcon, copyIcon, deleteIcon, helpIcon, renameIcon} from "../icons";

@Component({
  tag: 'branches-table',
  styleUrl: 'branches-table.css',
  shadow: true,
})
export class BranchesTable {
  @Prop() branches: string = '[]';
  @Element() el: HTMLElement;

  parseBranches(newValue: string): Array<Branch> {
    try {
      return JSON.parse(newValue);
    }
    catch (e) {
      throw new Error('failed to parse branches attribute - ' + e.message);
    }
  }

  formatStatus(status) {
    if (status === BranchState.published)
      return <span class="branch-detail published">Published</span>
    else if (status === BranchState.textSiteCreated)
      return <span class="branch-detail test-site">Test Site Created</span>
    else
      return <span class="branch-detail">&nbsp;</span>
  }

  formatDate(date) {
    if (date)
      return date.toLocaleString();
  }

  dispatchEventToCorvid(event: string, details: any = {}) {
    this.el.dispatchEvent(new CustomEvent(event,
      { detail: details }));
  }

  newBranch() {
    this.dispatchEventToCorvid('new-branch');
  }

  whatIsaBranch() {
    this.dispatchEventToCorvid('what-is-a-branch');
  }

  renameBranch(branch: Branch) {
    this.dispatchEventToCorvid('rename-branch', {id: branch.id});
  }

  copyBranch(branch: Branch) {
    this.dispatchEventToCorvid('copy-branch', {id: branch.id});
  }

  showBranchHistory(branch: Branch) {
    this.dispatchEventToCorvid('branch-history', {id: branch.id});
  }

  deleteBranch(branch: Branch) {
    this.dispatchEventToCorvid('delete-branch', {id: branch.id});
  }

  renderTableContent() {
    return this.parseBranches(this.branches).map(branch => {
      return (<tr>
          <td class="branch-thumbnail-cell">
            <img class="branch-thumbnail" src={branch.thumbnail}/>
            {branch.status === BranchState.published &&
            (<div class="branch-thumbnail-published-label">Live</div>)
            }
          </td>
          <td class="branch-name">{branch.name}</td>
          <td><span class="branch-detail">{branch.lastSavedUser}</span><br/><span class="branch-detail">{this.formatDate(branch.lastSavedDate)}</span></td>
          <td>{this.formatStatus(branch.status)}<br/><span class="branch-detail">{this.formatDate(branch.statusDate)}</span></td>
          <td>
            <action-button>
              <div class="action" onClick={_ => this.renameBranch(branch)}>{renameIcon()} <span>Rename</span></div>
              <div class="action" onClick={_ => this.copyBranch(branch)}>{copyIcon()} <span>Duplicate</span></div>
              <div class="action" onClick={_ => this.showBranchHistory(branch)}>{clockIcon()} <span>See Branch History</span></div>
              <div class="divider"><hr/></div>
              <div class="action delete" onClick={_ => this.deleteBranch(branch)}>{deleteIcon()} <span>Delete</span></div>
            </action-button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return <div class="root">
      <div class="table-header">
        <div class="table-title">My Branches</div>
        <div class="table-help" onClick={_ => this.whatIsaBranch()}>{helpIcon()} <span>What is a branch?</span></div>
      </div>
      <table class="branches-table">
        <thead>
        <tr>
          <th style={{"min-width": "94px"}}></th>
          <th style={{"min-width": "182px"}}>Name</th>
          <th style={{"min-width": "140px"}}>Last Saved</th>
          <th style={{width: "100%"}}></th>
          <th style={{"min-width": "72px"}}></th>
        </tr>
        </thead>
        {this.renderTableContent()}
      </table>
      <div class="table-footer">
        <div class="table-new-branch" onClick={_ => this.newBranch()}>+ Create New Branch</div>
      </div>
    </div>;
  }
}
