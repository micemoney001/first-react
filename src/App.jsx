import React from 'react'
import Nav from './Nav'
import Newwb from './Newwb'
import Mayor from './Mayor'






const App = () => {
  return (
    <>
      <Nav />

      <p>GOD IS GOOD</p>

      <Newwb text={'SING IN'} color={'yellow'} />
      <br />
      <Newwb text={'SING UP'} color={'green'} />
      <br />
      <Newwb text={'APPLY'} color={'purple'} />
      <br /><br /><br />




      <div className='ojo'>
        <p>Why Choose Smile?</p>

        <div className='ist'>
          <div className='koko'>
            <Mayor textt={'Best 4G Network'} twoo={`Enjoy SuperFast internet across Nigeria with 4G LTE data and superClaer  voice services.`} />
          </div>
          <div className='ioio'>
            <Mayor textt={'24X7 Help & Support'} twoo={'Our virtual chat assistant & Customer Care service is available to help you 24/7'} />
          </div>
          <div className='popo'>
            <Mayor textt={'BestValue'} twoo={'Get the BestValue for your money our Data and Voice services.'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App