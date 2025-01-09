import { ProfilePropsType } from '@/component/Profile/Profile.type'
import * as Style from '@/component/Profile/Profile.style'

const Profile = (props: ProfilePropsType) => {
  const { $imgSrc } = props

  return <Style.Container src={$imgSrc} {...props} />
}

export default Profile
