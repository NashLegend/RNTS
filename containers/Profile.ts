/**
 * Created by Zhihu on 2017/2/4.
 */
import { connect } from 'react-redux'
import TypeView from '../Profile'

const mapStateToProps = (state) => ({
    user: state.user
})

const Profile = connect(
    mapStateToProps
)(TypeView)

export default Profile