import { Icon } from "@iconify/react/dist/iconify.js";
//@ts-expect-error-nocheck
import { HorizontalTicker } from "react-infinite-ticker";

import { Button } from "@/components/ui/button";

const Ticker = () => {
  const skills = [
    {
      label: 'HTML',
      icon: 'skill-icons:html',
    },
    {
      label: 'CSS',
      icon: 'skill-icons:css',
    },
    {
      label: 'Javascript',
      icon: 'skill-icons:javascript',
    },
    {
      label: 'React',
      icon: 'skill-icons:react-light'
    },
    {
      label: 'NodeJS',
      icon: 'skill-icons:nodejs-light'
    },
    {
      label: 'MongoDB',
      icon: 'skill-icons:mongodb'
    },
    {
      label: "Express",
      icon: "skill-icons:expressjs-light"
    },
    {
      label: "Github",
      icon: "skill-icons:github-light"
    },
    {
      label: "Git",
      icon: "skill-icons:git"
    },
    {
      label: "OpenAPI",
      icon: "devicon:openapi"
    }
  ]
  return (
    <HorizontalTicker duration={50000}>
      {
        skills.map(item =>
          <div className="flex border transition-all p-5 rounded-3xl gap-5 items-center mx-10 shadow-lg mb-8 hover:shadow-inner">
            <Icon icon={item.icon} fontSize={48} />
            <Button variant={"ghost"}>{item.label}</Button>
          </div>
        )
      }
    </HorizontalTicker>
  )
}

export default Ticker;
