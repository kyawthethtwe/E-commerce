"use client"
import { useForm, Controller } from "react-hook-form"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useState } from "react"
const categories = [
  { id: "clothing", name: "Clothing" },
  { id: "electronics", name: "Electronics" },
  { id: "furniture", name: "Furniture" },
  { id: "books", name: "Books" },
]

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]) // Add state for price range
  interface FormValues {
    priceRange: number[];
    categories: string[];
  }

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      priceRange: [0, 1000],
      categories: [],
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    // Here you would typically update the global state or make an API call
  }

  return (
    <aside className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md h-fit sticky top-0">
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
        <Button type="submit" className="w-full">
          Apply Filters
        </Button>
      </form>
    </aside>
  )
}

export default FilterSidebar

