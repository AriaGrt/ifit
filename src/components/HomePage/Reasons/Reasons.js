import React, {Component} from 'react'
import './Reasons.css'

import Divider from '../Divider/Divider'
export default class Reasons extends Component {

  state = {
    width: window.innerWidth
  }

  componentDidMount(){
    window.addEventListener("resize", () => this.setState({width: window.innerWidth}))
  }

  render(){
    let { width } = this.state
    return(
      <div>
        {
          width >=  768 ? (
            <section className="container-fluid reasons-wrapper-big">
              <h2>5 bonnes raisons de soliciter un coach sportif</h2>
              <div className="row">
                <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-1.png"/></div>
                <div className="col-md-9 my-auto">
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ante hendrerit, convallis libero at, consectetur ante. Aenean eget viverra nisi. Quisque mattis nisl nulla. Donec lacus arcu, mollis a ornare vitae, varius nec risus. Integer pulvinar pellentesque nisl at accumsan. Cras fermentum, dolor sit amet rutrum semper, ex tellus porttitor est, non mattis odio lectus vitae ex. Sed sit amet vulputate neque. Nulla sit amet dui ante.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 my-auto">
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ante hendrerit, convallis libero at, consectetur ante. Aenean eget viverra nisi. Quisque mattis nisl nulla. Donec lacus arcu, mollis a ornare vitae, varius nec risus. Integer pulvinar pellentesque nisl at accumsan. Cras fermentum, dolor sit amet rutrum semper, ex tellus porttitor est, non mattis odio lectus vitae ex. Sed sit amet vulputate neque. Nulla sit amet dui ante.</p>
                </div>
                <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-2.jpg"/></div>
              </div>
              <div className="row">
                <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-1.png"/></div>
                <div className="col-md-9 my-auto">
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ante hendrerit, convallis libero at, consectetur ante. Aenean eget viverra nisi. Quisque mattis nisl nulla. Donec lacus arcu, mollis a ornare vitae, varius nec risus. Integer pulvinar pellentesque nisl at accumsan. Cras fermentum, dolor sit amet rutrum semper, ex tellus porttitor est, non mattis odio lectus vitae ex. Sed sit amet vulputate neque. Nulla sit amet dui ante.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9 my-auto">
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ante hendrerit, convallis libero at, consectetur ante. Aenean eget viverra nisi. Quisque mattis nisl nulla. Donec lacus arcu, mollis a ornare vitae, varius nec risus. Integer pulvinar pellentesque nisl at accumsan. Cras fermentum, dolor sit amet rutrum semper, ex tellus porttitor est, non mattis odio lectus vitae ex. Sed sit amet vulputate neque. Nulla sit amet dui ante.</p>
                </div>
                <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-2.jpg"/></div>
              </div><div className="row">
                <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-1.png"/></div>
                <div className="col-md-9 my-auto">
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ante hendrerit, convallis libero at, consectetur ante. Aenean eget viverra nisi. Quisque mattis nisl nulla. Donec lacus arcu, mollis a ornare vitae, varius nec risus. Integer pulvinar pellentesque nisl at accumsan. Cras fermentum, dolor sit amet rutrum semper, ex tellus porttitor est, non mattis odio lectus vitae ex. Sed sit amet vulputate neque. Nulla sit amet dui ante.</p>
                </div>
              </div>
            </section>
            ) : (
            <section className="container-fluid reasons-wrapper-big">
              <Divider/>
              <div className="reason-wrapper">
                <div className="row">
                  <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-1.png"/></div>
                </div>
                <div className="row">
                  <div className="col-md-9 my-auto">
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ante hendrerit, convallis libero at, consectetur ante. Aenean eget viverra nisi. Quisque mattis nisl nulla. Donec lacus arcu, mollis a ornare vitae, varius nec risus. Integer pulvinar pellentesque nisl at accumsan. Cras fermentum, dolor sit amet rutrum semper, ex tellus porttitor est, non mattis odio lectus vitae ex. Sed sit amet vulputate neque. Nulla sit amet dui ante.</p>
                  </div>
                </div>
              </div>
              <Divider/>
              <div className="reason-wrapper">
                <div className="row">
                  <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-2.jpg"/></div>
                </div>
                <div className="row">
                  <div className="col-md-9 my-auto">
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ante hendrerit, convallis libero at, consectetur ante. Aenean eget viverra nisi. Quisque mattis nisl nulla. Donec lacus arcu, mollis a ornare vitae, varius nec risus. Integer pulvinar pellentesque nisl at accumsan. Cras fermentum, dolor sit amet rutrum semper, ex tellus porttitor est, non mattis odio lectus vitae ex. Sed sit amet vulputate neque. Nulla sit amet dui ante.</p>
                  </div>
                </div>
              </div>
              <Divider/>
              <div className="reason-wrapper">
                <div className="row">
                  <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-2.jpg"/></div>
                </div>
                <div className="row">
                  <div className="col-md-9 my-auto">
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ante hendrerit, convallis libero at, consectetur ante. Aenean eget viverra nisi. Quisque mattis nisl nulla. Donec lacus arcu, mollis a ornare vitae, varius nec risus. Integer pulvinar pellentesque nisl at accumsan. Cras fermentum, dolor sit amet rutrum semper, ex tellus porttitor est, non mattis odio lectus vitae ex. Sed sit amet vulputate neque. Nulla sit amet dui ante.</p>
                  </div>
                </div>
              </div>
              <Divider/>
              <div className="reason-wrapper">
                <div className="row">
                  <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-2.jpg"/></div>
                </div>
                <div className="row">
                  <div className="col-md-9 my-auto">
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ante hendrerit, convallis libero at, consectetur ante. Aenean eget viverra nisi. Quisque mattis nisl nulla. Donec lacus arcu, mollis a ornare vitae, varius nec risus. Integer pulvinar pellentesque nisl at accumsan. Cras fermentum, dolor sit amet rutrum semper, ex tellus porttitor est, non mattis odio lectus vitae ex. Sed sit amet vulputate neque. Nulla sit amet dui ante.</p>
                  </div>
                </div>
              </div>
              <Divider/>
              <div className="reason-wrapper">
                <div className="row">
                  <div className="col-md-3 my-auto"><img className="img-fluid reason-img" src="reason-image-2.jpg"/></div>
                </div>
                <div className="row">
                  <div className="col-md-9 my-auto">
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ante hendrerit, convallis libero at, consectetur ante. Aenean eget viverra nisi. Quisque mattis nisl nulla. Donec lacus arcu, mollis a ornare vitae, varius nec risus. Integer pulvinar pellentesque nisl at accumsan. Cras fermentum, dolor sit amet rutrum semper, ex tellus porttitor est, non mattis odio lectus vitae ex. Sed sit amet vulputate neque. Nulla sit amet dui ante.</p>
                  </div>
                </div>
              </div>
            </section>
          )
        }
      </div>
    )
  }
}
