import Case from "../components/Case";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function NoPage(){
    const [navigate, setNavigate] = useState("");
    const [count, setCount] = useState(3);
    useEffect(() => {
        setTimeout(() => {
            setNavigate(<Navigate to="/" />);
        }, 4000);
        setInterval(() => {
            setCount(count - 1);
        }, 1000);
            
    });
    return (
        <Case>
            <h1>Page Not Found</h1>
            <h2>You will be redirect on {count} seconds</h2>
            {navigate}
        </Case>
    );
}