import styles from './WelcomeSubject.module.css'


export default function WelcomeSubject(
    {
        _id,
        subject,
        isPractised,
        onStatusChangeAfterToggleBtnClick,
    }
) {

    return (
        <tr className={isPractised ? styles['yesCheck'] : styles['noCheck']}>
            <td>{subject}</td>
            <td className="yes-no">{isPractised ? 'Yes' : 'No!'}</td>
            <td>
                <button
                    className="check-studies-btn"
                    onClick={() => onStatusChangeAfterToggleBtnClick(_id, subject, isPractised)}
                >Toggle </button>
            </td>
        </tr>
    );
}
