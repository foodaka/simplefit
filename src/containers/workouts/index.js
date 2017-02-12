import React from 'react';
import { View, Text, ListView } from 'react-native';
// import { Card, Input, CardSection } from '../.././components';
import { connect } from 'react-redux';
import  WorkoutItem  from './workoutItem';

class Workouts extends React.Component{


    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged:(r1,r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(this.props.reducer)
    }

    renderRow(workout){
        return <WorkoutItem workout={workout} />
    }

    render(){
        console.log('props',this.props);

        return(
            <ListView
                renderRow={this.renderRow}
                dataSource={this.dataSource}
            />
        )
    }
}


const mapStateToProps = ({workoutreducer}) =>{
    return {
        reducer:workoutreducer
    }
}
export default connect(mapStateToProps)(Workouts);
