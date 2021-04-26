import React from 'react';

import ranklistStyle from "./index.module.scss";

export default class Indexranklist extends React.Component{
  constructor(props)　{
    super(props);

    this.state = {
      ranklist: [],
      cover_img_list: [
        {title: "热歌榜", picUrl: "https://h5static.kuwo.cn/upload/image/d8faf807ce667092ef29f8d62237bfbf3a1f127a6370664705722a67c8f9e23b.png"},
        {title: "新歌榜", picUrl: "https://h5static.kuwo.cn/upload/image/fb29b783091117318dbb5dac53f8a7deee25b34054f7d00fb91640f6106773c6.png"},
        {title: "飙升榜", picUrl: "https://h5static.kuwo.cn/upload/image/fcd292e95c97704678ae6a77191df0b915dd9b9657296ca20b9f19047f672055.png"},
        {title: "欧美榜", picUrl: "https://h5static.kuwo.cn/upload/image/8eef6e95406eb46f8ed544384bb457e20c8d66a33c3077c586e58537b620ecf5.png"},
        {title: "日韩榜", picUrl: "https://h5static.kuwo.cn/upload/image/838f7519b40479695a6f5a22923704600d2dfceb4e8d6ad0099b5a169ae0df03.png"},
      ]
    };
  }


  componentDidMount() {
    fetch(window.baseUrl + "/rank/rec_bangList")
    .then(res => res.json())
    .then(data => {
      this.setState({
        ranklist: data.data
      })
    })
  }

  render() {
    return <div className={ranklistStyle.container}>
      <div className={ranklistStyle.topTitle}>
        <h3 className="title">排行榜</h3> <span>更多&nbsp;&gt;</span>
      </div>
      <div className={ranklistStyle.ranklistContainer}>
        {this.state.ranklist.map((item, index) => {
          return <div key={item.id} className={ranklistStyle.item}>
            <div className={ranklistStyle.coverContainer}>
              <div className={ranklistStyle.top_bg}>
                <img src={this.state.cover_img_list[index].picUrl} alt=""/>
                <span className={ranklistStyle.play}/>
              </div>
              <img className={ranklistStyle.bgImg} src={item.musicList[0].albumpic} alt=""/>
            </div>
            <ul className={ranklistStyle.rank}>
            {item.musicList.slice(0, 5).map((song, index) => {
                  return <li key={index}>
                  <div className={ranklistStyle.rankIcon}>{index + 1 > 3 ? index + 1 : null}</div>
                  <div className={ranklistStyle.songInfo}>
                    <p className={ranklistStyle.name}>{song.name}</p>
                    <p className={ranklistStyle.author}>{song.artist}</p>
                  </div>
                </li>
              })}
            </ul>
          </div>
        })}
      </div>
    </div>
  }
}