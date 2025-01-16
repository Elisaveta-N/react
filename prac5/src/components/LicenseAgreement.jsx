import {Checkbox} from './Checkbox'
import SubmitButton from './SubmitButton'
import "../app/lisenseAgreement.css"


const LicenseAgreement = () => {
    return(
        <div>
            <h1>Пользовательское соглашение</h1>
        <p>
        Настоящее пользовательское соглашение (далее — Соглашение) устанавливает условия, правила и 
        ограничения использования Сайта Пользователем. 
        <br></br>
        Пользователь должен любить кошек и соглашаться с тем, что разработчик Сайта - молодец.
        <br></br>
        Если Пользователь не согласен с условиями настоящего Соглашения, то он должен немедленно покинуть Сайт, 
        в противном случае продолжение использования Пользователем Сайта означает, что 
        Пользователь согласен с условиями Соглашения. 
        </p>
        <Checkbox name="agree" label="Согласен(-на)" />
        <SubmitButton />
        </div>
    )
}

export default LicenseAgreement