import { Card, CardBody } from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../assets/css/MiniCalendar.css";

function MiniCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <Card>
      <CardBody>
        <Calendar onChange={onChange} value={value} />
      </CardBody>
    </Card>
  );
}

export default MiniCalendar;
