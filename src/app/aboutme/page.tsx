export default function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-12">
      {/* 🇫🇷 Français */}
      <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed first-line:uppercase first-line:tracking-widest 
        first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 
        first-letter:me-3 first-letter:float-start">
        Je suis une informaticienne passionnée spécialisée dans l’infrastructure digitale, avec une orientation particulière vers le Cloud Computing.
        Titulaire d’un diplôme de Technicien Spécialisé en Infrastructure Digitale, je me suis également formée dans les domaines de la cybersécurité,
        des réseaux (CCNAv7) et de l’Internet des Objets (IoT).<br /><br />
        Mon parcours est enrichi par des certifications techniques et une forte implication dans des projets pratiques.
        J’ai acquis des compétences solides en environnement cloud (AWS), en sécurité informatique, en développement web avec Next.js et Tailwind CSS,
        ainsi qu’en gestion de projets numériques.<br /><br />
        Curieuse, rigoureuse et motivée, je suis toujours à la recherche de nouveaux défis pour évoluer dans le domaine des technologies de l'information.
      </p>

      {/* 🇬🇧 English */}
      <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed first-line:uppercase first-line:tracking-widest 
        first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 
        first-letter:me-3 first-letter:float-start">
        I am Fadoua Boumazian, an IT professional specialized in digital infrastructure with a strong focus on Cloud Computing.
        I hold a diploma as a Specialized Technician in Digital Infrastructure and have received additional training in cybersecurity,
        networking (CCNAv7), and the Internet of Things (IoT).<br /><br />
        My journey is enriched with technical certifications and hands-on involvement in practical projects.
        I’ve developed strong skills in cloud environments (AWS), information security, web development using Next.js and Tailwind CSS,
        and digital project management.<br /><br />
        Curious, detail-oriented, and highly motivated, I’m always looking for new challenges to grow within the dynamic world of information technology.
      </p>

      {/* 🇲🇦 العربية */}
      <p dir="rtl" className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed first-line:uppercase first-line:tracking-widest 
        first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 
        first-letter:me-3 first-letter:float-start">
        أنا فدوة بومزيان، مهندسة معلوماتية متخصصة في البنية التحتية الرقمية، مع اهتمام خاص بالحوسبة السحابية.
        حاصلة على دبلوم تقني متخصص في هذا المجال، كما تلقيت تكوينات إضافية في الأمن السيبراني، الشبكات (CCNAv7)، وإنترنت الأشياء (IoT).<br /><br />
        مساري المهني مدعوم بعدة شهادات تقنية ومشاركات عملية في مشاريع ميدانية.
        أتمتع بكفاءات قوية في بيئة الحوسبة السحابية (AWS)، وأمن المعلومات، وتطوير الويب باستخدام Next.js وTailwind CSS،
        بالإضافة إلى إدارة المشاريع الرقمية.<br /><br />
        أتميز بالفضول المهني، والانضباط، والدافع الذاتي، وأسعى دائمًا لمواجهة تحديات جديدة داخل مجال تكنولوجيا المعلومات.
      </p>
    </div>
  );
}
