"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { faqData } from "@/data/FaqData"
import { ShoppingCart, Tag, CreditCard, Truck, Shield } from "lucide-react"
import MainPadding from "../theme/MainPadding"
import { Suspense } from "react"
// Map category names to icons
const categoryIcons: Record<string, React.ReactNode> = {
  Buying: <ShoppingCart className="h-5 w-5 2xl:h-6 2xl:w-6" />,
  Selling: <Tag className="h-5 w-5 2xl:h-6 2xl:w-6" />,
  Payments: <CreditCard className="h-5 w-5 2xl:h-6 2xl:w-6" />,
  Shipping: <Truck className="h-5 w-5 2xl:h-6 2xl:w-6" />,
  "Account & Security": <Shield className="h-5 w-5 2xl:h-6 2xl:w-6" />,
}

function FaqAccordion() {
  const [activeTab, setActiveTab] = useState("Buying")
  const [filteredFaqs, setFilteredFaqs] = useState(faqData)
  const searchParams = useSearchParams()
  const query = searchParams.get("q") // Get search query from URL

  // Filter FAQs based on search query
  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase() // Convert query to lowercase for case-insensitive search
      // Filter FAQs based on search query
      const filtered = faqData
        .map((category) => {
          const filteredItems = category.items.filter(
            (item) =>                           
              item.question.toLowerCase().includes(lowerCaseQuery) ||
              item.answer.toLowerCase().includes(lowerCaseQuery),
          )

          return {
            ...category,
            items: filteredItems, // Update items with filtered items
          }
        })
        .filter((category) => category.items.length > 0) // remove categories with no matches from the list

      setFilteredFaqs(filtered)

      // Set active tab to the first category that has matches
      if (filtered.length > 0) {
        setActiveTab(filtered[0].category)
      }
    } else {
      setFilteredFaqs(faqData) // Reset FAQs to original data
    }
  }, [query])

  return (
    <section className="py-16">
      <MainPadding>
        {query && (
          <div className="mb-8">
            <h2 className="text-2xl 2xl:text-3xl font-semibold mb-2">
              Search results for: <span className="text-primary">&quot;{query}&quot;</span>
            </h2>
            <p className="text-gray-600 text-base 2xl:text-lg">
              {filteredFaqs.reduce((total, category) => total + category.items.length, 0)} results found
            </p>
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="w-full justify-start overflow-x-auto">
            {filteredFaqs.map((category) => (
              <TabsTrigger
                key={category.category}
                value={category.category}
                className="flex items-center gap-2 px-4 py-2 text-sm lg:text-base 2xl:text-lg"
              >
                {categoryIcons[category.category]}
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {filteredFaqs.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl 2xl:text-3xl font-semibold mb-6 flex items-center gap-2">
                  {categoryIcons[category.category]}
                  {category.category} FAQ
                </h2>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.category}-${index}`}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-medium py-4 text-sm lg:text-base 2xl:text-lg">{item.question}</AccordionTrigger>
                      <AccordionContent className="pt-2 pb-4 text-gray-600 text-sm lg:text-base 2xl:text-lg">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </MainPadding>
    </section>
  )
}


export default function FaqAccordions() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <FaqAccordion />
    </Suspense>
  )
}