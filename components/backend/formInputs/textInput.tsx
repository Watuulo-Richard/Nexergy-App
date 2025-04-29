"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { CircleHelp } from "lucide-react";

type TextInputProps = {
  register: any;
  errors: any;
  label: string;
  type?: string;
  name: string;
  toolTipText?: string;
  unit?: string;
  placeholder?: string;
  icon?: any;
  isRequired?: boolean;
  prefix?: string;
  inFocus?: boolean;
  minLength?: number;
  maxLength?: number;
};

export default function TextInput({
  register,
  errors,
  label,
  type = "text",
  name,
  toolTipText,
  unit,
  icon,
  placeholder,
  prefix,
  isRequired = true,
  inFocus = false,
  minLength,
  maxLength,
}: TextInputProps) {
  const Icon = icon;
  // Calculate left padding based on prefix length
  const getPaddingLeft = () => {
    if (prefix) {
      // Roughly estimate the width based on prefix length
      // Each character is approximately 8px wide in most fonts
      // Adding extra padding for spacing
      return `${prefix.length * 9.6 + 16}px`;
    }
    return icon ? "32px" : "12px";
  };
  function getValidationRules() {
    const rules: any = { required: isRequired };

    if (minLength) {
      rules.minLength = {
        value: minLength,
        message: `${label} must be at least ${minLength} characters`,
      };
    }

    if (maxLength) {
      rules.maxLength = {
        value: maxLength,
        message: `${label} must not exceed ${maxLength} characters`,
      };
    }

    return rules;
  };
  return (
    <div>
      <div className="flex space-x-2 items-center">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button>
                  <CircleHelp className="w-4 h-4 text-slate-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="">
        <div className="relative rounded-md">
          {icon && !prefix && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon className="text-slate-300 w-4 h-4" />
            </div>
          )}

          {prefix && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              {prefix}
            </div>
          )}

          <input
            id={name}
            type={type}
            onFocus={inFocus}
            {...register(`${name}`, getValidationRules())}
            style={{ paddingLeft: getPaddingLeft() }}
            className={cn(
              "block w-full rounded-md border-0 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6 ",
              errors[`${name}`] && "focus:ring-red-500"
            )}
            placeholder={type == "text" ? placeholder || label : placeholder}
            // minLength={minLength}
            // maxLength={maxLength}
          />

          {unit && (
            <p className="bg-white py-2 px-3 rounded-tr-md rounded-br-md absolute inset-y-0 right-1 my-[2px] flex items-center">
              {unit}
            </p>
          )}
        </div>
        {errors[`${name}`] && (
          <span className="text-xs text-red-600">
            {errors[`${name}`].message || `${label} is required`}
          </span>
        )}
      </div>
    </div>
  );
}
