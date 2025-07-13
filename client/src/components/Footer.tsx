export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">RoleRaise</h3>
            <p className="text-gray-400 mb-4">Where Preparation Meets the Offer</p>
            <p className="text-gray-400 text-sm">Technical & Strategic Interview Coaching</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Interview Coaching</a></li>
              <li><a href="#" className="hover:text-white">Career Strategy</a></li>
              <li><a href="#" className="hover:text-white">Salary Negotiation</a></li>
              <li><a href="#" className="hover:text-white">Mentorship</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 hello@roleraise.com</p>
              <p>📱 Schedule a call</p>
              <p>🌍 Global reach</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 RoleRaise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
