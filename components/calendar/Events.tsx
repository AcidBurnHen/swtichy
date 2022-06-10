import { CalendarContext } from "CalendarContext"
import { useContext } from "react"

const Events= () => {

    const context = useContext(CalendarContext)

    console.log(context)

    return (
        <span>
            
        </span>
    )
}

export default Events