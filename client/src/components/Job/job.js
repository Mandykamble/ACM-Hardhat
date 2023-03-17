import React from 'react'
import bgimagejob from '../../utils/jobs1.jpg'
import img11 from '../../utils/img11.jpg'
import img12 from '../../utils/img12.jpg'
import img13 from '../../utils/img13.jpg'
import './job.css'
import Cardasj from './Cardasj.js'

import CardGroup from 'react-bootstrap/CardGroup';


const job = () => {

  const team = [
    {
      cardtitle: 'Snow',
      carddesc: 'This an image of snow in the night',
      src: img11,
      name: "John",
      title: "Online",
      budget: 10000
    },
    {
      cardtitle: 'Snow day',
      carddesc: 'This an image of snow in the day',
      src: img12,
      name: "Amber",
      title: "Online",
      budget: 2500
    },
    {
      cardtitle: 'desert',
      carddesc: 'This an image of a desert in the night',
      src: img13,
      name: "Kokushibo",
      title: "Offline",
      budget: 500
    }
    
  ]
  return (
    <>
      <div className='parentconti'>
        <div className='parentcont'>








          <div class="d-flex flex-column mb-3">
            <div class="p-2"><div className='text12'>
              <span className='text-dark'>Select</span> a job for you.
            </div>
            </div>
            <div class="p-2 ">
              < div className='note-list'>
                {
                  team.map((team) =>
                    <Cardasj team={team} />
                  )
                }

              </div>

            </div>
          </div>


        </div>
      </div>
    </>



  )
}

export default job


