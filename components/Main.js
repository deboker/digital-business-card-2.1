import React from "react"
import { FaEnvelope } from 'react-icons/fa'

export default function Main() {
    return (
        <main>
                <div className="intro">
                    <h1 className="name">Andrej Andrašik</h1>
                    <p className="developer">Frontend Developer</p>
                    <p className="website"
                    href="https://portfolio-andrey-new.netlify.app/"
                    >andrejandrasik.website</p>
            <button
                 onClick={() => (window.location = 'mailto:andrasik.andrej@gmail.com')}
                 className="btn"
                  >
              <FaEnvelope />
                  Email
             </button>
          </div>
              <div className="facts">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. </p>
                <h3>Interests</h3>
                <p>I have a deep appreciation for animals, particularly dogs. In my free time, I enjoy engaging in physical activities such as soccer, tennis, and swimming. I embrace a healthy lifestyle and take pleasure in savoring craft beer, coffee, and tea. Pizza has a special place in my heart. When I'm coding, I am accompanied by my beloved boxer dogs. Although I haven't tried surfing yet, I am always open to new experiences and challenges.</p>
          </div>
        </main>
    )
}