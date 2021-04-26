import React from 'react';

import Banners from "./subcomponent/banner";
import Recommendpaylist from "./subcomponent/recommendplaylist";
import ExctingActivies from "./subcomponent/excitingacti";
import IndexRanklist from "./subcomponent/indexranklist";
import Singerrecommend from "./subcomponent/singerrecommend";
import Anodolite from "./subcomponent/anodolite";

export default class Recommend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }


  render() {
    return <div style={{ width: 1288, margin: "0 auto"}}>
      <Banners/>
      <Recommendpaylist/>
      <ExctingActivies/>
      <IndexRanklist/>
      <Singerrecommend/>
      <Anodolite/>
    </div>
  }
}