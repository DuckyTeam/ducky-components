import React from 'react';
import classNames from 'classnames';
import SectionHeaderGeneral from '../SectionHeaderGeneral';
import GoalMenuItem from '../GoalMenuItem';
import Spacer  from '../Spacer';
import styles from './styles.css';
import SectionFooterNew from '../SectionFooterNew';


function CreateGoalPanel1(props){

      return (


        <div className={styles.outerWrapper}>
              <SectionHeaderGeneral
                      onClick={props.onCancel}
                      rightIcon={"icon-close"}
                      title={props.title}
                      children={props.children}
                />

                <Spacer
                  size={"standard"}
                />

               <GoalMenuItem
                inactive= {props.inactive}
                onClick= {props.onClick}
                type= {"co2"}
                />
                <Spacer  className={styles.hr2}
                        size={"hr2"}
                        hr={"true"}
                />

                <GoalMenuItem
                inactive= {props.inactive}
                onClick= {props.onClick}
                type= {'points'}
                />
                <Spacer  className={styles.hr2}
                        size={"hr2"}
                        hr={"true"}
                        padding-right={"16px"}
                        padding-leftt={"68px"}
                />
                <GoalMenuItem
                    inactive= {props.inactive}
                    onClick= {props.onClick}
                    type= {'habit'}
                  />

                  <Spacer className={styles.hr2}
                          size={"hr2"}
                          hr={"true"}

                  />
                  <GoalMenuItem
                      inactive= {props.inactive}
                      onClick= {props.onClick}
                      type= {'activity'}
                    />
                    <Spacer
                    size={'double'}
                    hr={"true"}
                    />
               <SectionFooterNew type={props.type}/>
          </div>

)

}

CreateGoalPanel1.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.string,
    inactive: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    type: React.PropTypes.string,
    size:React.PropTypes.string
};

export default CreateGoalPanel1;
