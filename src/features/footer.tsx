import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className='flex justify-center bg-black text-white p-4'>
      <div className="flex flex-col items-center">
        <div className="flex">
          <div className='flex flex-col'>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
          </div>
          <div className='flex flex-col'>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
          </div>
          <div className='flex flex-col'>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
            <Button className="text-white" variant={"link"}>This is a button</Button>
          </div>
        </div>
        <div>
          <div className="m-2">
            Registerd RG Startup 2017-20xx
          </div>
        </div>
      </div >
    </footer >
  )
}

export default Footer;
