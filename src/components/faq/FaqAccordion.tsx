"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { faqData } from "@/data/FaqData"
import { CreditCard, Search, Shield, ShoppingCart, Tag, Truck } from "lucide-react"
import { useSearchParams } from "next/navigation"
import type React from "react"
import { Suspense, useEffect, useState } from "react"
import MainPadding from "../theme/MainPadding"

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
  const [noResults, setNoResults] = useState(false)

  // Improved search logic with word boundary matching and no results handling
  useEffect(() => {
    if (query) {
      const searchTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 0)
      
      // Filter FAQs based on search query with improved matching
      const filtered = faqData
        .map((category) => {
          const filteredItems = category.items.filter(
            (item) => {
              // Check if any search term is found in question or answer
              return searchTerms.some(term => 
                item.question.toLowerCase().includes(term) ||
                item.answer.toLowerCase().includes(term)
              )
            }
          )

          return {
            ...category,
            items: filteredItems,
          }
        })
        .filter((category) => category.items.length > 0)

      setFilteredFaqs(filtered)
      setNoResults(filtered.length === 0)

      // Set active tab to the first category that has matches
      if (filtered.length > 0) {
        setActiveTab(filtered[0].category)
      }
    } else {
      setFilteredFaqs(faqData)
      setNoResults(false)
    }
  }, [query])

  return (
    <section className="py-16 md:py-20">
      <MainPadding>
        {query && (
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold mb-2 flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Search results for: <span className="text-primary">&quot;{query}&quot;</span>
            </h2>
            {!noResults ? (
              <p className="text-gray-600 text-base md:text-lg">
                {filteredFaqs.reduce((total, category) => total + category.items.length, 0)} results found
              </p>
            ) : (
              <p className="text-gray-600 text-base md:text-lg">
                No results found. Try using different keywords or browse categories below.
              </p>
            )}
          </div>
        )}

        {noResults && (
          <div className="bg-gray-50 rounded-lg p-8 mb-8 text-center">
            <h3 className="text-xl md:text-2xl font-medium mb-4">No matching FAQs found</h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
              We couldn&apos;t find any FAQs matching your search. Try using different keywords, 
              or browse through our categories below to find the information you need.
            </p>
          </div>
        )}

        {(!noResults) && (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="w-full overflow-x-auto justify-start">
              {filteredFaqs.map((category) => (
                <TabsTrigger
                  key={category.category}
                  value={category.category}
                  className="flex items-center gap-2 px-4 py-2 text-sm md:text-base 2xl:text-lg whitespace-nowrap"
                >
                  {categoryIcons[category.category]}
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {filteredFaqs.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="bg-white rounded-lg shadow-sm border p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center gap-2">
                    {categoryIcons[category.category]}
                    {category.category} FAQ
                  </h2>

                  <Accordion type="single" collapsible className="space-y-4 md:space-y-6">
                    {category.items.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.category}-${index}`}
                        className="border rounded-lg px-4 md:px-6"
                      >
                        <AccordionTrigger className="text-left font-medium py-4 md:py-5 text-sm md:text-base 2xl:text-lg leading-normal">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-4 md:pb-6 text-gray-600 text-sm md:text-base 2xl:text-lg leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}

      </MainPadding>
    </section>
  )
}

export default function FaqAccordions() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>}>
      <FaqAccordion />
    </Suspense>
  )
}