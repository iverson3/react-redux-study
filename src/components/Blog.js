/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import {menuCut} from '../actions'
import App from './App'

class Blog extends React.Component {
    render() {
        const { dispatch, now } = this.props;
        return (
            <App onMenuClick={(menuid) => dispatch(menuCut(menuid))} menu_now_id={now.now}>
                <div>
                    <h2>这是Blog页面的main部分</h2>
                </div>
            </App>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // menus: state.menus,
        now: state.menu
    }
};

export default connect(mapStateToProps)(Blog);