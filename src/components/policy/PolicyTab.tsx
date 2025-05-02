"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { policyData } from "@/data/PolicyData"
import { AnimatePresence, motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import MainPadding from "../theme/MainPadding"

function PolicyTabs() {
  const [activeTab, setActiveTab] = useState(policyData[0].id)
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")

  useEffect(() => {
    if (tabParam && policyData.some((policy) => policy.id === tabParam)) {
      setActiveTab(tabParam)
    }
  }, [tabParam])

  const renderPolicyContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return (
        <ul className="list-disc pl-6 space-y-2">
          {content.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      )
    }
    return <p className="text-gray-700">{content}</p>
  }

  return (
    <section className="py-16 md:py-20">
      <MainPadding>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="flex w-full overflow-x-auto justify-start h-auto p-0">
            {policyData.map((policy) => (
              <TabsTrigger key={policy.id} value={policy.id} className="gap-2 text-sm md:text-base 2xl:text-lg whitespace-nowrap">
                {policy.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {policyData.map((policy) => (
              <TabsContent key={policy.id} value={policy.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-sm border p-6 md:p-8"
                >
                  <div className="mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2">{policy.title}</h2>
                    <p className="text-gray-600 text-sm md:text-base 2xl:text-lg">{policy.description}</p>
                  </div>

                  {policy.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-6 md:mb-8">
                      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary">{section.title}</h3>

                      <Accordion type="single" collapsible className="space-y-4 md:space-y-6">
                        {section.content.map((item, itemIndex) => (
                          <AccordionItem
                            key={itemIndex}
                            value={`${policy.id}-${sectionIndex}-${itemIndex}`}
                            className="border rounded-lg px-4 md:px-6"
                          >
                            <AccordionTrigger className="text-left font-medium py-4 md:py-5 text-sm md:text-base 2xl:text-lg leading-normal">
                              {item.heading}
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 md:pb-6 text-gray-600 text-sm md:text-base 2xl:text-lg leading-relaxed">
                              {renderPolicyContent(item.text)}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </MainPadding>
    </section>
  )
}

export default function PolicyTab() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>}>
      <PolicyTabs />
    </Suspense>
  )
}