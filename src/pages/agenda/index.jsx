import { Link } from "react-router-dom"

export default function Agenda() {
    return (
        <>
            <h1>Agenda</h1>
            <Link to="/">Go to the home page (or any other pages; they share the same component ATM) &rarr;</Link>
        </>
    );
}