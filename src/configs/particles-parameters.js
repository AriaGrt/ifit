const Parameters = {
  particles : {
    number : {
      value: 70
    },
    move: {
      speed: 4
    },
    shape: {
      type: "circle",
      stroke: {
        width: 5,
        color: '#a9774b'
      }
    },
    opacity: {
      value: 0
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
    },
    onclick: {
        enable: false,
        mode: "push"
    },
  }
}

export default Parameters
