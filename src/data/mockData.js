export const courses = [
  {
    id: 1,
    title: "Advanced Digital Marketing",
    author: "Sarah Mensah",
    authorAvatar: "https://i.pravatar.cc/150?img=1",
    lessons: 24,
    progress: 64,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
  },
  {
    id: 2,
    title: "Entrepreneurship Fundamentals",
    author: "Kwame Boateng",
    authorAvatar: "https://i.pravatar.cc/150?img=2",
    lessons: 18,
    progress: 32,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80"
  }
];

export const upcomingEvents = [
  { id: 1, title: "Module 4 Quiz", course: "Digital Marketing", time: "TODAY, 5:00 PM", type: "quiz" },
  { id: 2, title: "Peer Review Assignment", course: "UI/UX Design", time: "TOMORROW", type: "assignment" },
  { id: 3, title: "Live Mentor Session", course: "All Students", time: "FRIDAY, 2:00 PM", type: "live" }
];

export const mentors = [
  { id: 1, name: "Fatima Diop", role: "UI Designer", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 2, name: "Oluwaseun Ariyo", role: "Marketing Lead", avatar: "https://i.pravatar.cc/150?img=4" }
];

export const resources = [
  { id: 1, title: "African Market Entry Strategy", type: "PDF", desc: "A comprehensive guide to scaling digital services across the Pan-African region.", category: "Digital Entrepreneurship", updated: "2 days ago", size: "4.2 MB", iconColor: "text-emerald-500", bgIcon: "bg-emerald-50" },
  { id: 2, title: "Python for Data Science Toolkit", type: "XLS", desc: "Ready-to-use scripts and notebooks for cleaning local agricultural data sets using", category: "AI & Data Science", updated: "1 week ago", size: "1.8 MB", iconColor: "text-emerald-500", bgIcon: "bg-emerald-50" },
  { id: 3, title: "FinTech Compliance Checklist", type: "DOC", desc: "Essential regulatory requirements for startups in Nigeria, Kenya, and South Africa. Updated", category: "Legal & Tech Policy", updated: "3 days ago", size: "850 KB", iconColor: "text-emerald-500", bgIcon: "bg-emerald-50" },
  { id: 4, title: "UI/UX Design Systems Workshop", type: "VIDEO", desc: "Recording of the advanced masterclass on creating accessible mobile-first interfaces for", category: "Product Design", updated: "5 days ago", size: "24.5 MB", iconColor: "text-emerald-500", bgIcon: "bg-emerald-50" },
  { id: 5, title: "Social Media Campaign Planner", type: "XLS", desc: "Monthly calendar and content strategy template optimized for WhatsApp and", category: "Digital Marketing", updated: "Today", size: "1.2 MB", iconColor: "text-emerald-500", bgIcon: "bg-emerald-50" },
  { id: 6, title: "Low-Bandwidth Web", type: "PDF", desc: "Technical documentation on reducing DOM size and optimizing image delivery for 2G/3G", category: "Web Development", updated: "2 weeks ago", size: "3.1 MB", iconColor: "text-emerald-500", bgIcon: "bg-emerald-50" },
  { id: 7, title: "Venture Capital Pitch Deck", type: "PDF", desc: "A proven structure for African founders to tell their story and secure seed-stage funding.", category: "Entrepreneurship", updated: "Yesterday", size: "5.4 MB", iconColor: "text-emerald-500", bgIcon: "bg-emerald-50" },
  { id: 8, title: "Machine Learning Model Ethics", type: "DOC", desc: "Framework for auditing AI models for bias in recruitment and financial lending specifically", category: "AI Ethics", updated: "4 days ago", size: "2.1 MB", iconColor: "text-emerald-500", bgIcon: "bg-emerald-50" }
];

export const learners = [
  { id: 1, name: "Fatima Yusuf", course: "AI Foundations", date: "Oct 12, 2023", status: "Active", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 2, name: "Kojo Mensah", course: "Entrepreneurship 101", date: "Oct 11, 2023", status: "Completed", avatar: "https://i.pravatar.cc/150?img=6" },
  { id: 3, name: "Amara Okoro", course: "Digital Literacy", date: "Oct 10, 2023", status: "Active", avatar: "https://i.pravatar.cc/150?img=7" },
  { id: 4, name: "Moussa Diop", course: "Fullstack Web Dev", date: "Oct 09, 2023", status: "Pending", avatar: "https://i.pravatar.cc/150?img=8" },
  { id: 5, name: "Zainab Abdi", course: "UX Design", date: "Oct 08, 2023", status: "Active", avatar: "https://i.pravatar.cc/150?img=9" }
];

export const activityData = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 1.8 },
  { day: 'Wed', hours: 4.2 },
  { day: 'Thu', hours: 3.5 },
  { day: 'Fri', hours: 2.0 },
  { day: 'Sat', hours: 5.5 },
  { day: 'Sun', hours: 3.0 },
];

export const analyticsData = [
  { month: 'Feb', learners: 200, completions: 100 },
  { month: 'Mar', learners: 350, completions: 180 },
  { month: 'Apr', learners: 450, completions: 220 },
  { month: 'May', learners: 700, completions: 300 },
  { month: 'Jun', learners: 900, completions: 450 },
];
