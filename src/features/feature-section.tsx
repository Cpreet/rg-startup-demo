import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import zeroHundred from "../assets/undraw_Web_development_0l6v.png"
import showcase from "../assets/undraw_Control_panel_re_y3ar.png"
import manyProjects from "../assets/undraw_Inbox_cleanup_re_jcbh.png"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FeatureSection = () => {
  return (
    <section className="flex h-[740px] bg-gray-500 mt-10 p-20 gap-10 justify-center flex-wrap">
      <Card className='w-96'>
        <CardHeader>
          <CardTitle className="text-2xl">From 0 to 100</CardTitle>
          <CardDescription>Trainings for career transition or skill enhancement</CardDescription>
        </CardHeader>
        <CardContent>
          <img src={zeroHundred} />
        </CardContent>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="col-1">
              <AccordionTrigger></AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="col-2">
              <AccordionTrigger></AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="col-3">
              <AccordionTrigger></AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card className='w-96'>
        <CardHeader>
          <CardTitle className="text-2xl">Portfolio for showcase</CardTitle>
          <CardDescription>Develop your portfolio for showcase in the industry</CardDescription>
        </CardHeader>
        <CardContent>
          <img src={showcase} />
        </CardContent>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="col-1">
              <AccordionTrigger></AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="col-2">
              <AccordionTrigger></AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="col-3">
              <AccordionTrigger></AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      <Card className='w-96'>
        <CardHeader>
          <CardTitle className="text-2xl">Extensive Projects</CardTitle>
          <CardDescription>Make industry grade projects, with deployments</CardDescription>
        </CardHeader>
        <CardContent>
          <img src={manyProjects} />
        </CardContent>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="col-1">
              <AccordionTrigger></AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="col-2">
              <AccordionTrigger></AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value="col-3">
              <AccordionTrigger></AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  )
}

export default FeatureSection;
