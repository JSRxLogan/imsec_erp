export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header
      <header className="bg-[#253973] text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">College ERP</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Login</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header> */}

      {/* Hero Section */}
      <section className="bg-[#eef2f9] text-center py-20 px-6">
        <h2 className="text-3xl font-semibold mb-4">Welcome to College ERP</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Manage academics, administration, and student data in one centralized platform.  
          This is a temporary homepage for testing purposes.
        </p>
      </section>

      {/* Content Section */}
      <main className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-12">
        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[#253973] mb-2">Announcements</h3>
          <p className="text-gray-600">Latest updates and important notices will appear here.</p>
        </div>
        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[#253973] mb-2">Student Login</h3>
          <p className="text-gray-600">Access student portal and academic resources securely.</p>
        </div>
        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[#253973] mb-2">Faculty Login</h3>
          <p className="text-gray-600">Faculty members can manage classes and upload resources.</p>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-[#f3f3f3] text-gray-600 text-center py-4">
        <p>© {new Date().getFullYear()} College ERP. All rights reserved.</p>
      </footer> */}
    </div>
  );
}
