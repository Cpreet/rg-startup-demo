import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <div className="flex gap-2 px-10">
      <Button variant={"link"}>Courses</Button>
      <Button variant={"link"}>Projects</Button>
      <Button variant={"link"}>Students</Button>
      <Button>Contact Us!</Button>
    </div>
  )
}

export default Navigation;
