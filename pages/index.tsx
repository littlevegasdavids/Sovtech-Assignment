import Head from 'next/head';
import Header from './Components/Header';
import Box from './Components/Box'
import CodingInfo from './Components/CodingInfo';
import SovTech from './Components/SovTech'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reno Davids</title>
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <div className="bg-white h-full">
        <div className="grid max-w-7xl bg-base-100 mx-auto h-full shadow-lg p-8">
          <Header />
          
          <div className='grid gap-9'>
            <div className='grid justify-items-center screen lg:flex justify-between gap-9'>
              <Box title={"Who am I ?"} content={"A 25 year old creative personality in a coder's brain  who is always learning how to make complex problems into simple solutions."} image={"/me.jpg"} colour={"bg-primary"}/>

              <Box title={"What kind of personality am I ?"} content={"I am a patient & grounded person while being super flexible and adaptable to any situation (like Spider Man). I have a solution focused attitude while being self-directed and self-monitored. I handle people and personalities in a diplomatic way."} image={"/spidey.jpg"} colour={"bg-neutral-content"}/>

              <Box title={"What is my creative outlet?"} content={"I have been playing drums for 14 years now. In the past 3 years I have gone under the pseudonym 'Déjà Gatsby' where I create electronic music as well as DJ as a side hobby. I also love to flex my creative muscles in frontend design and coding."} image={"/gatsby.png"} colour={"bg-secondary"}/>
            </div>

            <div className='grid justify-items-center screen lg:flex justify-between gap-9'>
              <Box title={"What do I aspire to be?"} content={"I am aiming for an industry that uses the combination of the comfort, ease and use of automated technology with nature to create a healthy ecosystem. I want my reputation to be professional, witty, reliable and honest."} image={"/farm.jpg"} colour={"bg-success"}/>

              <Box title={"What are my passions ?"} content={"I love movies especially thriller movies (Memento, Sicario and Nightcrawler). I am a super fan of Survivor and hope that one day I will be able to play the game in person."} image={"/jeff.jpg"} colour={"bg-neutral-content"}/>

              <Box title={"Why give me the chance ?"} content={"While being a introvert, I love being around people that stimulate me in intellectual conversation and learning. I have an innate gift of understanding people which is one of my greatest strengths and what makes me an amazing team player. I believe with the right crew that I can become one of the best people to have in your team."} image={"/helpinghand.jpg"} colour={"bg-accent"}/>
            </div>
          </div>

          <CodingInfo />

          <SovTech />
          <div className='grid pt-5'>
            <div className="grid grid-cols-2 gap-4 mx-auto">
              <a href="https://www.linkedin.com/in/littlevegasdavids/" target="_blank" rel="noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width={50}/>
              </a>
              <a href="https://github.com/littlevegasdavids/" target="_blank" rel="noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={50} className="bg-white"/>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  )
}