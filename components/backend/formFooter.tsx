"use client";
import React from "react";
import CloseButton from "./formInputs/closeButton";
import SubmitButton from "./submitButton";

export default function FormFooter({
  href,
  editingId,
  loading,
  title,
  parent,
}: {
  href: string;
  editingId: string | undefined;
  loading: boolean;
  title: string;
  parent?: string;
}) {
  return (
    <div className="flex items-center  gap-2 py-4 justify-between ">
      <CloseButton href={href} parent={parent} />
      <SubmitButton
        title={editingId ? `Update ${title}` : `Create ${title}`}
        loading={loading}
      />
    </div>
  );
}
