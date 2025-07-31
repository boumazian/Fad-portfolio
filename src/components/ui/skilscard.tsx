export default function SkilsCard (){
return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Frontend Card */}
  <div className="rounded-xl shadow-md p-6 bg-white">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-gradient-to-tr from-blue-500 to-indigo-500 p-2 rounded-lg text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold">Frontend Development</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map(skill => (
        <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Backend Card */}
  <div className="rounded-xl shadow-md p-6 bg-white">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-green-500 p-2 rounded-lg text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold">Backend Development</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"].map(skill => (
        <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>

)

}