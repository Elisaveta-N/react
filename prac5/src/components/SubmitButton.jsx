import { useSelector } from 'react-redux'
import { selectAgreed } from '../features/counter/agreementSlice';
import "../app/submitButton.css"

const SubmitButton = () => {
    const agreed = useSelector(selectAgreed);

    return (
        <input type="button" value="Принять соглашение" disabled={!agreed} />
    )
}

export default SubmitButton

