/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'

export default class Body extends React.Component {
    render() {
        return (
            <div id="body">
                <div id="body-banner">
                    <h4>这是body中的banner</h4>
                </div>
                <div id="body-main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}