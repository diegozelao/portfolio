import React from "react";
import ProfileImage from "../components/ProfileImage";
import EmailIcon from "../components/icons/Email";
import GitHubIcon from "../components/icons/Github";
import LinkedInIcon from "../components/icons/Linkedin";
import WhatsAppIcon from "../components/icons/WhatsApp";



interface Props extends React.ComponentProps<'div'> {}

export default function Profile(props: Props) {
  const wpp = "https://api.whatsapp.com/send/?phone=5519996622234&text&type=phone_number&app_absent=0"

  return (
    <div {...props} className="profile">
      <div className="textProfile">
        <h1 className="text-3xl">Hello, I`m Diego</h1>
      </div>
      <ProfileImage className="divImgProfile" />
      <div className="divIcon text-zinc-500">
        <a href={wpp} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
        </a>
        <a href="https://www.linkedin.com/in/diegodavidbarros/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/diegozelao" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="mailto:diegodavidtech@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon />
        </a>
        </div>
    </div>
  )
}