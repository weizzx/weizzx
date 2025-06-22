import { useEffect, useState } from "react";
import "../css/Header.css"

const Header = () => {

  const messages = ["Creative Coder", "Web Developer", "Building the Future"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 150;
    const currentMessage = messages[index];

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentMessage.substring(0, charIndex - 1)
        : currentMessage.substring(0, charIndex + 1);

      setText(updatedText);
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      if (!isDeleting && updatedText === currentMessage) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % messages.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <header>
      <div className="inner">
        <div>
          <h1 className="title">weizzx.xyz</h1>
          <code>{text}<span className="animate-blink">/</span></code>
        </div>
        <a href="#home">
          <svg className="arrow" viewBox="0 0 512 512" fill="var(--light)" width="min(5vw, 5em)" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z" />
          </svg></a>
      </div>
    </header>
  )
}

export default Header