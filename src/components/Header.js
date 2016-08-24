/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import Menu from './Menu'

export default class Header extends React.Component {
    render() {
        // 模拟数据
        let json = "[{'id': 1, 'title': 'Index', 'url': '/'}, {'id': 2, 'title': 'Blog', 'url': '/blog'}, {'id': 3, 'title': 'Login', 'url': '/login'}]";
        let menuData = eval("(" + json + ")");
        return (
            <div>
                <h4>这是头部</h4>
                <Menu menuData={menuData} menuClick={(id)=>this.props.onMenuClick(id)} menu_now_id={this.props.menu_now_id}/>
            </div>
        );
    }
}