"use client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Eye } from "lucide-react";
import SortableColumn from "@/components/backend/DataTableColumns/SortableColumn";
import ActionColumn from "@/components/backend/DataTableColumns/ActionColumn";
import { Category, News } from "@/lib/generated/prisma";
import ImageColumn from "@/components/backend/DataTableColumns/ImageColumn";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "image",
    header: "Category Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="image" />,
  },

  // {
  //   accessorKey: "title",
  //   header: ({ column }) => (
  //     <SortableColumn column={column} title="News Headline" />
  //   ),
  // },

  {
    accessorKey: "name",
    header: "Category Name",
    cell: ({ row }) => {
      const category = row.original;
      return <h2>{category.name}</h2>;
    },
  },

  {
    accessorKey: "description",
    header: "Category Description",
    cell: ({ row }) => {
      const category = row.original;
      return <h2>{category.description}</h2>;
    },
  },

  {
    accessorKey: "view",
    header: "View",
    cell: ({ row }) => {
      const category = row.original;
      return (
        <Link
          className="flex items-center justify-center space-x-2"
          target="_blank"
          href={`/dashboard/education-page/${category.id}`}
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
      const category = row.original;
      return (
        <ActionColumn
          row={row}
          model="Category"
          editEndpoint={`/dashboard/categories/${category.id}`}
          id={category.id}
        />
      );
    },
  },
];
