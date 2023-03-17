import React from 'react'
import './jobdetails.css'
import backgroundimages  from '../../utils/avalanche.jpg'

const jobdetails = () => {
  return (
    <>
    <section>
        <div class="form-box2">
            <div class="form-value">
                <form action="">
                    <h2>Job details</h2>
                    <div class="inputbox mygoals">
                        Name: 
                    </div>
                    <div class="inputbox mygoals">
                        Job name: 
                    </div>
                    <div class="inputbox mygoals">
                        Description: 
                    </div>
                    <div class="inputbox mygoals">
                        Budget: 
                    </div>
                    <div class="inputbox mygoals">
                        Location: 
                    </div>
                    <div class="inputbox mygoals">
                        Mode: 
                    </div>
                    
                    
                    
                    <button>Accept</button>
                    
                </form>
            </div>
        </div>
    </section>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  )
}

export default jobdetails
