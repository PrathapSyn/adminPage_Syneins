import React from "react";
import MaterialTable from "material-table";
import { useSelector } from "react-redux";
import SignalWifiStatusbar4BarIcon from "@mui/icons-material/SignalWifiStatusbar4Bar";
import DoneIcon from '@mui/icons-material/Done';

export default function Devices() {
  const DeviceList = useSelector((state) => state.AdminPageReducers);

  const columns = [
    { title: "SINo", render: (rowData) => rowData.tableData.id + 1 },
   
    { title: "Device ID", field: "deviceId" },
    { title: "IMEI Number", field: "ImeiNumber" },
    { title: "Model", field: "model" },
    { title: "Device Type", field: "deviceType" },
    { title: "Version", field: "version" },
    { title: "SIM PhNo", field: "SimNumber" },
    {title: "Active",field: "active"},
  ];
  const data =
    DeviceList.devicesList &&
    DeviceList.devicesList.map((item) => ({
      active: (
        <DoneIcon
          color={(item.status == "0" && "success") || "dark"}
        />
      ),
      deviceId: item.ReaderId,
      ImeiNumber: item.deviceImei,
      model: item.Model,
      deviceType: item.ReaderType,
      hostelName: item.hostel_name,
      version: item.deviceVersion,
      SimNumber: item.deviceIp,
    }));
  return (
    <MaterialTable
      title={
        <p style={{ fontFamily: "Cursive", fontWeight: "bolder" }}>
          Devices List
        </p>
      }
      columns={columns}
      data={data}
      options={{
        paging:false,
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
         
        },
        rowStyle: {
          fontSize: 13,
        },
      }}
    />
  );
}
