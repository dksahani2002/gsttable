import React, { useRef} from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { tableheading } from "../util/tableheading";
import { Transform } from "../util/tableheading";
import { data } from "../util/data";
import RowData from "./RowData";


const Method1 = () => {
const tableRef = useRef(null);
let rowdata=Transform(data);;
console.log(rowdata)
  return (
    <div>
      <DownloadTableExcel
        filename="gst4_table"
        sheet="gst"
        currentTableRef={tableRef.current}
      >
        <button> Export excel </button>
      </DownloadTableExcel>

      <table ref={tableRef}>
        <tbody>
          <tr>
            {tableheading.map((val) => {
              return <th>{val}</th>;
            })}
          </tr>
          {rowdata &&
            rowdata.map((value, key) => (
              <tr>
                {" "}
                <RowData key={key} prop={value} />{" "}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Method1;
