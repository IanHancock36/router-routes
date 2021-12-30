import { useLocation } from "react-router-dom"
export default function Contact() {
    const queryString = useLocation().search
    
    const queryParams = new UrlSearchParams(queryString)
    const name = queryParams.get("name")
    return (
        <div>
             <h2>Hey {name}, Contact</h2>
            <p>lorem IMPSHAKJASLKJHFKJHSkjskjhfashfas;kjfsa;kjHF;Kjshfk;as</p>
        </div>
    )
}
