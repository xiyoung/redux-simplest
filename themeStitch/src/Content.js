import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch';

class Content extends Component {
    static contextTypes = {
        store: PropTypes.object
    }

    constructor() {
        super();
        this.state = {
            themeColor: ''
        }
    }

    componentWillMount() {
        const {store} = this.context;
        this._updateThemeColor();
        store.subscribe(() => this._updateThemeColor())
    }

    _updateThemeColor() {
        const {store} = this.context;
        this.setState({
            themeColor: store.getState().themeColor
        })
    }   
     
    render() {
        return (
            <div style={{color: this.state.themeColor}}>
                Content
                <ThemeSwitch style={this.switchStyle} />
            </div>
        )
    }
}
export default Content;