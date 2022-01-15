import React from 'react'
import { View, Text } from 'react-native'

const DateComponent = (
    { date, active, setDateValue }
) => {
    const dateVal = moment(date).format("D ddd");
    const split = dateVal.split(" ");
    return (
        <View
            onClick={() => setDateValue(date)}
        >
            <View>
                {split[0]}
                {split[1]}
            </View>
            <View class="square-cut">ssas</View>
        </View>
    )
}

export default DateComponent
