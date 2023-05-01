import React, { useState } from "react";
import "./style.css";
import image1 from '../images/web33.jpg'
import Table from "../Table/Table1";
import Table2 from "../Table/Table2";
import Graph1 from "../Graph/Graph1";
import Graph2 from "../Graph/Graph2";
import Graph3 from "../Graph/Graph3";
import Graph4 from "../Graph/Graph4";
import { Button, DatePicker, Select } from "antd"

import moment from "moment";

function MainBody() {
  

// Select Graphic

const [selectedValue, setSelectedValue] = useState("lucy");
const handleChange = (value) => {
  setSelectedValue(value);
};

const handleRefreshClick = () => {
  console.log(selectedValue);
};
let selectedComponent;

switch (selectedValue) {
  case "jack":
    selectedComponent = <Graph1 />;
    break;
  case "lucy":
    selectedComponent = <Graph2 />;
    break;
  case "hanz":
    selectedComponent = <Graph3 />;
    break;
  case "loly":
    selectedComponent = <Graph4 />;
    break;
  default:
    selectedComponent = <Graph2 />;
}
//
// RangePicker
const { RangePicker } = DatePicker;
  const [dates, setDates] = useState();
  // console.log(dates)

//
// Station
  const mapSrc =
    "https://www.google.com/maps/d/u/0/embed?mid=1ouB6FNk5LHLe2dVlnu4vlwqPHGYuMi0&ehbc=2E312F";
//

  return (
    <div className="outheader">
      <div style={{marginBottom :"25px"}}>
        <h2 className="bigheader">Municipal Water Supply Company</h2>

        <div className="h1">
          <div className="h1i1">
            <h4 className="header1">Station Location</h4>
            <iframe className="imagein" title="Gmap" src={mapSrc} />
          </div>

          <div className="h1i2">
            <h4 className="header1">Station Photos</h4>
            <img className="imagein" src={image1} alt="" />
            {/* <img className='imagein' id="image" src='' alt=''/> */}
          </div>
        </div>

        <div className="tables">
          <Table />
          <div style={{ marginTop: "30px" }}>
            <Table2 />
          </div>
        </div>
      </div>
     
<div className="selectsection">
      <Select
      defaultValue="lucy"
      style={{
        width: "18%",
        marginLeft: "10%"
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'RMS HP-1B-01 µT',
        },
        {
          value: 'lucy',
          label: 'RMS EP-1B-05 V/m',
        },
        {
          value: 'hanz',
          label: 'Peak HP-1B-01 µT',
        },
        {
          value: 'loly',
          label: 'Peak EP-1B-05 V/m',
        },
    
      ]}
    />

<RangePicker
            style={{ width: "40%", marginTop: "20px", marginLeft: "30px"}}
            onChange={(values) => {
              setDates(values && values.map((item) => moment(item.$d).format("YYYY-MM-DD")));
            }}
          />
        <Button style={{marginLeft : '30px', width :"18%"}} onClick={handleRefreshClick} type="primary">Refresh Charts</Button>
        </div>
        <div className="Graphline">
        {selectedComponent}
      </div>
    </div>
  );
}
export default MainBody;
