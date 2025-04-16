"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion, AnimatePresence } from "framer-motion"
import { policyData } from "@/data/PolicyData"
import MainPadding from "../theme/MainPadding"
import { Suspense } from "react"

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
    <section className="py-12">
      <MainPadding>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="w-full justify-start overflow-x-auto">
            {policyData.map((policy) => (
              <TabsTrigger key={policy.id} value={policy.id} className="px-4 py-2 text-sm lg:text-base 2xl:text-lg">
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
                  className="bg-white rounded-lg shadow-sm border p-6"
                >
                  <div className="mb-8">
                    <h2 className="text-2xl 2xl:text-3xl font-semibold mb-2">{policy.title}</h2>
                    <p className="text-gray-600 text-base 2xl:text-lg">{policy.description}</p>
                  </div>

                  {policy.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-8">
                      <h3 className="text-xl 2xl:text-2xl font-semibold mb-4 text-primary">{section.title}</h3>

                      <Accordion type="single" collapsible className="space-y-4">
                        {section.content.map((item, itemIndex) => (
                          <AccordionItem
                            key={itemIndex}
                            value={`${policy.id}-${sectionIndex}-${itemIndex}`}
                            className="border rounded-lg px-6"
                          >
                            <AccordionTrigger className="text-left font-medium py-4 text-base 2xl:text-lg">{item.heading}</AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 text-base 2xl:text-lg">{renderPolicyContent(item.text)}</AccordionContent>
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
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <PolicyTabs />
    </Suspense>
  )
}