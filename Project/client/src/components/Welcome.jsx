import { useEffect, useState } from "react";
import WelcomeSubject from "./WelcomeSubject";


export default function Welcome() {
    const [subjectCheck, setSubjectCheck] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/subjects')
            .then(res => res.json())
            .then(data => {
                const result = Object.values(data);
                setSubjectCheck(result);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);

    const statusChangeHandler = (subjId) => {
        setSubjectCheck(prev => prev.map(sub => sub._id === subjId ? { ...sub, isPractised: !sub.isPractised } : sub));
    }

    return (
        <>
            <h1 className="welcome-heading">Have you practised today?</h1>
            <hr />

            <table>
                <tbody>
                    {subjectCheck.map(subj =>
                        <WelcomeSubject
                            key={subj._id}
                            _id={subj._id}
                            subject={subj.subject}
                            isPractised={subj.isPractised}
                            onStatusChange={statusChangeHandler}
                        />
                    )}
                </tbody>
            </table>
        </>
    );
}
