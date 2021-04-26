import React from 'react';

import ranklistStyle from "../../index.module.scss";

export default class Ranklist_con extends React.Component{
  constructor(props)　{
    super(props);

    this.state = {
      tagData: [],
      tag: this.props.tag,
      activeIndex: 0
    };
  }

  componentDidMount() {
    this.atChangeHandler();
  }


  componentDidUpdate(prevProps) {
    if(this.props.tag !== prevProps.tag){
      this.atChangeHandler();
      this.setState({
        activeIndex: 0
      })
    }
  }

  atChangeHandler = () => {
    fetch(window.baseUrl + "/rank")
    .then(res => res.json())
    .then(data => {
      let tagData = data.data.filter(item => {
        if(item.name === this.props.tag){
          return item;
        }else{
          return false;
        }
      })[0].list;
      this.setState({
        tagData: tagData
      })
    })
  }

  render() {
    return <ul className={ranklistStyle.tab_con}>
      {this.state.tagData.map((item, index) => {
        return <li key={index} className={this.state.activeIndex === index ? ranklistStyle.active : ""} onClick={(function (){
          this.setState({activeIndex: index})
          this.props.childTabChange.call(null, item);
          }).bind(this, index)}>
          <img src={item.pic} className={ranklistStyle.cover} alt=""/>
          <div className={ranklistStyle.item_info}>
            <p className={ranklistStyle.name}>{item.name}</p>
            <p className={ranklistStyle.time}>{item.pub}</p>
          </div>
        </li>
      })}
    </ul>
  }
}