import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectors } from '../reducers'
import { stateData } from '../lib/propTypes'

import UserParcels from '../components/UserParcels'
import Loading from '../components/Loading'

class UserParcelsContainer extends React.Component {
  static propTypes = {
    userParcels: stateData(PropTypes.array)
  }

  onEdit = parcel => {
    console.log('Send data to server', parcel)
  }

  render() {
    const { userParcels } = this.props

    return userParcels.loading ? (
      <Loading />
    ) : (
      <UserParcels userParcels={userParcels.data} onEdit={this.onEdit} />
    )
  }
}

export default connect(
  state => ({
    userParcels: selectors.getUserParcels(state)
  }),
  {}
)(UserParcelsContainer)
