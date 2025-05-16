"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Product } from "@/lib/generated/prisma"
import { ProductCategory } from "@/types/types"
import { Download, AlertCircle, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"

export function ManualPreview({fetchedProduct}:{fetchedProduct:ProductCategory | null}) {
  const pdfPath = fetchedProduct?.manual as string
  const [isOpen, setIsOpen] = useState(false)
  const [pdfError, setPdfError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  // Reset states when PDF path changes
  useEffect(() => {
    setPdfError(false)
    setIsLoading(true)
  }, [pdfPath])
  
  // For API-served PDFs, we need to make sure we're using the complete URL
  // This assumes pdfPath already contains the full API URL
  const pdfUrl = pdfPath || ''
  
  // For Google Docs PDF viewer (helps with cross-origin issues)
  const googleDocsViewerUrl = pdfPath 
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(pdfPath)}&embedded=true` 
    : ''

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-red-600 text-white hover:bg-red-600 hover:opacity-90" onClick={() => setIsOpen(true)}>
          View & Download Manual
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] sm:max-w-[725px] max-h-[100vh]">
        <DialogHeader>
          <DialogTitle>Product Manual</DialogTitle>
          <DialogDescription>
            View the manual below or download it for later.
          </DialogDescription>
        </DialogHeader>

        {/* PDF Container */}
        <div className="relative h-[60vh] w-full border rounded-md bg-gray-50">
          {pdfError ? (
            <div className="flex flex-col items-center justify-center h-full p-4 text-center">
              <AlertCircle className="h-10 w-10 text-red-500 mb-2" />
              <p className="font-medium">Unable to preview PDF</p>
              <p className="text-sm text-gray-500 mt-1">Please use the download button to view the manual</p>
            </div>
          ) : (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                  <Loader2 className="h-8 w-8 text-red-600 animate-spin" />
                  <span className="ml-2">Loading PDF...</span>
                </div>
              )}
              
              {/* Using Google Docs Viewer as a fallback for cross-origin PDFs */}
              <iframe 
                src={googleDocsViewerUrl}
                className="w-full h-full rounded-md" 
                title={fetchedProduct?.name || "Product Manual"}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setPdfError(true)
                  setIsLoading(false)
                }}
              />
            </>
          )}
        </div>
        
        <DialogFooter className="">
          <Button variant="outline" onClick={() => setIsOpen(false)}>Close</Button>
          <a href={pdfUrl} download target="_blank" rel="noopener noreferrer">
            <Button className="w-full my-2 md:my-0 bg-red-600 hover:bg-red-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download Manual
            </Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}