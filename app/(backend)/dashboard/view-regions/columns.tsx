"use client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Eye } from "lucide-react";
import SortableColumn from "@/components/backend/DataTableColumns/SortableColumn";
import ActionColumn from "@/components/backend/DataTableColumns/ActionColumn";
import { Region } from "@/lib/generated/prisma";
import ImageColumn from "@/components/backend/DataTableColumns/ImageColumn";

export const columns: ColumnDef<Region>[] = [
  // {
  //   accessorKey: "imageUrl",
  //   header: "News Image",
  //   cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
  // },

  // {
  //   accessorKey: "name",
  //   header: ({ column }) => (
  //     <SortableColumn column={column} title="Region Name" />
  //   ),
  // },

  {
    accessorKey: "name",
    header: "Region Name",
    cell: ({ row }) => {
      const region = row.original;
      return <h2>{region.name}</h2>;
    },
  },

  {
    accessorKey: "code",
    header: "Region Code",
    cell: ({ row }) => {
      const region = row.original;
      return <h2>{region.code}</h2>;
    },
  },

  {
    accessorKey: "view",
    header: "View",
    cell: ({ row }) => {
      const region = row.original;
      return (
        <Link
          className="flex items-center justify-center space-x-2"
          target="_blank"
          href={`/dashboard/regions/${region.id}`}
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
      const region = row.original;
      return (
        <ActionColumn
          row={row}
          model="Region"
          editEndpoint={`/dashboard/regions/${region.id}`}
          id={region.id}
        />
      );
    },
  },
];
