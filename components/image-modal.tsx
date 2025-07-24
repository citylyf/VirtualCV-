"use client"

import { useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ZoomIn } from "lucide-react"
import Image from "next/image"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  imageTitle: string
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt, imageTitle }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700">
        <div className="relative w-full h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <ZoomIn className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-black dark:text-white">{imageTitle}</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Image Container */}
          <div className="relative w-full h-[70vh] bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-5xl">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                fill
                className="object-contain rounded-lg shadow-lg"
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Click outside the image or press{" "}
              <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">ESC</kbd> to close
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
