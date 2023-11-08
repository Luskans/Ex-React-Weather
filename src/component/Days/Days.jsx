import './Days.css';
import { DateTime } from "luxon";

export default function Days({ onDayClick }) {
    const date = DateTime.now();

    return (
        <>
            {[...Array(5).keys()].map(i => (
                <a href="#" key={i} className={i === 0 ? "clickedDay" : null} onClick={onDayClick} value={i}>{date.plus({ days: i }).setLocale('fr').toFormat('cccc')}</a>
            ))}
        </>
    )
}