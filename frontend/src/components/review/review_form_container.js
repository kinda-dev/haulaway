import { connect } from 'react-redux'
import { createReview, clearErrors } from '../../actions/review_actions'
import { fetchJob, updateJob } from '../../actions/job_actions'

import ReviewForm from './review_form'

const mapStateToProps = (state, ownProps) => {
  return {
    author: state.session.user.id,
    jobId: ownProps.match.params.jobId,
    job: state.entities.jobs[ownProps.match.params.jobId],
    currentUserId: state.session.user.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (review) => dispatch(createReview(review)),
    updateJob: job => dispatch(updateJob(job)),
    fetchJob: jobId => dispatch(fetchJob(jobId)),


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)