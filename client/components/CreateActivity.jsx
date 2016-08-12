import React, { Component, PropTypes } from 'react'
import { Link, hashHistory } from 'react-router'
import { reduxForm } from 'redux-form'
import { uploadImages } from '../storageInit'
import DatePicker from 'react-datepicker'
import moment from 'moment'

class CreateActivity extends Component {
    constructor(props) {
        super(props)
        this.getPhotoStatus = this.getPhotoStatus.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
          startDate: moment()
        }
        this.props.updateDate(moment().format("L"))
    }

    getPhotoStatus(inProgress) {
        switch (inProgress) {
            case 'in progress':
                 return (<div>Loading Photo...</div>)

            case 'success':
                return (<div>Success!</div>)
            case 'nothing found':
                return (<div>Nothing found</div>)
            default:
                 return (<div></div>)
        }
    }

    handleChange(date) {
      this.props.updateDate(date.format("L"))
      this.setState({
        startDate: date
      })
    }

  render() {
    const { fields: {title, subtitle, description, activityStart, activityEnd, formattedAddress, numberRequired, tasks, uid, attendeeIds, images}, handleSubmit} = this.props
    let imageUrl = null
    let inProgress = this.props.imageUpload
    let uploadProgress = null

return (
  <div>
      <div className="banner banner-create">
        <div className="banner-title">Create Your Event</div>
      </div>
        <div className="ui hidden divider"></div>
        <form className="ui form container" onSubmit={() => {
            handleSubmit()
            hashHistory.push('event-list')}}>
          <div className="two fields">
            <div className="field">
              <label>Title: </label>
              <input type="text" placeholder="title" {...title}/>
            </div>
            <div className="field">
              <label>Subtitle: </label>
              <input type="text" placeholder="subtitle" {...subtitle}/>
            </div>
          </div>
          <div className="field">
            <label>Description: </label>
            <textarea type="text" placeholder="description" {...description}></textarea>
          </div>
          <div>
            <label>Date: </label>
              <DatePicker
              dateFormat="DD/MM/YYYY"
              selected={this.state.startDate} onChange={this.handleChange} />
          </div>
          <div>
            <label>Event Time: </label>
            <input type="time" placeholder="activity end" {...activityEnd}/>
          </div>
          <div className="field">
            <label>Location: </label>
            <input type="text" placeholder="address" {...formattedAddress}/>
          </div>
          <div className="field">
            <label>Number of Volunteers Requested: </label>
            <input type="number" placeholder="number" {...numberRequired}/>
          </div>
          <div className="field">
            <label>Tasks: </label>
            <input type="text" placeholder="tasks" {...tasks}/>
          </div>
          <div className="ui hidden divider"></div>
          <div>
            <label>Images: </label>
            <input type="file" onChange={(e) => {
              e.preventDefault()
              this.props.uploadImageRequest(e.target.files)
              }} multiple />
            {this.getPhotoStatus(inProgress)}
          </div>
          <div className="ui hidden divider"></div>
          <button className="ui inverted red button" type="submit">Submit</button>
        </form>
    </div>
    )
  }
}

CreateActivity = reduxForm({
  form: 'createActivityForm',
  fields: ['title', 'subtitle','description', 'activityStart', 'activityEnd', 'formattedAddress', 'numberRequired', 'tasks', 'uid','attendeeIds', 'images'], initialValues: {uid: '1'}

})(CreateActivity)

export default CreateActivity
