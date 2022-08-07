import "./styles.css";
import { useGlobalContext } from "./context";

export default function Hero() {
  const { sidebarClose } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={sidebarClose}>
      <div className="main-hero">
        <div className="hero-content">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of businesses of all sizes—from startups to large
            enterprises—use Stripe’s software and APIs to accept payments, send
            payouts, and manage their businesses online.
          </p>
        </div>
        <div className="hero-bottom">
          <button className="hero-signIn">Sign In</button>
        </div>
      </div>
    </section>
  );
}
