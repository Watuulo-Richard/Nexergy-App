import { Search } from "lucide-react"

export default function SearchBar() {
  // A simple search bar with red styling
  return (
    <div className=" w-full mx-auto">
      {/* This is our search box with a red border */}
      <div
        className="
        bg-black/80 
        border border-red-600 
        rounded-md px-3 py-1
        flex items-center justify-between
        focus:outline-none
        focus:ring-0
      "
      >
        {/* Left side with search icon */}
        <div className="flex items-center">
          <Search className="h-6 w-6 text-red-600 mr-2" />

          {/* Search input field */}
          <input
            type="text"
            placeholder="Search documentation..."
            className="
              bg-transparent 
              border-none outline-none
              focus:outline-none
              focus:ring-0
              text-red-600 text-sm w-full 
              placeholder:text-red-400
            "
          />
        </div>

        {/* Right side with keyboard shortcut */}
        <div>
          <kbd
            className="
            flex items-center justify-center 
            rounded px-1.5 h-5 
            text-xs font-medium 
            text-red-600 
            bg-black/50 
            border border-red-600
          "
          >
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  )
}

