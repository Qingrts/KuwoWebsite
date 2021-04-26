import React from 'react';
import {Switch, Route, Link} from "react-router-dom";


import indexStyles from "./index.module.scss";


import Recommend from "./subcomponent/recommend";
import Toplist from "./subcomponent/toplist";
import Singer from "./subcomponent/singer";
import Songlist from "./subcomponent/songlist";
import Musicvideo from "./subcomponent/musicvideo";


export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTags: window.location.hash.substr(1),
      tabs: [
        {title: "推荐", path: "/"},
        {title: "排行榜", path: "/ranklist"},
        {title: "歌手", path: "/singers"},
        {title: "歌单", path: "/playlists"},
        {title: "MV", path: "/mvs"},
      ]
    };
  }


  componentDidMount() {
    window.onhashchange = () => {
      this.setState({
        activeTags: window.location.hash.substr(1)
      })
    }
  }

  componentWillUnmount() {
    window.onhashchange = null;
  }


  

  render() {
    return <div style={{ width: 1288, margin: "0 auto" }}>
      {/* tab页签 */}
      <ul className={indexStyles.tags} ref={(ul) => this.tags = ul}>
        {this.state.tabs.map((item, index) => {
          return <li key={index} className={item.path === this.state.activeTags ? indexStyles.active : ""}>
            <Link to={item.path}>{item.title}</Link>
          </li>;
        })}
      </ul>


      <Switch>
        <Route path="/ranklist" component={Toplist}/>
        <Route path="/singers" component={Singer}/>
        <Route path="/playlists" component={Songlist}/>
        <Route path="/mvs" component={Musicvideo}/>
        <Route path="/down" component={Musicvideo}/>
        <Route path="/listen" component={Musicvideo}/>
        <Route path="/" component={Recommend}/>
      </Switch>
    </div>
  }
}