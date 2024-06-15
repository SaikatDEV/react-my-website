import React, { useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import GetAppIcon from "@mui/icons-material/GetApp";
import AddIcon from "@mui/icons-material/Add";

function MaterialTableUI() {
  const [tableData, setTableData] = useState([
    {
      name: "Raj",
      email: "Raj@gmail.com",
      phone: 7894561230,
      age: null,
      gender: "M",
      city: "Chennai",
      fee: 78456,
    },
    {
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      fee: 456125,
    },
    {
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
    },
    {
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      fee: 874569,
    },
    {
      name: "Neha",
      email: "neha@gmail.com",
      phone: 7845621301,
      age: 25,
      gender: "F",
      city: "Patna",
      fee: 748521,
    },
  ]);

  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      enableSorting: false,
      enableFiltering: false,
      cell: ({ cell }) => (
        <div style={{ background: "#009688" }}>{cell.getValue()}</div>
      ),
      headerStyle: { color: "#fff" },
    },
    {
      accessorKey: "email",
      header: "Email",
      filterFn: "includesString",
    },
    {
      accessorKey: "phone",
      header: "Phone Number",
      cell: ({ cell }) => (
        <div style={{ textAlign: "center" }}>{cell.getValue()}</div>
      ),
      enableGrouping: false,
    },
    {
      accessorKey: "age",
      header: "Age",
      Cell: ({ cell }) => (
        <div
          style={{
            background: cell.getValue() >= 18 ? "#008000aa" : "#f90000aa",
            borderRadius: "4px",
            paddingLeft: 5,
          }}
        >
          {cell.getValue() >= 18 ? "18+" : "18-"}
        </div>
      ),
      enableFiltering: false,
      enableExport: false,
    },
    {
      accessorKey: "gender",
      header: "Gender",
      filterFn: "equals",
      cell: ({ cell }) => (cell.getValue() === "M" ? "Male" : "Female"),
    },
    {
      accessorKey: "city",
      header: "City",
      filterFn: "includesString",
    },
    {
      accessorKey: "fee",
      header: "School Fee",
      cell: ({ cell }) => (
        <div style={{ background: "#009688" }}>
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(cell.getValue())}
        </div>
      ),
      headerStyle: { color: "#fff" },
    },
  ];

  return (
    <div className="App  bg-offwhite text-black">
      <h1 align="center">Material Table</h1>
      <div className="px-10 sm:px-4 md:px-6 lg:px-20 xl:px-40">
        <MaterialReactTable
          columns={columns}
          data={tableData}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                setTableData([...tableData, newRow]);
                setTimeout(() => resolve(), 500);
              }),
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve, reject) => {
                const updatedData = [...tableData];
                const index = tableData.indexOf(oldRow);
                updatedData[index] = newRow;
                setTableData(updatedData);
                setTimeout(() => resolve(), 500);
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                const updatedData = tableData.filter(
                  (row) => row !== selectedRow
                );
                setTableData(updatedData);
                setTimeout(() => resolve(), 1000);
              }),
          }}
          actions={[
            {
              icon: () => <GetAppIcon />,
              tooltip: "Click me",
              onClick: (e, data) => console.log(data),
            },
          ]}
          onSelectionChange={(selectedRows) => console.log(selectedRows)}
          options={{
            enableSorting: true,
            enableFilters: true,
            enablePagination: true,
            pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
            pageSize: 5,
            enableRowSelection: true,
            enableRowGrouping: true,
            enableExport: true,
            exportAllData: true,
            exportFileName: "TableData",
            renderTopToolbarCustomActions: () => (
              <button onClick={() => console.log("Custom Action")}>
                Custom Action
              </button>
            ),
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#f44336", color: "#fff" },
          }}
          title="Student Information"
          icons={{ Add: () => <AddIcon /> }}
        />
      </div>
    </div>
  );
}

export default MaterialTableUI;
