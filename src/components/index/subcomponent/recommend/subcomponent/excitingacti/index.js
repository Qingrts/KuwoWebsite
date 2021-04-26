import React from 'react';

import excitingactiStyle from "./index.module.scss";


export default class Excitingactivities extends React.Component{
  constructor(props)　{
    super(props);

    this.state = {};
  }

  render() {
    return <div style={{overflow: "hidden", marginTop: 50}}>
      <div style={{overflow: "hidden", marginBottom: 28}}>
        <h3 className="title">精彩活动</h3>
      </div>
      <div className={excitingactiStyle.banners}>
        <img src="https://kwimg4.kuwo.cn/star/upload/24/56/1618223816706_.jpg" alt=""/>
        <img src="https://kwimg4.kuwo.cn/star/upload/95/88/1618221125462_.jpg" alt=""/>
      </div>
    </div>
  }
}