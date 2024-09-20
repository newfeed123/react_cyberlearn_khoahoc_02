import React, { Component } from 'react';
import ModelProfile from './_Provider/ModelProfile';
import LikeProfile from './_Provider/LikeProfile';
import ModelStateProvider from './_Provider/ModelStateProvider';

class ContextDemo extends Component {
    render() {
        return (
            <ModelStateProvider>
                <div className='container'>
                    <ModelProfile></ModelProfile>
                    <LikeProfile></LikeProfile>
                </div>
            </ModelStateProvider>
        );
    }
}

export default ContextDemo;