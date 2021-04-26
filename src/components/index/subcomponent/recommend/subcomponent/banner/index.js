import React from 'react';

// 使用swiper插件
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

import bannersStyle from "./index.module.scss";


export default class Banner extends React.Component{
  constructor(props)　{
    super(props);

    this.state = {
      banners: [],
      blurimg: ""
    };
  }

  componentDidMount() {
    window.bannersthis = this;

    fetch(window.baseUrl + "/banner")
      .then(res => res.json())
      .then(data => {
        this.setState({
          banners: data.data,
          blurimg: data.data[0].pic
        })

        new Swiper('.swiper-container', {
          autoplay: {
            disableOnInteraction: false,
            delay: 3000
          },
          observer: true,
          observeParents: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on:{
            slideChange: function (){
              // this.activeIndex获取当前索引
              if(this.activeIndex < 6){
                window.bannersthis.setState({
                  blurimg: data.data[this.activeIndex - 1].pic
                })
              }else{
                window.bannersthis.setState({
                  blurimg: data.data[0].pic
                })
              }
            },
          }
        })
      })
  }


  render() {
    return <div style={{overflow: "hidden"}}>
      
      {/* banners图 */}
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {this.state.banners.map((item, index) => {
            return <div className="swiper-slide" key={index}>
              <img style={{ width: "100%" }} src={item.pic} alt="" />
            </div>;
          })}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className={bannersStyle.blur}>
          <img src={this.state.blurimg} alt="模糊"/>
        </div>
      </div>
      <div className={bannersStyle.down}>
        <ul>
          <li>下载PC版</li>
          <li>下载Android版</li>
          <li>下载iPhone版</li>
          <li>下载其它版本</li>
        </ul>
      </div>
    </div>
  }
}