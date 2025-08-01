export default function SkilsCard (){
return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-44 pb-24">
  {/* Frontend Card */}
  <div className="rounded-xl shadow-md p-6  bg-white">
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

  {/* Design Card */}
  <div className="rounded-xl shadow-md p-6 bg-white">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-pink-500 p-2 rounded-lg text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold">Design</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {["Figma", "Adobe XD", "UI/UX", "Design Systems", "Prototyping", "Responsive Design"].map(skill => (
        <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Cloud Card */}
  <div className="rounded-xl shadow-md p-6 bg-white">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-yellow-500 p-2 rounded-lg text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 15a4 4 0 104 4h11a4 4 0 100-8 5 5 0 00-9-3 6 6 0 00-6 6z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold">Cloud</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {["AWS", "EC2", "S3", "Lambda", "CloudFormation", "DynamoDB", "Cognito"].map(skill => (
        <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>
  </div>

{/* Security Card */}
<div className="rounded-xl shadow-md p-6 bg-white">
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-red-500 p-2 rounded-lg text-white">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold">Security</h3>
  </div>
  <div className="flex flex-wrap gap-3">
    {["IAM", "Cognito", "Access Control", "VPC Security", "Encryption", "Firewall Rules"].map(skill => (
      <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
        {skill}
      </span>
    ))}
  </div>
</div>

{/* Network Card */}
<div className="rounded-xl shadow-md p-6 bg-white">
  <div className="flex items-center gap-3 mb-4">
    <div className="bg-blue-600 p-2 rounded-lg text-white">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M2 12h20M12 2v20M4 4l16 16" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold">Network</h3>
  </div>
  <div className="flex flex-wrap gap-3">
    {["TCP/IP", "DNS", "Load Balancers", "VPC", "Subnets", "Routing", "Network Monitoring"].map(skill => (
      <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
        {skill}
      </span>
    ))}
  </div>
</div>
</div>

)

}