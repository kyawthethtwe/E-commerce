"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { X } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"

interface FilterSidebarProps {
  initialCategory?: string;
  initialQuery?: string;
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

const categories = [
  { id: "clothing", name: "Clothing" },
  { id: "electronics", name: "Electronics" },
  { id: "furniture", name: "Furniture" },
  { id: "books", name: "Books" },
]

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  initialCategory, 
  initialQuery, 
  isOpen = true,
  onClose,
  className = ""
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Check if we're on the client-side and handle mobile detection
  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  interface FormValues {
    priceRange: number[];
    categories: string[];
  }

  const { control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      priceRange: [0, 1000],
      categories: initialCategory ? [initialCategory.toLowerCase()] : [],
    },
  })

  // Initialize form with URL parameters
  useEffect(() => {
    if (initialCategory) {
      setValue('categories', [initialCategory.toLowerCase()])
    }
    
    // Handle price range from URL if present
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    
    if (minPrice && maxPrice) {
      const newPriceRange = [parseInt(minPrice), parseInt(maxPrice)]
      setPriceRange(newPriceRange)
      setValue('priceRange', newPriceRange)
    }
  }, [initialCategory, searchParams, setValue])

  const onSubmit = (data: FormValues) => {
    // Build the query string
    const params = new URLSearchParams()
    
    // Add search query if it exists
    if (initialQuery) {
      params.append('q', initialQuery)
    }
    
    // Add category filter (only use the first one for simplicity)
    if (data.categories.length > 0) {
      params.append('category', data.categories[0])
    }
    
    // Add price range
    params.append('minPrice', data.priceRange[0].toString())
    params.append('maxPrice', data.priceRange[1].toString())
    
    // Navigate to the new URL
    router.push(`/products?${params.toString()}`)

    // Close the filter on mobile after submission
    if (onClose) {
      onClose()
    }
  }

  // Base classes for filter sidebar
  const baseClasses = "bg-white p-6 rounded-lg shadow-md h-fit z-40"
  
  // Desktop classes
  const desktopClasses = "hidden lg:block sticky top-20 lg:w-64 xl:w-80 2xl:w-96"
  
  // Mobile classes - slide-in panel when open
  const mobileClasses = "lg:hidden fixed inset-x-0 top-20 w-full  transform transition-transform duration-300 ease-in-out"
  const mobileOpenClasses = "translate-x-0"
  const mobileClosedClasses = "-translate-x-full"

  // Apply mobile or desktop styling based on isOpen state
  const sidebarClasses = `${baseClasses} ${
    !isMobile
      ? desktopClasses
      : `${mobileClasses} ${isOpen ? mobileOpenClasses : mobileClosedClasses}`
  } ${className}`

  // If we're server-side rendering or not mounted yet, return a basic placeholder
  if (!mounted) {
    return (
      <aside className={`${baseClasses} ${desktopClasses} ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-48 bg-gray-200 rounded mb-4"></div>
        </div>
      </aside>
    )
  }

  // If on mobile and sidebar is not open, don't render
  if (isMobile && !isOpen) {
    return null
  }

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={onClose}
        />
      )}

      <aside className={sidebarClasses}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl xl:text-2xl font-semibold">Filters</h2>
          {/* Close button only on mobile */}
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={onClose}
            >
              <X size={18} />
            </Button>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <h3 className="text-lg 2xl:text-xl font-medium mb-2">Price Range</h3>
            <Controller
              name="priceRange"
              control={control}
              render={({ field }) => (
                <Slider 
                min={0} 
                max={1000} 
                step={10} 
                value={field.value} 
                onValueChange={(value) => {
                  field.onChange(value)
                  setPriceRange(value)
                }} />
              )}
            />
            <div className="flex justify-between mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg 2xl:text-xl font-medium mb-2">Categories</h3>
            {categories.map((category) => (
              <div key={category.id} className="flex items-center mb-2">
                <Controller
                  name="categories"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id={category.id}
                      checked={field.value.includes(category.id)}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, category.id]
                          : field.value.filter((id: string) => id !== category.id)
                        field.onChange(newValue)
                      }}
                    />
                  )}
                />
                <label htmlFor={category.id} className="ml-2 text-sm xl:text-base font-medium">
                  {category.name}
                </label>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="w-full">
              Apply Filters
            </Button>
            <Button 
              type="button" 
              variant="outline"
              className="flex-shrink-0"
              onClick={() => {
                router.push('/products')
                if (onClose) onClose()
              }}
            >
              Reset
            </Button>
          </div>
        </form>
      </aside>
    </>
  )
}

export default FilterSidebar

