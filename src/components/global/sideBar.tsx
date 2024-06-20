"use client";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Sidebar() {
  return (
    <nav className="flex h-screen w-full flex-col items-center justify-between gap-10   px-4 py-6 dark:bg-black">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Chapters</AccordionTrigger>
          <AccordionContent className="pl-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1-1">
                <AccordionTrigger>
                  Chapter 1 - 00:00 -&gt; 10:00
                </AccordionTrigger>
                <AccordionContent className="pl-2">
                  Chapter 1 content
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1-2">
                <AccordionTrigger>
                  Chapter 2 - 10:00 -&gt; 20:00
                </AccordionTrigger>
                <AccordionContent className="pl-2">
                  Chapter 2 content
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  );
}

export default Sidebar;
