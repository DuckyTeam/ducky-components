import Avatar from '../Avatar';
import ButtonRaised from '../ButtonRaised';
import ProfilePageMetaFollowers from '../composites/ProfilePageMetaFollowers';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function ProfileGeneralInfo(props) {
    return (
        <div
            className={classNames(styles.outerWrapper, {
                [props.className]: props.className
            })}
        >
            <div
                className={styles.coverImage}
                onClick={props.onClick}
                style={{backgroundImage: `url(${props.imageURL})`}}
            >
                {
                  props.type === 'search'
                  ? <div className={styles.buttonWrapper}>
                      <ButtonRaised
                          className={styles.editProfileButton}
                          onClick={props.handleButtonClick}
                      >
                        {'Rediger profil'}
                      </ButtonRaised>
                  </div>
                  : null
                }
            </div>
            <div className={styles.avatar}>
                <Avatar
                    image={props.avatarImageURL}
                    onClick={props.handleOnAvatarClicked}
                    size={"display2"}
                />
            </div>
            <Spacer size={'double'} />
            <div className={styles.profileMeta}>
                <ProfilePageMetaFollowers
                    followedByYou={props.followedByPerson}
                    isFollowing={props.isFollowing}
                    type={props.type}
                    yourFollowers={props.followersOfPerson}
                />
            </div>
            <Spacer size={'double'} />
            <Wrapper className={styles.innerWrapper}
                size={'standard'}
            >
                <Typography className={styles.name}
                    type={'header1'}
                >
                    {props.name}
                </Typography>
            </Wrapper>
            <Wrapper className={styles.innerWrapper}
                size={'side-bottom'}
            >
                <Typography className={styles.description}
                    type={'bodyTextNormal'}
                >
                    {props.description}
                </Typography>
            </Wrapper>
            <Spacer size={'double'} />
        </div>
    );
}

ProfileGeneralInfo.propTypes = {
    avatarImageURL: React.PropTypes.string,
    className: React.PropTypes.string,
    description: React.PropTypes.string,
    followedByPerson: React.PropTypes.number,
    followersOfPerson: React.PropTypes.number,
    handleButtonClick: React.PropTypes.func,
    handleOnAvatarClicked: React.PropTypes.func,
    imageURL: React.PropTypes.string,
    isFollowing: React.PropTypes.bool,
    name: React.PropTypes.string,
    onActivityClick: React.PropTypes.func,
    onClick: React.PropTypes.func,
    type: React.PropTypes.string
};

export default ProfileGeneralInfo;
