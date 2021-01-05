import {Component, h, Prop} from '@stencil/core';
import {Branch, BranchState} from "./branches-table-types";

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
            <action-button>some text</action-button>
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
