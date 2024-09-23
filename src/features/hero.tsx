import peopleWorking from "../assets/undraw_Engineering_team_a7n2.png";

const Hero = () => {
  return (
    <div className="flex gap-5 p-20 justify-between">
      <div className="flex flex-col gap-4 justify-center">
        <div className="text-5xl font-bold">
          Fullstack web development at your fingertips
        </div>
        <div className="text-xl">
          Simplifying development throught <strong>project based</strong> tutoring
        </div>
      </div>
      <img src={peopleWorking} />
    </div>
  )
}

export default Hero
