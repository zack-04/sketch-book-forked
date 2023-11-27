import React from 'react'
import cx from "classnames";
import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { changeBrushSize, changeColor } from '@/slice/toolboxSlice';
import { socket } from "@/socket";

const Toolbox = () => {
   const dispatch = useDispatch();
   const activeMenuItem = useSelector(state => state.menu.activeMenuItem);
   const {color, size} = useSelector(state => state.toolbox[activeMenuItem]);
   const showStrokeToolItem = activeMenuItem === MENU_ITEMS.PENCIL;
   const showBrushToolItem = activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;

   const updateBrushSize = (e) => {
      dispatch(changeBrushSize({item: activeMenuItem, size: e.target.value}));
      socket.emit('changeConfig', {color, size: e.target.value })
   }

   const updateColor = (colorName) => {
      dispatch(changeColor({item: activeMenuItem, color: colorName}));
      socket.emit('changeConfig', {color: colorName, size })
   } 

   return (
      <div className={styles.toolBoxContainer}>
         {showStrokeToolItem && 
            <div className={styles.toolItem}>
               <h4 className={styles.toolText}>Stroke color</h4>
               <div className={styles.itemContainer}>
                  <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.BLACK})} style={{ backgroundColor: COLORS.BLACK }} onClick={() => updateColor(COLORS.BLACK)} />
                  <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.RED})} style={{ backgroundColor: COLORS.RED }} onClick={() => updateColor(COLORS.RED)} />
                  <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.GREEN})} style={{ backgroundColor: COLORS.GREEN }} onClick={() => updateColor(COLORS.GREEN)} />
                  <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.BLUE})} style={{ backgroundColor: COLORS.BLUE }} onClick={() => updateColor(COLORS.BLUE)} />
                  <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.ORANGE})} style={{ backgroundColor: COLORS.ORANGE }} onClick={() => updateColor(COLORS.ORANGE)} />
                  <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.YELLOW})} style={{ backgroundColor: COLORS.YELLOW }} onClick={() => updateColor(COLORS.YELLOW)} />
               </div>
            </div>
         }
         {showBrushToolItem && 
            <div className={styles.toolItem}>
               <h4 className={styles.toolText}>Brush size</h4>
               <div className={styles.itemContainer}>
                  <input type="range" min={1} max={20} step={1} value={size} onChange={updateBrushSize} />
               </div>
            </div>
         }
      </div>
   )
}

export default Toolbox