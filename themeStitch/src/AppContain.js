import React, { Component } from 'react'

class AppContain extends Component {
    constructor() {
        super();
        this.style = {
            height: 500 + 'px', 
            width: 300 + 'px', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            marginTop: 0, 
            marginBottom: 0,
            background: '#eee'
        }
        this.headerStyle = {
            height: 100 + 'px',
            textAlign: 'center',
            lineHeight: 100 + 'px',
        }
    }
    render() {
        return (
            <div style={this.style}>
                <header style={this.headerStyle}>{this.props.children[0]}</header>
                <section >{this.props.children[1]}</section>
            </div>
        )
    } 
}

export default AppContain;