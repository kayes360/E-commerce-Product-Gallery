import React from 'react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from './ui/sidebar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
 
import PriceRange from './PriceRange'
import CategoryList from './CategoryList'
import StockAvailability from './StockAvailability'

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-3xl font-bold">
          E-commerce Product Gallery
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Accordion type="multiple" defaultValue={["item-1"]}>
                  <AccordionItem value="item-1" className='bg-white p-3 rounded-md shadow-md mb-3'>
                    <AccordionTrigger>Product Category</AccordionTrigger>
                    <AccordionContent>
                      <CategoryList />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Accordion type="multiple" defaultValue={["item-1"]}>
                  <AccordionItem value="item-1"  className='bg-white p-3 rounded-md shadow-md mb-3'>
                    <AccordionTrigger>Price Range</AccordionTrigger>
                    <AccordionContent>
                      <PriceRange />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Accordion type="multiple" defaultValue={["item-1"]}>
                  <AccordionItem value="item-1"  className='bg-white p-3 rounded-md shadow-md mb-3'>
                    <AccordionTrigger> Product Availability</AccordionTrigger>
                    <AccordionContent>
                      <StockAvailability />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
