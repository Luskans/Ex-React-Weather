import './Days.css';
import { DateTime } from "luxon";

// eslint-disable-next-line react/prop-types
export default function Days({ onDayClick }) {
    const date = DateTime.now();

    return (
        <>
            {[...Array(3).keys()].map(i => (
                <a href="#" key={i} className={i === 0 ? "clickedDay" : null} onClick={onDayClick} value={i}>{date.plus({ days: i }).setLocale('fr').toFormat('cccc')}</a>
            ))}
            <a href="#">{date.plus({ days: 3 }).setLocale('fr').toFormat('cccc')}</a>
            <a href="#">{date.plus({ days: 4 }).setLocale('fr').toFormat('cccc')}</a>
        </>
    )
}