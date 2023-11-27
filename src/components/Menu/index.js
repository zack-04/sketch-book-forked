import React from 'react'
import cx from "classnames"
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { MENU_ITEMS } from '@/constants'
import { actionItemClick, menuItemClick } from '@/slice/menuSlice'
import styles from "./index.module.css"

const Menu = () => {
   const activeMenuItem = useSelector(state => state.menu.activeMenuItem);
   const dispatch = useDispatch();

   const handleMenuClick = (menuName) => {
      dispatch(menuItemClick(menuName));
   }

   const handleActionItemClick = (actionName) => {
      dispatch(actionItemClick(actionName));
   }

   return (
      <div className={styles.menuContainer}>
         <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU_ITEMS.PENCIL})} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}>
            <FontAwesomeIcon icon={faPencil} className={styles.icon} />
         </div>
         <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU_ITEMS.ERASER})} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}>
            <FontAwesomeIcon icon={faEraser} className={styles.icon} />
         </div>
         <div className={styles.iconWrapper} onClick={() => handleActionItemClick(MENU_ITEMS.UNDO)}>
            <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
         </div>
         <div className={styles.iconWrapper} onClick={() => handleActionItemClick(MENU_ITEMS.REDO)}>
            <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
         </div>
         <div className={styles.iconWrapper} onClick={() => handleActionItemClick(MENU_ITEMS.DOWNLOAD)}>
            <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
         </div>
      </div>
   )
}

export default Menu