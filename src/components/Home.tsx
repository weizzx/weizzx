import '../css/Home.css'

const Home = () => {

  window.scrollTo(0, 0); // Scroll to top immediately on page load

  let scrollControlEnabled = false;
  let lastScrollY = window.scrollY;

  // Enable scroll control after 500ms delay
  setTimeout(() => {
    scrollControlEnabled = true;
  }, 500);

  window.addEventListener("scroll", () => {
    if (!scrollControlEnabled) return;

    const currentY = window.scrollY;

    if (currentY < lastScrollY && currentY < window.innerHeight / 1.25) {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }

    lastScrollY = currentY;
  });

  return (
    <main id="home">
      <div className="inner">
        <h4>Coming soon...!</h4>
      </div>
    </main>
  )
}

export default Home