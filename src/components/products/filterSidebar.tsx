"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"

interface FilterSidebarProps {
  initialCategory?: string;
  initialQuery?: string;
}

const categories = [
  { id: "clothing", name: "Clothing" },
  { id: "electronics", name: "Electronics" },
  { id: "furniture", name: "Furniture" },
  { id: "books", name: "Books" },
]

const FilterSidebar: React.FC<FilterSidebarProps> = ({ initialCategory, initialQuery }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [priceRange, setPriceRange] = useState([0, 1000])
  
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
  }

  return (
    <aside className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md h-fit sticky top-20">
      <h2 className="text-xl xl:text-2xl font-semibold mb-4">Filters</h2>
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
            
            className="flex-shrink-0"
            onClick={() => router.push('/products')}
          >
            Reset
          </Button>
        </div>
      </form>
    </aside>
  )
}

export default FilterSidebar

