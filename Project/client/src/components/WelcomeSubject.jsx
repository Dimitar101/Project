import styles from './WelcomeSubject.module.css'


export default function WelcomeSubject(
    {
        _id,
        subject,
        isPractised,
        onStatusChange,
    }
) {

    return (
        <tr className={isPractised ? styles['yesCheck'] : styles['noCheck']}>
            <td>{subject}</td>
            <td className="yes-no">{isPractised ? 'Yes' : 'No!'}</td>
            <td>
                <button
                    className="check-studies-btn"
                    onClick={() => onStatusChange(_id)}
                >Toggle </button>
            </td>
        </tr>
    );
}
