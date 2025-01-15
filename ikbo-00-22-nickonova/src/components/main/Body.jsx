import '../../styles/Body.css'
import WelcomeMessage from './WelcomeMessage'


function Body()
{
    return(
        <div className="Body">
        <img src="/images/photo.jpg" className="Body-photo" alt="developer"/>
        <WelcomeMessage name="Sofie" />
        <a
          className="App-link"
          href="https://disk.yandex.ru/a/DwtzhuE2mNyFpQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          More cat photos
        </a>
</div>
    )
}

export default Body;