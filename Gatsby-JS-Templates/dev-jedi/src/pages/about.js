import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'

export default function about() {
  return (
    <Layout>
      <div className={styles.about}>
          <h1>About Anakin Skywalker</h1>
          <h3> Anakin Skywalker was the son of Shimi Skywalker and was born on the desert planet of Tatooine. He was sensed by Jedi Master Qui-Gon while he was on his mission on the planet. He wanted to make him his apprentice and make him a jedi as he believed "Anakin was the choosen one and could bring balance to the force". But Qui-Gon died while battling Darth Maul(who was later defeated by Obi-Wan) and then Obi-Wan promised to take young Anakin as his Padawan learner and tech him the Jedi Way. </h3>
          
          <h3> Anakin grows up to be a great Jedi and a cunning warrior. Anakin was also the best fighter pilot in the galaxy. In the clone wars Anakin found her mother dies on Tatooine and anger gets hold of him. Anakin was seduced to the dark side by the diguised Sith lord Darth Sidous who went by the name of Palpatine. Palpatine was able to turn Anakin to dark side by seducing the power of dark side and ability to saved loved one's from dying(Anakin was having dreams that Padme,her wife, dies during childbirth). After being fully turned to the Dark side, Anakin was given the name, Darth Vader, the most feared Sith Lord in the galaxy!</h3>
      </div>
    </Layout>
  )
}
