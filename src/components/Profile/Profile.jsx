import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ avatar, username, tag, location, stats: {followers, views, likes}}) => {
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img src={avatar} alt="User avatar" className={s.avatar}/>
                <p className={s.name}>{ username}</p>
                <p className={s.tag}>{ tag}</p>
                <p className={s.location}>{ location}</p>
  </div>

            <ul className={s.stats}>
    <li className={s.stats_data}>
      <span>Followers</span>
                    <span className={s.quantity}>{followers }</span>
    </li>
    <li className={s.stats_data}>
      <span>Views</span>
                    <span className={s.quantity}>{views}</span>
    </li>
    <li className={s.stats_data}>
      <span>Likes</span>
                    <span className={s.quantity}>{likes}</span>
    </li>
  </ul>
</div>
    );
}
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;