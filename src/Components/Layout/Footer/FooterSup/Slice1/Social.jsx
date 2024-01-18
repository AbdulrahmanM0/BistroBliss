import { faFacebookF, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Social() {
  return (
    <>
        <ul>
            <li>
                <a><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li>
                <a><FontAwesomeIcon icon={faXTwitter} /></a>
            </li>
            <li>
                <a><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
            <li>
                <a><FontAwesomeIcon icon={faGithub} /></a>
            </li>
        </ul>
    </>
  )
}
