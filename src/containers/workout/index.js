import React, { Component } from 'react';
import {Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from '../.././components/common';
import { connect } from 'react-redux';
import * as actions from './actions';

class WorkoutItem extends React.Component{
    render(){
        const { titleStyle } = styles;
        const {id,title} = this.props.workout

        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectWorkout(id)} >

            <CardSection>
                <Text style={titleStyle}>{title}</Text>
            </CardSection>
            </TouchableWithoutFeedback>

        )
    }
}

export default connect(null,actions)(WorkoutItem)

const styles = {
    titleStyle:{
        fontSize:18,
        paddingLeft:15
    }
}
