import { useEffect, useState } from "react";
import WelcomeSubject from "./WelcomeSubject";
const url = 'http://localhost:3030/jsonstore/subjects';


export default function Welcome() {
    const [subjectCheck, setSubjectCheck] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const result = Object.values(data);
                setSubjectCheck(result);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);


    async function statusChangeHandler(subjId, subject_C, isPractised_C) {
        setSubjectCheck(prev => prev.map(sub => sub._id === subjId ? { ...sub, isPractised: !sub.isPractised } : sub));

        await fetch(`${url}/${subjId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    _id: subjId,
                    subject: subject_C,
                    isPractised: !isPractised_C
                }
            )
        });
    }


    return (
        <>
            <h1 className="welcome-heading">Have you practised?</h1>
            <hr />

            <div className="table-wrapper">
                <table>
                    <tbody>
                        {subjectCheck.map(subj =>
                            <WelcomeSubject
                                key={subj._id}
                                _id={subj._id}
                                subject={subj.subject}
                                isPractised={subj.isPractised}
                                onStatusChangeAfterToggleBtnClick={statusChangeHandler}
                            />
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
