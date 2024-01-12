import React, { ReactElement } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Link } from "react-router-dom";
import { Column } from "react-table";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Orders = () => {
  const [rows] = React.useState<DataType[]>([{
    _id: "kuwar",
    amount: 100,
    quantity: 10,
    discount: 10,
    status: <span className="red">Processing</span>,
    action: <Link to={`/order/kuwar`}>View</Link>,
  },
  ]);

  const Table = TableHOC<DataType>(column, rows, "dashboard-product-box", "Orders", rows.length >6)();

  return (
    <div className="container">
      <h1>MY Orders</h1>
      {Table}
    </div>
  );
};

export default Orders;
