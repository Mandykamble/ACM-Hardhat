import React from 'react'

const Cardasj = (props) => {

  return (
    <div>
      <div class="card" style={{width: '18rem'}}>
  <img class="card-img-top" src={props.team.src} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.team.cardtitle}</h5>
    <p class="card-text">{props.team.carddesc}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Client name: {props.team.name}</li>
    <li class="list-group-item">Mode: {props.team.title}</li>
    <li class="list-group-item">Budget: {props.team.budget}</li>
  </ul>
  <div class="card-body">
    <a href="jobdetails" class="card-link">Go to job</a>
    
  </div>
</div>
    </div>
  )
}

export default Cardasj
