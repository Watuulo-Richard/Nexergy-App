"use client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Eye } from "lucide-react";
import SortableColumn from "@/components/backend/DataTableColumns/SortableColumn";
import ActionColumn from "@/components/backend/DataTableColumns/ActionColumn";
import { Product } from "@/lib/generated/prisma";
import ImageColumn from "@/components/backend/DataTableColumns/ImageColumn";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "Product Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="image" />,
  },

  // {
  //   accessorKey: "name",
  //   header: ({ column }) => (
  //     <SortableColumn column={column} title="Region Name" />
  //   ),
  // },

  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => {
      const product = row.original;
      return <h2>{product.name}</h2>;
    },
  },

  {
    accessorKey: "price",
    header: "Product Price",
    cell: ({ row }) => {
      const product = row.original;
      return <h2>{product.price}</h2>;
    },
  },

  {
    accessorKey: "stock",
    header: "Product Stock",
    cell: ({ row }) => {
      const product = row.original;
      return <h2>{product.stock}</h2>;
    },
  },

  // {
  //   accessorKey: "manual",
  //   header: "Product Manual",
  //   cell: ({ row }) => {
  //     const product = row.original;
  //     return <h2>{product.manual}</h2>;
  //   },
  // },

  {
    accessorKey: "view",
    header: "View",
    cell: ({ row }) => {
      const region = row.original;
      return (
        <Link
          className="flex items-center justify-center space-x-2"
          target="_blank"
          href={`/dashboard/products/${region.id}`}
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
      const product = row.original;
      return (
        <ActionColumn
          row={row}
          model="Product"
          editEndpoint={`/dashboard/products/${product.id}`}
          id={product.id}
        />
      );
    },
  },
];
