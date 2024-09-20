import React, { Component } from 'react';
import ProfileModel from './ProfileModel';
import ModelList from './ModelList';
import ExModelListProvider from '../_Provider/ExModelListProvider';

class ExContextModelList extends Component {
    render() {
        return (
            <ExModelListProvider>

                <div className='container'>
                    <ProfileModel></ProfileModel>
                    <ModelList></ModelList>
                </div>
                
            </ExModelListProvider>
        );
    }
}

export default ExContextModelList;