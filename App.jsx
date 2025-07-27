import { useState } from "react";

export default function App() {
  const [link, setLink] = useState("");
  const [caption, setCaption] = useState("");
  const [generated, setGenerated] = useState(null);

  const generateContent = () => {
    const shortLink = link.startsWith("https://") ? link : `https://${link}`;
    const autoCaption = caption || "🔥 Must See – Click Fast Before It’s Gone! 👇";
    setGenerated({ shortLink, autoCaption });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#121212', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>📱 Xee Digital - Smart Link Poster</h1>

      <input
        type="text"
        placeholder="Paste your Adsterra / YouTube link here"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px', backgroundColor: '#222', color: '#fff', border: '1px solid #555' }}
      />

      <textarea
        placeholder="Optional: Write a catchy caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        rows={3}
        style={{ width: '100%', padding: '10px', backgroundColor: '#222', color: '#fff', border: '1px solid #555', marginBottom: '10px' }}
      ></textarea>

      <button
        onClick={generateContent}
        style={{ padding: '10px 20px', backgroundColor: '#00bcd4', border: 'none', color: '#000', fontWeight: 'bold', cursor: 'pointer' }}
      >
        Generate Link Post
      </button>

      {generated && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#1e1e1e', border: '1px solid #444', borderRadius: '10px' }}>
          <p style={{ color: '#aaa' }}>Generated Post:</p>
          <p style={{ marginTop: '10px', fontSize: '18px' }}>{generated.autoCaption}</p>
          <a href={generated.shortLink} target="_blank" rel="noopener noreferrer" style={{ color: '#00bcd4', wordWrap: 'break-word' }}>
            {generated.shortLink}
          </a>
        </div>
      )}
    </div>
  );
}