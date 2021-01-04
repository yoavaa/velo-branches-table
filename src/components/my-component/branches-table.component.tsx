import {Component, h, Prop} from '@stencil/core';
import {Branch, BranchState} from "./branches-table-types";

const IconMore = <svg viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M6,12.5 C6,11.6715729 6.66579723,11 7.5,11 C8.32842712,11 9,11.6657972 9,12.5 C9,13.3284271 8.33420277,14 7.5,14 C6.67157288,14 6,13.3342028 6,12.5 Z M11,12.5 C11,11.6715729 11.6657972,11 12.5,11 C13.3284271,11 14,11.6657972 14,12.5 C14,13.3284271 13.3342028,14 12.5,14 C11.6715729,14 11,13.3342028 11,12.5 Z M16,12.5 C16,11.6715729 16.6657972,11 17.5,11 C18.3284271,11 19,11.6657972 19,12.5 C19,13.3284271 18.3342028,14 17.5,14 C16.6715729,14 16,13.3342028 16,12.5 Z"></path></svg>

@Component({
  tag: 'branches-table',
  styleUrl: 'branches-table.css',
  shadow: true,
})
export class BranchesTable {
  @Prop() branches: Array<Branch>;

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

  renderTableContent() {
    return this.branches.map(branch => {
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
            <button class="menu-button">{IconMore}</button>
            </td>
        </tr>
      )
    })
  }

  render() {
    console.log(this.branches)
    return <div class="root">
      <div class="table-header">
        <div class="table-title">My Branches</div>
        <div class="table-help">What is a branch?</div>
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
        <div class="table-new-branch">+ Create New Branch</div>
      </div>
    </div>;
  }
}
