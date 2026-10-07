import { business } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {business.name}. Усі права захищено.
        </p>
        <p>
          <a href={business.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          {" · "}
          <a href={business.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
}
