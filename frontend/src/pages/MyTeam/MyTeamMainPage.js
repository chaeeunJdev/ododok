import React from 'react'
import SideBar from '../../components/SideBar'
import styles from '../../styles/Sidebar.module.scss'
function MyTeamMainPage() {
  return (
    <div className={styles['myteam-container']}> 
        <SideBar/>
        <div className={styles.others}>
            MyTeamMainPage
        </div>
    </div>
  )
}

export default MyTeamMainPage