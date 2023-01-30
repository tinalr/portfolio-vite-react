
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";



const Socials = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={faLaptopCode} />
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Socials;
