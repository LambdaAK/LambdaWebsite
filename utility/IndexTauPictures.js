import color from "./color"

export default function(props) {
    return (
        <div>
        <div style={{
            backgroundColor: color.darker,
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            
            position: "relative",
          }}>
        <img src="/tau_picture.PNG" style={{
          position: 'relative',
          left: '39%',
          top: '10%'
        }}/>
        <img src="/tau_picture.PNG" style={{
          position: 'relative',
          left: '-18%',
          top: '10%',
          filter: 'grayscale(100%)'
        }}/>
        <img src="/tau_picture.PNG" style={{
          position: 'relative',
          left: '26%',
          top: '10%',
          filter: 'grayscale(100%)'
        }}/>
        </div>
        <div style = {{
          position: 'relative'
        }}></div>
        
        </div>
    )
} 