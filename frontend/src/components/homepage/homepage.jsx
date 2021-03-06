import React from 'react'
import Navbar from '../navbar/navbar_container'
import Footer from '../footer/footer'
import './homepage.css'
import { withRouter } from 'react-router'

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <Navbar />
        <div className="homepage-inner-wrapper">
          <div
            className="homepage-img-wrapper"
            style={{
              backgroundImage: "url('/box3.jpeg')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="homepage-job-buttons">
              <div className="homepage-job-left-elements-wrapper">
                <div className="homepage-job-buttons-left-header">
                  Take a look at hauling jobs!
                </div>
                <button
                  onClick={() => this.props.history.push('/jobs')}
                  className="homepage-lj-button"
                >
                  View All
                </button>
              </div>
              <div className="homepage-job-right-elements-wrapper">
                <div className="homepage-job-buttons-right-header">
                  Need help with hauling boxes?
                </div>
                <button
                  onClick={() => this.props.history.push('/jobs/new')}
                  className="homepage-rj-button"
                >
                  Request a Job
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Homepage)
