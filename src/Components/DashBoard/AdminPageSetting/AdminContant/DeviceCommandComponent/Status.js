import React from 'react';
import MaterialTable from "material-table";
import { useSelector } from 'react-redux';
export default function Status() {

  const AdminPageReducers = useSelector(state => state.AdminPageReducers)

    
  const columns = [

    { title: 'SINo', render: rowData => rowData.tableData.id + 1 },
    { title: 'Time', field: 'Time' },
    { title: 'Device', field: 'Device' },
    { title: 'Command Send/Receive', field: 'Command' },
    { title: 'Status', field: 'Status' },
   
  ];
   const data = AdminPageReducers.commandStatusList && AdminPageReducers.commandStatusList.map((item) => (
    {
      Time: item.Time,
      Device: item.Device,
      Command: item.CommandSendReceive,
      Status: item.status,
    }
  ))
    return (
        <MaterialTable
        title={<p style={{ fontFamily: "Cursive", fontWeight: "bolder" }}>
        Devices Status
      </p>}
      columns={columns}
      data={data}       
      actions={[
        {
          icon: 'delete',
          tooltip: 'Delete',
          onClick: (event, rowData) => alert("You Delete " + rowData.name)
        }
      ]}

      options={{actionsColumnIndex: -1,
        paging:false,
        headerStyle : {
          backgroundColor: "#01579b",
          color: "#FFF",
        },
        rowStyle:{
          fontSize:13,
        }}}  
    />
    )
}
