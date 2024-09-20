import React, { Component } from 'react';
import { ExModelListContext } from '../_Context/ExModelListContext';

class ExModelListProvider extends Component {

    state = {
        ModelListState: [
            {
              "id": 1,
              "name": "VinSmart Live",
              "age": 1,
              "img": "./img/vsphone.jpg",
              "like": 0,
              "active": true
            },
            {
              "id": 2,
              "name": "VinSmart Live 2",
              "age": 2,
              "img": "./img/meizuphone.jpg",
              "like": 0,
              "active": false
            },
            {
              "id": 3,
              "name": "VinSmart Live 3",
              "age": 3,
              "img": "./img/applephone.jpg",
              "like": 0,
              "active": false
            },
            {
              "id": 4,
              "name": "VinSmart Live 4",
              "age": 4,
              "img": "./img/meizuphone.jpg",
              "like": 0,
              "active": false
            }
          ]
          
    }


    setActiveModel = (id) => {
        let modelListStateUpdate = this.state.ModelListState.map((model, index) => {
            if(model.id === id){
                model.like += 1
                model.active = true
            }
            else {
                model.active = false
            }
            return {...model}
        })
        this.setState({
            modelListState: modelListStateUpdate
        })
    }

    render() {
        return (
            <div>
                <ExModelListContext.Provider value={{modelListState: this.state.ModelListState, setActiveModel: this.setActiveModel}}>
                    {this.props.children}
                </ExModelListContext.Provider>
            </div>
        );
    }
}

export default ExModelListProvider;

