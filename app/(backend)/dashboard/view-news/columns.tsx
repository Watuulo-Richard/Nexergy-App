"use client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Eye } from "lucide-react";
import SortableColumn from "@/components/backend/DataTableColumns/SortableColumn";
import ActionColumn from "@/components/backend/DataTableColumns/ActionColumn";
import { News } from "@/lib/generated/prisma";
import ImageColumn from "@/components/backend/DataTableColumns/ImageColumn";

export const columns: ColumnDef<News>[] = [
  {
    accessorKey: "imageUrl",
    header: "News Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
  },

  // {
  //   accessorKey: "title",
  //   header: ({ column }) => (
  //     <SortableColumn column={column} title="News Headline" />
  //   ),
  // },

  {
    accessorKey: "title",
    header: "News Headlines",
    cell: ({ row }) => {
      const news = row.original;
      return <h2>{news.title}</h2>;
    },
  },

  {
    accessorKey: "type",
    header: "News Type",
    cell: ({ row }) => {
      const news = row.original;
      return <h2>{news.type}</h2>;
    },
  },

  {
    accessorKey: "view",
    header: "View",
    cell: ({ row }) => {
      const news = row.original;
      return (
        <Link
          className="flex items-center justify-center space-x-2"
          target="_blank"
          href={`/dashboard/news/${news.id}`}
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
      const news = row.original;
      return (
        <ActionColumn
          row={row}
          model="News"
          editEndpoint={`/dashboard/news/${news.id}`}
          id={news.id}
        />
      );
    },
  },
];
