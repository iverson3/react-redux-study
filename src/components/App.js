/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'


import Header from './Header'
import Footer from './Footer'
import Body from './Body'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header onMenuClick={(id)=>this.props.onMenuClick(id)} menu_now_id={this.props.menu_now_id} />
                <Body>
                {this.props.children}
                </Body>
                <Footer />
            </div>
        );
    }
}