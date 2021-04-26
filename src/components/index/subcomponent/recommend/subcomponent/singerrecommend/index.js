import React from 'react';

import recommendplaylistStyle from "../recommendplaylist/index.module.scss";

import singerrecommendStyle from "../singerrecommend/index.module.scss";

export default class Singerrecommend extends React.Component{
  constructor(props)　{
    super(props);

    this.state = {
      tabs: [
        {title: "华语", api: "/rec_singer"},
        {title: "欧美", api: "/singer?category=13&rn=6&pn=1"},
        {title: "日韩", api: "/singer?category=12&rn=6&pn=1"},
        {title: "组合", api: "/singer?category=16&rn=6&pn=1"},
      ],
      active: 0,
      artistList: []
    };
  }

  componentDidMount() {
    this.changeTabsGetSongers(this.state.tabs[0].api, 0)
  }

  changeTabsGetSongers = (url, index) => {
    
    fetch(window.baseUrl + url)
    .then(res => res.json())
    .then(data => {
      this.setState({
        active: index,
        artistList: data.data.artistList
      })
    })
  }

  render() {
    return <div style={{marginTop: 70,overflow: "hidden"}}>
      <div  className={recommendplaylistStyle.titleContainer}>
        <h3 className="title">歌手推荐</h3>
        <ul className={recommendplaylistStyle.tabs} style={{alignItems: "flex-end"}}>
          {this.state.tabs.map((item, index) => {
            return <li className={index === this.state.active ? recommendplaylistStyle.active : ""} key={index} onClick={this.changeTabsGetSongers.bind(null, item.api, index)}>
              {item.title}
            </li>
          })}
          <li>更多&gt;</li>
        </ul>
      </div>
      <div className={singerrecommendStyle.songersList}>
        {this.state.artistList.map(item => {
          return <div key={item.id} className={singerrecommendStyle.items}>
            <div className={singerrecommendStyle.authorAvatar}>
              <img src={item.pic300} alt=""/>
            </div>
            <p className={singerrecommendStyle.author}>{item.name}</p>
            <p className={singerrecommendStyle.songscount}>{item.musicNum}首歌曲</p>
          </div>
        })}
      </div>
    </div>
  }
}