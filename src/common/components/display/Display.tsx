import React from 'react';
import s from "./display.module.scss"
import {fas as IconsCollection} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDelay} from "../../hooks/useDelay";

const itemsNames: string[] = Object.keys(IconsCollection)

const getRandomIconName = (): string => {
    const randomIconNameIndex: number = Math.floor(Math.random() * itemsNames.length)
    return itemsNames[randomIconNameIndex]
}

export function Display() {
    const [delayName, setDelayName] = useDelay(getRandomIconName())

    const handleClick = () => {
        setDelayName(getRandomIconName())
    }

    return (
        <div className={s.display}>
            <FontAwesomeIcon icon={IconsCollection[delayName]} size="8x"/>
            <button className={s.generationButton} onClick={handleClick}>Generate Icon</button>
        </div>
    );
}

