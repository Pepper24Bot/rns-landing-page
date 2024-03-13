import { isEmpty } from "lodash"

/**
 * 
 * @param email 
 * @returns 
 */
export const isEmailValid = (email: string) => {
    const pattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g)

    const match = email.toLowerCase().match(pattern)

    return !isEmpty(match)
}

/**
 * 
 * @param elementId 
 */
export const scrollIntoElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
}
