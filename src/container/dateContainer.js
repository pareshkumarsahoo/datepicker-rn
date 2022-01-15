
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import DateComponent from '../dateComponent';
import moment from 'moment';

const DateContainer = () => {
    const [currentDate, setCurrentDate] = useState(moment());
    const [dateValue, setDateValue] = useState(currentDate);
    const [dateStart, setDateStart] = useState(
        currentDate.clone().startOf("week")
    );

    const [days, setDays] = useState([]);


    const getDays = (startDate) => {
        let temp = [];
        for (let i = 0; i <= 6; i++) {
            temp.push(moment(startDate).add(i, "days"));
        }
        setDays([...temp]);
        console.log(dateValue, temp);
    };


    useEffect(() => {
        getDays(dateStart);
    }, []);

    useEffect(() => {
        let start = dateValue.clone().startOf("week");
        getDays(start);

    }, [dateValue]);


    const handleArrow = (arrow) => {
        if (arrow === "left") {
            getDays(moment(dateStart).subtract(1, "days"));
            setDateStart(moment(dateStart).subtract(1, "days"));
        } else {
            getDays(moment(dateStart).add(1, "days"));
            setDateStart(moment(dateStart).add(1, "days"));
        }
    };

    const handleDateOpen = () => {
        const datePicker = document.getElementById("datePicker");

        console.log(datePicker);
    };
    return (

        <View style={{ width: "510px" }}>
            <View style={{ display: "flex", justifyContent: "space-between" }}>
                <Text>{dateValue.format("MMMM YYYY")}</Text>
                <View >
                    <TextInput
                        type="date"
                        id="datePicker"
                        name="trip-start"
                        value={currentDate.format("YYYY-MM-DD")}
                        onChange={(e) => {
                            setDateValue(moment(e));
                        }}
                    />
                    <Text onPress={handleDateOpen}> More Dates</Text>
                </View>
            </View>
            <View style={{ display: "flex" }}>
                <View class="left" onPress={() => handleArrow("left")}></View>
                {days.map((day, index) => (
                    <DateComponent
                        active={
                            dateValue.format("MM-DD-YYYY") === day.format("MM-DD-YYYY")
                                ? true
                                : false
                        }
                        date={day}
                        setDateValue={setDateValue}
                    />
                ))}
                <View class="right" onPress={() => handleArrow("right")}></View>
            </View>
        </View>


    )
}

export default DateContainer
