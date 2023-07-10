import BreakLength from "./breakLength";
import SessionLength from "./sessionLength";
import SettingsContext from "./settingsContext";
import React, {useContext, useState} from "react";

function Settings(changeTime){

    const settingsInfo = useContext(SettingsContext);

   return (
    <div className="settings">
        <BreakLength
            value = {settingsInfo.BreakLength}
            changeTime = {changeTime}
            title = {"Break Length"}
            type = {"break"}
        />
        <SessionLength 
            value = {settingsInfo.SessionLength}
            onClick = {newValue => settingsInfo.setSessionLength(newValue)}
        />
        
        

    </div>
   ) 
}
export default Settings;