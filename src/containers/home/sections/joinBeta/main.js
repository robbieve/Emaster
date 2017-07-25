import React, { Component } from 'react';
import ComponentView  from './view';
import { localize } from 'react-localize-redux';
import ReactInview from 'react-inview-js';
import {ANIMATION_OPTIONS} from '../../../../config';
class Main extends Component {
    static get defaultProps() {
        return {
            title: 'Sample-Component'
        };
    }

    render() {
        return (ComponentView.bind(this))();
    }
}



export default localize(ReactInview(ANIMATION_OPTIONS)(Main),"locale");