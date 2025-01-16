import { useSelector } from 'react-redux'
import { getCheckboxState } from '../selectors/selectors'


const SubmitButton = () => {
    const checkboxName = 'agree'
    const agreed = useSelector(getCheckboxState(checkboxName))


    return (
        <input type="button" value="Submit" disabled={!agreed}/>
    )
}

export default SubmitButton