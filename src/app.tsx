import { Icon } from "@iconify/react/dist/iconify.js";
import Header from "./features/header"
import Hero from "./features/hero";
//@ts-expect-error-nocheck
import { HorizontalTicker } from "react-infinite-ticker";
import FeatureSection from "./features/feature-section";
import Footer from "./features/footer";

function App() {
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
    }
  ]
  return (
    <>
      <Header />
      <Hero />
      <HorizontalTicker duration={50000}>
        {
          skills.map(item =>
            <div className="flex border p-5 rounded-3xl gap-5 items-center mx-10">
              <Icon icon={item.icon} fontSize={48} />
              {item.label}
            </div>
          )
        }
      </HorizontalTicker>
      <FeatureSection />
      <Footer />
    </>
  )
}

export default App
