import React from 'react';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Icon from '@/components/footer/Icon';

export default function Footer() {
  return (
    <footer
      className="border-t border-gray-500 flex flex-col justify-center"
      style={{
        backgroundImage: "url('/background.svg'), url('/background.svg')",
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className=" mx-14 md:mx-25 2xl:mx-auto max-w-screen-xl flex flex-col justify-center">
        <div className="flex flex-col justify-center mt-10 max-w-1/2 mx-auto">
          <em className="text-2xl font-bold">
            “In the end we retain from our studies only that which we practically
            apply.”
          </em>
          <span> — Johann Wolfgang von Goethe</span>
        </div>
        <div className="flex justify-center mt-10">
          <Icon href="https://github.com/dmnk-ws" icon={faGithub} />
          <Icon
            href="https://www.linkedin.com/in/dominik-wies-613483204"
            icon={faLinkedin}
          />
          <Icon href="https://www.instagram.com/dmnkws/" icon={faInstagram} />
          <Icon href="mailto:domi.wies@googlemail.com" icon={faPaperPlane} />
        </div>
        <div className="flex justify-center my-10">
          &copy; Copyright {new Date().getUTCFullYear()}. Made by Dominik Wies
        </div>
      </div>
    </footer>
  );
}
