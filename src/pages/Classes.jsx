import React from 'react'
import '../styles/Classes.css'
import cardio from '../images/cardio.jpg'
import weightlifting from '../images/weightlifting.jpg'
import martialArts from '../images/martial art.jpg'
import yoga from '../images/yoga.jpg'
function Classes() {
  return (
    <div className='classesContainer' id='classes'>
      <div className='secContainer'>
        <div className='title'>
          <h1>Transform Your <br/> Fitness Journey</h1>
          <p>Offers customized workout programs designed to help clients <br/> achieve their fitness goals, such as weight loss, strength and <br/> conditioning, and body shaping</p>
        </div>
        <div>
          <div className='cardContainer'>
            <div className='card1'>
              <h4>1. Cardiovascular Classes: "Get Your Heart Pumping with Cardio Workouts!"</h4>
              <div className='box1'>
               <img src={cardio} alt=''></img>
                <p>Introduction: Cardiovascular exercises are essential for improving heart health and boosting endurance. In this blog post, we'll explore various high-energy classes such as Zumba, Spinning, and Kickboxing, which will get your heart racing and help you achieve your fitness goals.</p>
              </div>
            </div>
            <div className='card2'>
              <h4>2. Strength and Conditioning Classes: "Unleash Your Inner Strength with Strength Training Workouts!"</h4>
              <div className='box2'>
               <img src={weightlifting} alt=''></img>
                <p>Introduction: Strength and conditioning classes are perfect for building muscle, increasing strength, and enhancing overall body composition. Join us as we dive into the world of weightlifting, CrossFit, and circuit training, and discover the benefits of these empowering workouts.</p>
              </div>
            </div>
            <div className='card1'>
              <h4>3. Mind and Body Classes: "Find Balance and Inner Harmony with Mind and Body Workouts!"</h4>
              <div className='box1'>
               <img src={yoga} alt=''></img>
                <p>Introduction: If you're seeking a holistic approach to fitness, mind and body classes can provide the perfect blend of physical exercise and mental relaxation. Explore the benefits of yoga, Pilates, and meditation, and learn how these practices can improve flexibility, promote mindfulness, and create a sense of calm within.</p>
              </div>
            </div>
            <div className='card2'>
              <h4>4. Specialized Classes: "Discover Unique Fitness Experiences with Specialized Classes!"</h4>
              <div className='box2'>
               <img src={martialArts} alt=''></img>
                <p>Introduction: If you're looking for something beyond traditional workouts, specialized classes offer exciting and focused training experiences. Explore the world of martial arts, self-defense, and functional training, and find out how these classes can enhance your skills, boost your confidence, and take your fitness journey to new heights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classes
