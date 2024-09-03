import Main from "@/app/components/Main.js"
import Header from "@/app/components/Header.js";
import Slider from "@/app/components/Slider.js";

const Home = ()=>{
  return (
      <div>
        <Header></Header>
        <main>
            <Slider></Slider>
            <Main></Main>
        </main>
      </div>
  )
}

export default Home