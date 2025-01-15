

export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src="https://react-router-ps.vercel.app/static/media/soi-hero-banner-2024.7455aee66183ba225061.jpg"
        alt="SOT Hero Banner 2024"
      />

      <h1>{title}</h1>
      <p>
        If you are excited by the latest technological advances and have a passion for problem-solving, join us at RP School of Infocomm (SOI). We will help you discover your hidden technical skills and nurture your creative digital dreams. We offer six diploma programmes across a wide range of infocomm disciplines.
      </p>
    </div>
  );
}
