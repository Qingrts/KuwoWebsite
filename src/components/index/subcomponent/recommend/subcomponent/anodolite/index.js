import React from 'react';

import anodoliteStyle from "./index.module.scss";

export default class Anodolite extends React.Component{
  constructor(props)　{
    super(props);

    this.state = {
      albumList: []
    };
  }

  componentDidMount() {
    fetch(window.baseUrl + "/radio")
    .then(res => res.json())
    .then(data => {
      console.log(data.data.albumList);
      this.setState({
        albumList: data.data.albumList
      })
    })
  }

  render() {
    return <div style={{marginTop: 70,marginBottom: 28, overflow: "hidden"}}>
      <div style={{overflow: "hidden"}}>
        <h3 className="title">主播电台</h3>
        <button className={anodoliteStyle.moreAnodolite}>
          <span>畅听更多精品电台</span>
        </button>
      </div>
      <div className={anodoliteStyle.radioContainer}>
        {this.state.albumList.map((item, index) => {
          return <div key={index} className={anodoliteStyle.radioItem}>
            <div className={anodoliteStyle.outPic}>
              <div className={anodoliteStyle.coverImg}>
                <img src={item.pic} alt=""/>
                <div className={anodoliteStyle.cover}><span></span></div>
              </div>
            </div>
            <div className={anodoliteStyle.radioInfo}>
              <p className={anodoliteStyle.name}>{item.album}</p>
              <p className={anodoliteStyle.author}>{item.artist}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  }
}