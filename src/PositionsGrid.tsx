import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
//import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule, ColDef } from "ag-grid-community";
import { ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const PositionsGrid = () => {
  const [rowData] = useState([
    { commodity: "Brent", price: 85.0 },
    { commodity: "Natural Gas", price: 3.25 },
    { commodity: "Gold", price: 1950.0 },
  ]);

  const columnDefs: ColDef[] = [{ field: "commodity" }, { field: "price" }];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default PositionsGrid;
