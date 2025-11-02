interface HeroProps {
  welcomeMessage?: string;
  welcomeLink?: { href: string; label: string };
  title?: string;
  subtitle?: string;
  primaryButton?: { href: string; label: string };
  secondaryButton?: { href: string; label: string };
}

export default function Hero({
  welcomeMessage = "Welcome to my portfolio.",
  welcomeLink = { href: "/aboutme", label: "Read more →" },
  title = "Hello, I'm Fadoua Boumazian",
  subtitle = "Technicien spécialisé en infrastructure digitale option cloud computing.\nAnd development web",
  primaryButton = { href: "/Cv.pdf", label: "Check out my resume" },
  secondaryButton = { href: "/ContactSection", label: "Get in touch →" },
}: HeroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="relative px-6 pt-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          
          {welcomeMessage && (
            <div className="mb-8 flex justify-center sm:justify-start">
              <div className="rounded-full px-4 py-2 text-sm font-medium bg-white shadow-md ring-1 ring-indigo-100">
                <span className="text-gray-700">{welcomeMessage}</span>
                {welcomeLink && (
                  <a href={welcomeLink.href} className="ml-2 font-semibold text-indigo-600 hover:text-indigo-700">
                    {welcomeLink.label}
                  </a>
                )}
              </div>
            </div>
          )}

          <div className="text-center sm:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mb-12 whitespace-pre-line">
                {subtitle}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pb-20">
              {primaryButton && (
                <a
                  href={primaryButton.href}
                  className="px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all"
                >
                  {primaryButton.label}
                </a>
              )}

              {secondaryButton && (
                <a 
                  href={secondaryButton.href} 
                  className="px-8 py-4 text-base font-semibold text-gray-900 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  {secondaryButton.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}