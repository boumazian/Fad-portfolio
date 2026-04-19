// "use client";
// import { useTheme } from "@/context/ThemeContext";
// import ContactLeft from "@/components/ui/contactLeft";
// import ContactReight from "@/components/ui/contactReight";

// export default function ContactSection() {
//   const { dark } = useTheme();
//   const t = dark ? "dk" : "lk";
//   return (
//     <>
//       <style>{`
//         .cs{padding:5rem 1.5rem 4rem;background:var(--bg);transition:background .4s;}
//         .cs-w{max-width:940px;margin:0 auto;border-radius:18px;overflow:hidden;border:1px solid var(--border);display:grid;grid-template-columns:1fr 1.15fr;background:var(--card);box-shadow:var(--shadow);}
//         @media(max-width:680px){.cs-w{grid-template-columns:1fr;}}
//       `}</style>
//       <section className={`cs ${t}`}>
//         <h2 className="sec-title">Contact Me</h2>
//         {/* استعملت &apos; في كلمة Let's */}
//         <p className="sec-sub">Have a project in mind or want to discuss opportunities? Let&apos;s connect!</p>
//         <div className="cs-w">
//           <ContactLeft/>
//           <ContactReight/>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";
import { useTheme } from "@/context/ThemeContext";
import ContactLeft from "@/components/ui/contactLeft";
import ContactReight from "@/components/ui/contactReight";

export default function ContactSection() {
  const { dark } = useTheme();
  const t = dark ? "dk" : "lk";
  return (
    <section id="contact" className={`cs ${t}`}>
      <style>{`
        .cs {
          padding: 120px 1.5rem;
          background: var(--bg);
          position: relative;
          overflow: hidden;
        }

        /* Violet Glow matching Hero/Skills */
        .cs::before {
          content: '';
          position: absolute;
          width: 500px; height: 500px;
          top: 50%; right: -200px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .cs-container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .sec-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          text-align: center;
          color: var(--txt);
          margin-bottom: 1rem;
        }

        .sec-title span {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sec-sub {
          text-align: center;
          color: var(--txt2);
          max-width: 500px;
          margin: 0 auto 4rem;
          line-height: 1.6;
        }

        .cs-w {
          border-radius: 40px; /* Pill-style container */
          overflow: hidden;
          border: 1px solid ${dark ? "rgba(99, 102, 241, 0.2)" : "rgba(0,0,0,0.05)"};
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          background: ${dark ? "rgba(15, 15, 25, 0.7)" : "#ffffff"};
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.2);
          backdrop-filter: blur(10px);
        }

        @media(max-width:850px){.cs-w{grid-template-columns:1fr;}}
      `}</style>

      <div className="cs-container">
        <h2 className="sec-title">Let&apos;s <span>Connect</span></h2>
        <p className="sec-sub">Have a project in mind or want to discuss opportunities? I&apos;m just a message away!</p>
        
        <div className="cs-w">
          <ContactLeft/>
          <ContactReight/>
        </div>
      </div>
    </section>
  );
}