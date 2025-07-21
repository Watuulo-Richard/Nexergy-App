"use client";
import Link from "next/link";
import { Order } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import SortableColumn from "@/components/backend/DataTableColumns/SortableColumn";
import ActionColumn from "@/components/backend/DataTableColumns/ActionColumn";
import { formatDate } from "@/lib/dateFormat";

export const orderColumns: ColumnDef<Order>[] = [

  {
    accessorKey: "firstName",
    header: "First Name",
    cell: ({ row }) => {
      const order = row.original;
      return <h2>{order.firstName}</h2>;
    },
  },

  {
    accessorKey: "lastName",
    header: "Last Name",
    cell: ({ row }) => {
      const order = row.original;
      return <h2>{order.lastName}</h2>;
    },
  },

  {
    accessorKey: "phone",
    header: "Contact",
    cell: ({ row }) => {
      const order = row.original;
      return <h2>{order.phone}</h2>;
    },
  },

  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => {
      const order = row.original;
      return <h2>{formatDate(order.createdAt)}</h2>;
    },
  },

  {
    accessorKey: "view",
    header: "View",
    cell: ({ row }) => {
      const order = row.original;
      return (
        <Link
          className="flex items-center justify-center"
          target="_blank"
          href={`/dashboard/orders/${order.id}`}
        >
          <Eye className="text-blue-500" />
        </Link>
      );
    },
  },

  // {
  //   accessorKey: "createdAt",
  //   header: "Published On",
  //   cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  // },

  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;
      return (
        <ActionColumn
          row={row}
          model="Order"
          editEndpoint={`/dashboard/orders/${order.id}`}
          id={order.id}
        />
      );
    },
  },
];
