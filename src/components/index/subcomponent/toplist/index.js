import React from 'react';

import ranklistStyle from "./index.module.scss";

import RanklistCon from "./subcomponent/ranklist_con";

export default class Toplist extends React.Component{
  constructor(props)　{
    super(props);

    this.state = {
      tags: ["官方榜", "特色榜", "场景榜"],
      currentTag: "官方榜"
    };
  }

  childTabChange = (argu) => {
    console.log(argu);
  }

  
  render() {
    return <div className="container">
      <div className={ranklistStyle.rankContainer}>
        <div className={ranklistStyle.rankleftContainer}>
          <div className={ranklistStyle.tabs}>
            {this.state.tags.map((item, index) => {
              return <span key={index} onClick={(function (){this.setState({currentTag: item})}).bind(this, item)} className={this.state.currentTag === item ? ranklistStyle.active : ""}>
                {item}
              </span>;
            })}
          </div>
          <RanklistCon tag={this.state.currentTag} childTabChange={this.childTabChange}/>
        </div>
        <div className={ranklistStyle.rankrightContainer}>
          
        </div>
      </div>
    </div>
  }
}