import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
//import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule, ColDef } from "ag-grid-community";
import { ModuleRegistry } from "ag-grid-community";
import { useEffect } from "react";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface CommodityRow {
  commodity: string;
  price: number;
}

const PositionsGrid = () => {
  const [rowData, setRowData] = useState<CommodityRow[]>([
    { commodity: "Brent", price: 85.0 },
    { commodity: "Natural Gas", price: 3.25 },
    { commodity: "Gold", price: 1950.0 },
  ]);

  const columnDefs: ColDef[] = [{ field: "commodity" }, { field: "price" }];

  useEffect(() => {
    // Simulate WebSocket updates every 2 seconds
    const interval = setInterval(() => {
      setRowData((prevData) =>
        prevData.map((row) => ({
          ...row,
          price: +(row.price + (Math.random() - 0.5)).toFixed(2), // simulate small random price changes
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default PositionsGrid;
