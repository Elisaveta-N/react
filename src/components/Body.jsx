import photo from '../images/photo.jpg';
function Body()
{
    return(
        <header className="App-body">
        <img src={photo} className="App-photo" alt="developer"/>
        <p>
          Welcome to my page!
        </p>
        <a
          className="App-link"
          href="https://disk.yandex.ru/a/DwtzhuE2mNyFpQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          More cat photos
        </a>
</header>
    )
}

export default Body;