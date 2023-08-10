import React, { useRef} from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { tableheading } from "../util/tableheading";
import { Transform } from "../util/tableheading";
import { data } from "../util/data";

const Method1 = () => {
const tableRef = useRef(null);
let rowdata=Transform(data);;

  return (
    <div>
      <DownloadTableExcel
        filename="gst2_table"
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
          <tr>
            {rowdata && rowdata.map((val) => {
              return <th>{val ? val : "NA"}</th>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Method1;
