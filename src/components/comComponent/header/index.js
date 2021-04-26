import React from 'react';
import { Link } from "react-router-dom";


import headerStyle from "./index.module.scss";


export default class Header extends React.Component{
  constructor(props)　{
    super(props);

    this.state = {
      active: "发现音乐"
    };
  }

  render() {
    return <div className={headerStyle.headerContainer}>
      <div className={headerStyle.container}>
        <h1>酷我音乐<a href="http://www.kuwo.cn/"><img src="https://h5static.kuwo.cn/www/kw-www/img/logo.dac7499.png" alt=""/></a></h1>
        <ul className={headerStyle.tabs} onClick={(event) => {
          this.setState({
            active: event.target.innerHTML
          })
        }}>
          <li className={this.state.active === "发现音乐" ? headerStyle.active : ""}><Link to="/">发现音乐</Link></li>
          <li className={this.state.active === "下载客户端" ? headerStyle.active : ""}><Link to="/down">下载客户端</Link></li>
          <li>音乐现场</li>
          <li>VIP会员</li>
          <li className={this.state.active === "酷我畅听" ? headerStyle.active : ""}><Link to="/listen">酷我畅听</Link></li>
          <li>酷我耳机</li>
          <li>更多&lt;</li>
        </ul>
        <input type="text" className={headerStyle.search}/>
        <div className={headerStyle.userInfo}>
          <img src="https://h5static.kuwo.cn/www/kw-www/img/def270.99aa867.png" alt=""/>
        </div>
      </div>
    </div>
  }
}