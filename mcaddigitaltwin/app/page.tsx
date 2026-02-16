

// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'

// export default function RoboticsLandingPage() {
//   const [activeStep, setActiveStep] = useState(0)
//   const [activePricing, setActivePricing] = useState(1)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   })

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY
//       const windowHeight = window.innerHeight
//       const docHeight = document.documentElement.scrollHeight

//       // Auto-advance training steps
//       const stepProgress = Math.floor((scrollY / (docHeight - windowHeight)) * 3)
//       setActiveStep(Math.min(stepProgress, 2))
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <div ref={containerRef} className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
//       {/* Fixed Background Grid */}
//       <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
//         <div className="absolute inset-0" style={{
//           backgroundSize: '40px 40px',
//           backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
//           maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
//         }} />
//       </div>

//       {/* Navigation */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
//               </svg>
//             </div>
//             <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               MCAD SOLUTIONS
//             </span>
//           </div>

//           <nav className="hidden md:flex items-center gap-8">
//             <a href="#products" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Products</a>
//             <a href="#training" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Training</a>
//             <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</a>
//             <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</a>
//           </nav>

//           <div className="flex items-center gap-4">
//             <a href="#contact" className="hidden md:block text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
//               Contact
//             </a>
//             <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//               <span className="relative z-10">Get Quote</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 pb-20 overflow-hidden">
//         {/* Animated Robot Arm Visual */}
//         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] opacity-20 pointer-events-none">
//           <svg viewBox="0 0 400 600" className="w-full h-full">
//             <defs>
//               <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6"/>
//                 <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3"/>
//               </linearGradient>
//             </defs>
//             {/* Robot Arm Animation */}
//             <motion.g
//               animate={{
//                 rotate: [0, 15, -10, 0],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               style={{ transformOrigin: "200px 500px" }}
//             >
//               <rect x="180" y="300" width="40" height="200" rx="8" fill="url(#armGrad)" />
//               <circle cx="200" cy="300" r="25" fill="#6366F1" opacity="0.4" />
              
//               <motion.g
//                 animate={{
//                   rotate: [0, -20, 25, 0],
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.5
//                 }}
//                 style={{ transformOrigin: "200px 300px" }}
//               >
//                 <rect x="185" y="100" width="30" height="200" rx="6" fill="url(#armGrad)" />
//                 <circle cx="200" cy="100" r="20" fill="#3B82F6" opacity="0.5" />
                
//                 <motion.g
//                   animate={{
//                     rotate: [0, 30, -15, 0],
//                   }}
//                   transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 1
//                   }}
//                   style={{ transformOrigin: "200px 100px" }}
//                 >
//                   <rect x="190" y="50" width="20" height="50" rx="4" fill="#6366F1" opacity="0.6" />
//                   <path d="M 190 50 L 180 35 L 200 35 Z" fill="#3B82F6" opacity="0.7" />
//                   <path d="M 210 50 L 220 35 L 200 35 Z" fill="#3B82F6" opacity="0.7" />
//                 </motion.g>
//               </motion.g>
//             </motion.g>
            
//             <circle cx="200" cy="500" r="40" fill="#1E293B" opacity="0.2" />
//           </svg>
//         </div>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
//           <div className="space-y-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50"
//             >
//               <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
//               <span className="text-xs font-semibold text-blue-700 tracking-wide">ROS 2 Jazzy & Humble Ready</span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
//             >
//               Building the Future with{' '}
//               <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                 ROS 2 Digital Twin Robotics
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl"
//             >
//               From Real Robots to Virtual Simulations – We Design, Develop & Train Next-Gen Robotics Solutions using ROS 2, AI & Digital Twins.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="flex flex-wrap gap-4"
//             >
//               <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
//                 <span className="relative z-10">🚀 Explore Products</span>
//                 <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </button>
              
//               <button className="bg-white text-slate-900 border-2 border-slate-200 text-base font-semibold px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-lg">
//                 🎓 Join Training
//               </button>
//             </motion.div>

//             {/* Quick Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200"
//             >
//               <div>
//                 <div className="text-3xl font-bold text-blue-600">100+</div>
//                 <div className="text-sm text-slate-600">Projects Delivered</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-indigo-600">500+</div>
//                 <div className="text-sm text-slate-600">Students Trained</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-purple-600">24/7</div>
//                 <div className="text-sm text-slate-600">Support</div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Interactive Demo Card */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="relative"
//           >
//             <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200/50 backdrop-blur-sm">
//               <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-200">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
//                   <div className="w-3 h-3 rounded-full bg-green-500" />
//                 </div>
//                 <span className="text-xs font-mono text-slate-500">digital_twin_sim.ros2</span>
//               </div>

//               {/* Simulation Visual */}
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200/50">
//                   <span className="text-sm font-medium text-slate-700">Real Robot Status</span>
//                   <span className="flex items-center gap-2 text-sm font-semibold text-green-600">
//                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//                     Connected
//                   </span>
//                 </div>

//                 <div className="grid grid-cols-2 gap-3">
//                   <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
//                     <div className="text-xs text-slate-500 mb-1">Joint Position</div>
//                     <div className="text-xl font-bold text-blue-600">87.3°</div>
//                   </div>
//                   <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
//                     <div className="text-xs text-slate-500 mb-1">Accuracy</div>
//                     <div className="text-xl font-bold text-indigo-600">99.8%</div>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <div className="flex justify-between text-xs text-slate-600">
//                     <span>Gazebo Sync</span>
//                     <span>98%</span>
//                   </div>
//                   <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
//                     <motion.div
//                       className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
//                       initial={{ width: 0 }}
//                       animate={{ width: "98%" }}
//                       transition={{ duration: 2, delay: 1 }}
//                     />
//                   </div>
//                 </div>

//                 <div className="flex gap-2">
//                   <button className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all">
//                     Run Simulation
//                   </button>
//                   <button className="py-2 px-4 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-200 transition-all">
//                     ⚙️
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-24 px-6 md:px-12 bg-white border-y border-slate-200">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
//                 Who We Are
//               </h2>
//               <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
//                 <p>
//                   We are a robotics innovation company specializing in <strong className="text-slate-900">ROS 2 based robotic systems</strong>, <strong className="text-slate-900">Digital Twin simulation in Gazebo</strong>, <strong className="text-slate-900">AI-enabled robotic applications</strong>, and comprehensive educational & industrial training.
//                 </p>
//                 <p>
//                   We bridge the gap between simulation and real hardware, helping students, institutions, and industries adopt <strong className="text-blue-600">Industry 4.0 robotics technologies</strong>.
//                 </p>
//               </div>

//               {/* Mission Badge */}
//               <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shrink-0">
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
//                     <p className="text-sm text-slate-600 leading-relaxed">
//                       Building Indigenous Robotics Solutions for a Self-Reliant India – Supporting Make in India 🇮🇳, Skill India, and Atmanirbhar Bharat initiatives.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Tech Stack Grid */}
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { icon: "🤖", title: "ROS 2", subtitle: "Jazzy & Humble" },
//                 { icon: "🎮", title: "Gazebo", subtitle: "Simulation" },
//                 { icon: "🦾", title: "MoveIt 2", subtitle: "Motion Planning" },
//                 { icon: "👁️", title: "AI Vision", subtitle: "Depth & Detection" },
//                 { icon: "🐍", title: "Python", subtitle: "Programming" },
//                 { icon: "🔗", title: "Digital Twin", subtitle: "Architecture" }
//               ].map((tech, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: idx * 0.1 }}
//                   viewport={{ once: true }}
//                   className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
//                 >
//                   <div className="text-3xl mb-3">{tech.icon}</div>
//                   <h4 className="font-bold text-slate-900 mb-1">{tech.title}</h4>
//                   <p className="text-sm text-slate-500">{tech.subtitle}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section id="products" className="py-32 px-6 md:px-12 bg-gradient-to-b from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Products</h2>
//             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//               Industry-ready robotics solutions for education and automation
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Product 1 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
//             >
//               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl" />
              
//               <div className="flex items-start justify-between mb-6">
//                 <div>
//                   <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
//                     Education
//                   </span>
//                   <h3 className="text-2xl font-bold text-slate-900 mb-2">
//                     Educational Robotics Platform
//                   </h3>
//                 </div>
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-2xl">
//                   🎓
//                 </div>
//               </div>

//               <p className="text-slate-600 mb-6 leading-relaxed">
//                 Complete robotic arm systems integrated with ROS 2, Digital Twin simulation, Python programming, Scratch-based beginner tools, and AI-ready camera integration.
//               </p>

//               <div className="space-y-3 mb-6">
//                 {[
//                   "ROS 2 ready packages",
//                   "Digital twin simulation",
//                   "Python & Scratch programming",
//                   "AI-ready camera integration"
//                 ].map((feature, idx) => (
//                   <div key={idx} className="flex items-center gap-3">
//                     <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span className="text-sm text-slate-700">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 pb-6 border-b border-slate-200">
//                 <span className="font-medium">Ideal For:</span>
//                 <span>Schools • Colleges • Robotics Labs • Skill Centers</span>
//               </div>

//               <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all group-hover:scale-[1.02]">
//                 Learn More →
//               </button>
//             </motion.div>

//             {/* Product 2 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 text-white"
//             >
//               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-2xl" />
              
//               <div className="flex items-start justify-between mb-6">
//                 <div>
//                   <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full mb-3">
//                     Industrial
//                   </span>
//                   <h3 className="text-2xl font-bold mb-2">
//                     Digital Twin Robotics Solution
//                   </h3>
//                 </div>
//                 <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
//                   🏭
//                 </div>
//               </div>

//               <p className="text-slate-300 mb-6 leading-relaxed">
//                 Full Digital Twin environments where real robots and simulations run in sync with AI vision integration and industrial workflow simulation.
//               </p>

//               <div className="grid grid-cols-2 gap-3 mb-6">
//                 {[
//                   { label: "Zero-risk testing", icon: "✅" },
//                   { label: "Reduced damage", icon: "🛡️" },
//                   { label: "Faster R&D", icon: "⚡" },
//                   { label: "Industry-ready", icon: "🚀" }
//                 ].map((benefit, idx) => (
//                   <div key={idx} className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/10">
//                     <span className="text-xl">{benefit.icon}</span>
//                     <span className="text-sm font-medium">{benefit.label}</span>
//                   </div>
//                 ))}
//               </div>

//               <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all group-hover:scale-[1.02]">
//                 Request Demo →
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Training Programs */}
//       <section id="training" className="py-32 px-6 md:px-12 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Training Programs</h2>
//             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//               From beginner to advanced AI robotics – comprehensive learning paths
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 level: "Level 1",
//                 title: "Beginner Robotics",
//                 icon: "🌱",
//                 color: "green",
//                 topics: [
//                   "Basic Python Programming",
//                   "Scratch Programming",
//                   "Mobile/Laptop app control",
//                   "Hardware Introduction"
//                 ]
//               },
//               {
//                 level: "Level 2",
//                 title: "ROS 2 & Simulation",
//                 icon: "⚙️",
//                 color: "blue",
//                 topics: [
//                   "URDF & Xacro Modeling",
//                   "Gazebo Simulation",
//                   "TF & Camera Integration",
//                   "MoveIt 2 Motion Planning"
//                 ]
//               },
//               {
//                 level: "Level 3",
//                 title: "Advanced AI Robotics",
//                 icon: "🧠",
//                 color: "purple",
//                 topics: [
//                   "Vision-based object detection",
//                   "Depth estimation integration",
//                   "Digital twin synchronization",
//                   "Pick & Place automation"
//                 ]
//               }
//             ].map((program, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`group relative bg-white rounded-2xl p-8 border-2 ${
//                   program.color === 'green' ? 'border-green-200 hover:border-green-400' :
//                   program.color === 'blue' ? 'border-blue-200 hover:border-blue-400' :
//                   'border-purple-200 hover:border-purple-400'
//                 } hover:shadow-2xl transition-all duration-500 cursor-pointer`}
//               >
//                 <div className="text-5xl mb-4">{program.icon}</div>
                
//                 <div className={`inline-block px-3 py-1 ${
//                   program.color === 'green' ? 'bg-green-100 text-green-700' :
//                   program.color === 'blue' ? 'bg-blue-100 text-blue-700' :
//                   'bg-purple-100 text-purple-700'
//                 } text-xs font-bold rounded-full mb-3`}>
//                   {program.level}
//                 </div>
                
//                 <h3 className="text-2xl font-bold text-slate-900 mb-6">{program.title}</h3>
                
//                 <ul className="space-y-3">
//                   {program.topics.map((topic, tidx) => (
//                     <li key={tidx} className="flex items-start gap-3">
//                       <svg className={`w-5 h-5 shrink-0 ${
//                         program.color === 'green' ? 'text-green-600' :
//                         program.color === 'blue' ? 'text-blue-600' :
//                         'text-purple-600'
//                       }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
//                       </svg>
//                       <span className="text-sm text-slate-700">{topic}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button className={`w-full mt-8 py-3 ${
//                   program.color === 'green' ? 'bg-gradient-to-r from-green-600 to-emerald-600' :
//                   program.color === 'blue' ? 'bg-gradient-to-r from-blue-600 to-indigo-600' :
//                   'bg-gradient-to-r from-purple-600 to-indigo-600'
//                 } text-white font-semibold rounded-lg hover:shadow-lg transition-all group-hover:scale-[1.02]`}>
//                   Enroll Now
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-32 px-6 md:px-12 bg-gradient-to-b from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h2>
//             <p className="text-xl text-slate-600">End-to-end robotics solutions and support</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { icon: "🔧", title: "Custom ROS 2 Robot Development", desc: "Tailored robotic systems built to your specifications" },
//               { icon: "🔗", title: "Digital Twin Implementation", desc: "Full simulation environments synced with hardware" },
//               { icon: "🏭", title: "Industrial Automation Simulation", desc: "Test workflows virtually before deployment" },
//               { icon: "🎓", title: "Lab Setup for Colleges", desc: "Complete robotics lab infrastructure and curriculum" },
//               { icon: "👔", title: "Corporate Robotics Training", desc: "Upskill your workforce with industry-ready training" },
//               { icon: "🤝", title: "Consultation & Support", desc: "Expert guidance for your robotics journey" }
//             ].map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4, delay: idx * 0.05 }}
//                 viewport={{ once: true }}
//                 className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="text-4xl mb-4">{service.icon}</div>
//                 <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
//                 <p className="text-sm text-slate-600">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
//             backgroundSize: '32px 32px'
//           }} />
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose MCAD Solutions?</h2>
//             <p className="text-xl text-blue-100">Excellence in every dimension of robotics</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { icon: "✅", title: "Real Hardware + Simulation Expertise", desc: "Best of both worlds" },
//               { icon: "🚀", title: "ROS 2 Native Development", desc: "Latest tech stack" },
//               { icon: "🏆", title: "Industry-Level Implementation", desc: "Production-ready solutions" },
//               { icon: "💰", title: "Affordable Educational Solutions", desc: "Value for money" },
//               { icon: "📚", title: "Customizable Training Modules", desc: "Tailored learning paths" },
//               { icon: "🇮🇳", title: "Supporting National Initiatives", desc: "Make in India aligned" }
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 viewport={{ once: true }}
//                 className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all"
//               >
//                 <div className="text-3xl">{item.icon}</div>
//                 <div>
//                   <h3 className="text-lg font-bold mb-1">{item.title}</h3>
//                   <p className="text-sm text-blue-100">{item.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-32 px-6 md:px-12 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
//             Let's Build Smart Robotics Together
//           </h2>
//           <p className="text-xl text-slate-600 mb-12">
//             Ready to transform your robotics vision into reality?
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
//               <div className="text-3xl mb-3">📍</div>
//               <h3 className="font-bold text-slate-900 mb-2">Location</h3>
//               <p className="text-sm text-slate-600">India</p>
//             </div>
//             <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
//               <div className="text-3xl mb-3">📧</div>
//               <h3 className="font-bold text-slate-900 mb-2">Email</h3>
//               <p className="text-sm text-slate-600">contact@mcadsolutions.com</p>
//             </div>
//             <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
//               <div className="text-3xl mb-3">📞</div>
//               <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
//               <p className="text-sm text-slate-600">+91-XXXXXXXXXX</p>
//             </div>
//           </div>

//           <div className="flex flex-wrap justify-center gap-4">
//             <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
//               👉 Request Demo
//             </button>
//             <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all">
//               📄 Download Brochure
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900 text-white py-16 px-6 md:px-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
//             <div className="md:col-span-2">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
//                   </svg>
//                 </div>
//                 <span className="text-xl font-bold">MCAD SOLUTIONS</span>
//               </div>
//               <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-4">
//                 Building Indigenous Robotics Solutions for a Self-Reliant India. We support Make in India 🇮🇳, Skill India, and Atmanirbhar Bharat initiatives.
//               </p>
//               <p className="text-xs text-slate-500">© 2026 MCAD Solutions. All rights reserved.</p>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Quick Links</h4>
//               <ul className="space-y-2 text-sm text-slate-400">
//                 <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
//                 <li><a href="#training" className="hover:text-white transition-colors">Training</a></li>
//                 <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
//                 <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Connect</h4>
//               <ul className="space-y-2 text-sm text-slate-400">
//                 <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
//             <p>We support and align with national initiatives such as Make in India, Skill India, and Atmanirbhar Bharat. We are an independent organization.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }


'use client'

import { useEffect } from 'react'

export default function RoboticsLandingPage() {
  useEffect(() => {
    // Lucide icons initialization
    if (typeof window !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons()
    }

    // Pricing card interaction
    const cards = ['pricing-hobby', 'pricing-pro', 'pricing-ent']
    function updateState(selectedId: string) {
      cards.forEach(id => {
        const card = document.getElementById(id)
        if (!card) return
        const isSelected = id === selectedId
        if (isSelected) {
          card.classList.add('scale-[1.02]', 'shadow-2xl', 'z-10', 'ring-1', 'ring-obsidian/5', 'opacity-100')
          card.classList.remove('scale-[0.98]', 'opacity-60', 'hover:shadow-xl')
          if (id !== 'pricing-pro') {
            card.classList.add('border-obsidian')
            card.classList.remove('border-border')
          }
        } else {
          card.classList.remove('scale-[1.02]', 'shadow-2xl', 'z-10', 'border-obsidian', 'ring-1', 'ring-obsidian/5', 'opacity-100')
          card.classList.add('border-border', 'opacity-60', 'scale-[0.98]')
        }
      })
    }
    
    cards.forEach(id => {
      const card = document.getElementById(id)
      if (card) {
        card.addEventListener('click', () => updateState(id))
        card.addEventListener('mouseenter', () => {
          if (card.classList.contains('opacity-60')) {
            card.classList.remove('opacity-60')
            card.classList.add('opacity-90')
          }
        })
        card.addEventListener('mouseleave', () => {
          const isSelected = card.classList.contains('z-10')
          if (!isSelected) {
            card.classList.remove('opacity-90')
            card.classList.add('opacity-60')
          }
        })
      }
    })
    updateState('pricing-pro')

    // Lifecycle scroll animation
    const section = document.getElementById('decision-lifecycle')
    const header = document.getElementById('lifecycle-header')
    const line = document.getElementById('lifecycle-line')
    const steps = section?.querySelectorAll('.lifecycle-step')

    function handleScroll() {
      if (!section) return
      const rect = section.getBoundingClientRect()
      const viewH = window.innerHeight
      const travelDistance = rect.height - viewH
      const scrolled = -rect.top
      let progress = scrolled / travelDistance
      progress = Math.max(0, Math.min(1, progress))

      if (header) {
        if (progress > 0.02) header.style.opacity = '1'
        else header.style.opacity = '0'
      }

      if (line) {
        line.style.height = (progress * 100) + '%'
      }

      steps?.forEach(step => {
        const t = parseFloat(step.getAttribute('data-threshold') || '0')
        if (progress >= t) {
          if (progress < t + 0.15) {
            step.classList.add('active')
            step.classList.replace('opacity-30', 'opacity-100')
            ;(step as HTMLElement).style.transform = 'scale(1.05)'
          } else {
            step.classList.add('active')
            step.classList.replace('opacity-30', 'opacity-50')
            ;(step as HTMLElement).style.transform = 'scale(1)'
          }
        } else {
          step.classList.remove('active')
          step.classList.replace('opacity-100', 'opacity-30')
          step.classList.replace('opacity-50', 'opacity-30')
          ;(step as HTMLElement).style.transform = 'scale(1)'
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true } as any)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          background-color: #FAFAFA;
          color: #111111;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .technical-grid {
          background-size: 40px 40px;
          background-image:
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
          mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
        }
        .premium-card {
          background: #FFFFFF;
          border: 1px solid #EAEAEA;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02), 0 8px 16px -4px rgba(0,0,0,0.04);
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .premium-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.03), 0 12px 24px -6px rgba(0,0,0,0.06);
          border-color: #D4D4D4;
        }
        .pricing-transition {
          transition:
            transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 300ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 500ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 500ms cubic-bezier(0.22, 1, 0.36, 1),
            background-color 500ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity, box-shadow;
        }
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        .shimmer-layer { transform: translateX(-100%); }
        .group:hover .shimmer-layer { animation: shimmer 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
      `}</style>

      <div className="w-full relative bg-canvas" style={{ backgroundColor: '#FAFAFA' }}>
        {/* Fixed Backgrounds */}
        <div className="fixed inset-0 z-0 technical-grid pointer-events-none"></div>

        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-5 md:px-12 flex justify-between items-center bg-canvas/90 backdrop-blur-md border-b border-border/50 transition-all duration-300" style={{ backgroundColor: 'rgba(250, 250, 250, 0.9)', borderColor: 'rgba(229, 229, 229, 0.5)' }}>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-obsidian text-white flex items-center justify-center rounded-sm" style={{ backgroundColor: '#111111' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>
            </div>
            <span className="font-sans text-sm font-bold tracking-tight text-obsidian" style={{ color: '#111111' }}>
              MCAD SOLUTIONS
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" style={{ color: '#737373' }}>
              Products
            </a>
            <a href="#training" className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" style={{ color: '#737373' }}>
              Training
            </a>
            <a href="#services" className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" style={{ color: '#737373' }}>
              Services
            </a>
            <a href="#about" className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" style={{ color: '#737373' }}>
              About
            </a>
          </nav>

          <div className="flex items-center gap-5">
            <a href="#contact" className="hidden md:block font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors" style={{ color: '#737373' }}>
              Contact
            </a>
            <button className="group relative isolate overflow-hidden bg-obsidian text-white text-xs font-semibold px-6 py-2.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.04] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] hover:ring-white/20 active:scale-[0.98]" style={{ backgroundColor: '#111111' }}>
              <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent z-10"></div>
              <span className="relative z-20">Get Quote</span>
            </button>
          </div>
        </header>

        {/* Content Wrapper */}
        <div className="z-10 flex flex-col w-full relative">
          {/* HERO SECTION */}
          <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
            <div className="max-w-2xl space-y-10 relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-border/60 shadow-sm" style={{ borderColor: 'rgba(229, 229, 229, 0.6)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="font-sans text-[11px] font-medium text-subtle tracking-tight" style={{ color: '#737373' }}>
                    ROS 2 Jazzy & Humble Ready
                  </span>
                </div>
                <h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-obsidian leading-[0.95]" style={{ color: '#111111' }}>
                  Building the Future
                  <br />
                  <span className="text-subtle" style={{ color: '#737373' }}>with ROS 2 Digital Twin Robotics.</span>
                </h1>
                <p className="max-w-md font-sans text-base text-subtle leading-relaxed" style={{ color: '#737373' }}>
                  From Real Robots to Virtual Simulations – We Design, Develop & Train Next-Gen Robotics Solutions using ROS 2, AI & Digital Twins.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.3)] hover:ring-white/20 active:scale-[0.98] flex items-center gap-2" style={{ backgroundColor: '#111111' }}>
                  <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
                  <span className="relative z-10">🚀 Explore Products</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
                <button className="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded shadow-sm transition-all duration-300 ease-out hover:bg-gray-50 hover:border-obsidian/40 hover:text-black hover:shadow-md active:scale-[0.97]" style={{ color: '#111111', borderColor: '#E5E5E5' }}>
                  🎓 Join Training
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-canvas via-white to-canvas opacity-50 blur-3xl"></div>
              <div className="premium-card w-full h-full p-6 relative overflow-hidden rounded-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-obsidian to-transparent" style={{ background: 'linear-gradient(to right, #111111, transparent)' }}></div>
                <div className="h-full w-full flex flex-col">
                  <div className="flex justify-between items-center mb-8 border-b border-border/50 pb-4" style={{ borderColor: 'rgba(229, 229, 229, 0.5)' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-border" style={{ backgroundColor: '#E5E5E5' }}></div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-subtle" style={{ color: '#737373' }}>
                        Digital Twin Simulation
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-12 h-1.5 rounded-full bg-border/50" style={{ backgroundColor: 'rgba(229, 229, 229, 0.5)' }}></span>
                    </div>
                  </div>
                  <div className="flex-1 relative">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <style>{`
                        .signal-path {
                          stroke-dasharray: 60 400;
                          stroke-dashoffset: 60;
                          animation: signal-flow 6s linear infinite;
                        }
                        @keyframes signal-flow {
                          0% { stroke-dashoffset: 60; opacity: 0; }
                          5% { opacity: 1; }
                          90% { stroke-dashoffset: -360; opacity: 1; }
                          95% { opacity: 0; }
                          100% { stroke-dashoffset: -360; opacity: 0; }
                        }
                        .node-context { animation: pulse-context 6s infinite ease-out; transform-origin: 50px 150px; }
                        @keyframes pulse-context {
                          0% { transform: scale(1); fill: #111; }
                          5% { transform: scale(1.4); fill: #000; }
                          15% { transform: scale(1); fill: #111; }
                        }
                        .node-assumptions { animation: pulse-assumptions 6s infinite ease-out; transform-origin: 190px 80px; }
                        @keyframes pulse-assumptions {
                          25% { stroke-width: 1.5; transform: scale(1); }
                          30% { stroke-width: 2.5; transform: scale(1.05); stroke: #000; }
                          40% { stroke-width: 1.5; transform: scale(1); stroke: #111; }
                        }
                        .node-evidence { animation: pulse-evidence 6s infinite ease-out; transform-origin: 280px 120px; }
                        @keyframes pulse-evidence {
                          55% { stroke-width: 1.5; transform: scale(1); }
                          60% { stroke-width: 2.5; transform: scale(1.05); stroke: #000; }
                          70% { stroke-width: 1.5; transform: scale(1); stroke: #111; }
                        }
                        .node-outcome { animation: pulse-outcome 6s infinite ease-out; transform-origin: 320px 150px; }
                        @keyframes pulse-outcome {
                          85% { transform: scale(1); fill: #111; }
                          90% { transform: scale(1.25); fill: #000; }
                          100% { transform: scale(1); fill: #111; }
                        }
                        .outcome-check {
                          stroke-dasharray: 12;
                          stroke-dashoffset: 12;
                          animation: check-draw 6s linear infinite;
                        }
                        @keyframes check-draw {
                          0%, 88% { stroke-dashoffset: 12; opacity: 0; }
                          92% { stroke-dashoffset: 0; opacity: 1; }
                          100% { stroke-dashoffset: 0; opacity: 0; }
                        }
                      `}</style>
                      <path d="M50,150 C100,150 100,80 150,80" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                      <path d="M50,150 C100,150 100,220 150,220" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                      <path d="M150,80 C200,80 200,120 250,120" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                      <path d="M150,220 C200,220 200,180 250,180" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                      <path d="M250,120 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                      <path d="M250,180 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                      <path d="M50,150 C100,150 100,80 150,80 C200,80 200,120 250,120 L320,150" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" className="signal-path"></path>
                      <circle cx="50" cy="150" r="6" fill="#111" className="node-context"></circle>
                      <text x="50" y="175" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="600" fill="#111">
                        ROS 2
                      </text>
                      <rect x="150" y="70" width="80" height="20" rx="4" fill="white" stroke="#111" strokeWidth="1.5" className="node-assumptions"></rect>
                      <text x="190" y="83" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="600" fill="#111" dy="1">
                        Gazebo
                      </text>
                      <rect x="150" y="210" width="80" height="20" rx="4" fill="white" stroke="#E5E5E5"></rect>
                      <rect x="250" y="170" width="60" height="20" rx="4" fill="#F5F5F7"></rect>
                      <rect x="250" y="110" width="60" height="20" rx="4" fill="white" stroke="#111" strokeWidth="1.5" className="node-evidence"></rect>
                      <text x="280" y="123" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="600" fill="#111" dy="1">
                        MoveIt 2
                      </text>
                      <circle cx="320" cy="150" r="12" fill="#111" className="node-outcome"></circle>
                      <path d="M316 150l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="outcome-check"></path>
                      <text x="320" y="178" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="600" fill="#111">
                        Deploy
                      </text>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian text-white text-[10px] font-medium px-3 py-1.5 rounded shadow-xl" style={{ backgroundColor: '#111111' }}>
                      Sync: 99.8%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* LOGOS */}
          <section className="border-y border-border/60 py-16 bg-white" style={{ borderColor: 'rgba(229, 229, 229, 0.6)' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
              <p className="text-xs font-semibold text-obsidian whitespace-nowrap md:w-auto w-full text-center md:text-left" style={{ color: '#111111' }}>
                SUPPORTING NATIONAL INITIATIVES
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
                <span className="font-sans text-lg font-bold text-obsidian tracking-tight" style={{ color: '#111111' }}>
                  Make in India 🇮🇳
                </span>
                <span className="font-sans text-lg font-bold text-obsidian tracking-tight" style={{ color: '#111111' }}>
                  Skill India
                </span>
                <span className="font-sans text-lg font-bold text-obsidian tracking-tight" style={{ color: '#111111' }}>
                  Atmanirbhar Bharat
                </span>
              </div>
            </div>
          </section>

          {/* TRACEABILITY LIFECYCLE (ADAPTED FOR TRAINING) */}
          <section id="decision-lifecycle" className="relative w-full bg-canvas border-b border-border/60" style={{ height: '400vh', backgroundColor: '#FAFAFA', borderColor: 'rgba(229, 229, 229, 0.6)' }}>
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
              <div className="max-w-4xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center h-full py-20">
                <div className="text-center mb-12 shrink-0 opacity-0 transition-opacity duration-700" id="lifecycle-header">
                  <h2 className="font-sans text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-3" style={{ color: '#111111' }}>
                    Training Journey
                  </h2>
                  <p className="text-subtle text-sm max-w-md mx-auto" style={{ color: '#737373' }}>
                    From basics to advanced AI robotics.
                  </p>
                </div>
                <div className="relative w-full max-w-2xl flex-1 flex flex-col justify-center my-auto">
                  <div className="absolute left-1/2 top-4 bottom-4 w-px bg-border/60 -translate-x-1/2" style={{ backgroundColor: 'rgba(229, 229, 229, 0.6)' }}></div>
                  <div id="lifecycle-line" className="absolute left-1/2 top-4 w-px bg-obsidian -translate-x-1/2 transition-all duration-75 ease-linear h-0 max-h-[calc(100%-2rem)]" style={{ backgroundColor: '#111111' }}></div>
                  <div className="space-y-16 py-8 relative">
                    
                    {/* Level 1 */}
                    <div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.1">
                      <div className="w-[42%] text-right pr-8">
                        <span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1" style={{ color: '#737373' }}>
                          01 Foundation
                        </span>
                        <h3 className="font-sans text-base font-semibold text-obsidian" style={{ color: '#111111' }}>
                          Beginner Robotics
                        </h3>
                        <p className="text-xs text-subtle mt-1 hidden md:block" style={{ color: '#737373' }}>
                          Python & Scratch basics
                        </p>
                      </div>
                      <div className="relative shrink-0 z-10">
                        <div className="w-3 h-3 rounded-full border border-border bg-canvas transition-colors duration-300" style={{ borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' }}></div>
                      </div>
                      <div className="w-[42%] pl-8">
                        <div className="bg-white border border-border p-3 rounded shadow-sm inline-block" style={{ borderColor: '#E5E5E5' }}>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-obsidian" style={{ color: '#111111' }}>
                              🐍 Basic Python Programming
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Level 2 */}
                    <div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.35">
                      <div className="w-[42%] text-right pr-8">
                        <div className="bg-white border border-border p-3 rounded shadow-sm inline-block text-left" style={{ borderColor: '#E5E5E5' }}>
                          <span className="text-[10px] text-subtle block mb-1" style={{ color: '#737373' }}>
                            Core Technology
                          </span>
                          <span className="text-xs font-medium text-obsidian" style={{ color: '#111111' }}>
                            URDF & Xacro Modeling
                          </span>
                        </div>
                      </div>
                      <div className="relative shrink-0 z-10">
                        <div className="w-3 h-3 rounded-full border border-border bg-canvas transition-colors duration-300" style={{ borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' }}></div>
                      </div>
                      <div className="w-[42%] pl-8">
                        <span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1" style={{ color: '#737373' }}>
                          02 Intermediate
                        </span>
                        <h3 className="font-sans text-base font-semibold text-obsidian" style={{ color: '#111111' }}>
                          ROS 2 & Simulation
                        </h3>
                        <p className="text-xs text-subtle mt-1 hidden md:block" style={{ color: '#737373' }}>
                          Gazebo & MoveIt 2
                        </p>
                      </div>
                    </div>

                    {/* Level 3 */}
                    <div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.6">
                      <div className="w-[42%] text-right pr-8">
                        <span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1" style={{ color: '#737373' }}>
                          03 Advanced
                        </span>
                        <h3 className="font-sans text-base font-semibold text-obsidian" style={{ color: '#111111' }}>
                          AI Robotics
                        </h3>
                        <p className="text-xs text-subtle mt-1 hidden md:block" style={{ color: '#737373' }}>
                          Vision & automation
                        </p>
                      </div>
                      <div className="relative shrink-0 z-10">
                        <div className="w-3 h-3 rounded-full border border-border bg-canvas transition-colors duration-300" style={{ borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' }}></div>
                      </div>
                      <div className="w-[42%] pl-8">
                        <div className="bg-white border border-border p-3 rounded shadow-sm inline-flex items-center gap-3" style={{ borderColor: '#E5E5E5' }}>
                          <div className="w-8 h-8 bg-slate-50 rounded flex items-center justify-center border border-border/50" style={{ borderColor: 'rgba(229, 229, 229, 0.5)' }}>
                            <span className="text-sm">👁️</span>
                          </div>
                          <div>
                            <div className="text-[10px] text-subtle" style={{ color: '#737373' }}>
                              AI Vision
                            </div>
                            <div className="text-xs font-bold text-obsidian" style={{ color: '#111111' }}>
                              Object Detection
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Certification */}
                    <div className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.85">
                      <div className="w-[42%] text-right pr-8">
                        <span className="font-mono text-[10px] text-subtle bg-slate-100 px-2 py-1 rounded inline-block" style={{ color: '#737373' }}>
                          Industry Ready
                        </span>
                      </div>
                      <div className="relative shrink-0 z-10">
                        <div className="w-3 h-3 rounded-full border border-border bg-canvas transition-colors duration-300" style={{ borderColor: '#E5E5E5', backgroundColor: '#FAFAFA' }}></div>
                      </div>
                      <div className="w-[42%] pl-8">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-obsidian text-white text-xs font-semibold shadow-lg shadow-obsidian/20" style={{ backgroundColor: '#111111' }}>
                          <span>Certified Engineer</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES SECTION (PRODUCTS) */}
          <section id="products" className="py-32 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-xl">
                  <h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-6 leading-[1.1]" style={{ color: '#111111' }}>
                    Our Products.
                    <span className="text-subtle block" style={{ color: '#737373' }}>Industry-ready solutions.</span>
                  </h2>
                  <p className="text-subtle text-lg leading-relaxed" style={{ color: '#737373' }}>
                    From educational platforms to industrial digital twins – complete robotics ecosystems.
                  </p>
                </div>
                <a href="#contact" className="pb-1 border-b border-obsidian text-sm font-medium hover:opacity-70 transition-opacity mb-2" style={{ borderColor: '#111111', color: '#111111' }}>
                  Request Demo
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Product 1: Educational Platform */}
                <div className="md:col-span-8 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500" style={{ borderColor: '#E5E5E5' }}>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-wider uppercase bg-slate-100 text-obsidian rounded mb-3" style={{ color: '#111111' }}>
                          Education
                        </span>
                        <h3 className="font-sans text-2xl font-semibold text-obsidian mb-2" style={{ color: '#111111' }}>
                          Educational Robotics Platform
                        </h3>
                        <p className="text-sm text-subtle leading-relaxed max-w-xl" style={{ color: '#737373' }}>
                          Complete robotic arm systems integrated with ROS 2 packages, Digital twin simulation, Python & Scratch programming support, and AI-ready camera integration.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-slate-50 rounded-lg border border-border" style={{ borderColor: '#E5E5E5' }}>
                        <div className="text-xs text-subtle mb-1" style={{ color: '#737373' }}>ROS 2 Packages</div>
                        <div className="text-sm font-bold text-obsidian" style={{ color: '#111111' }}>✓ Pre-configured</div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg border border-border" style={{ borderColor: '#E5E5E5' }}>
                        <div className="text-xs text-subtle mb-1" style={{ color: '#737373' }}>Programming</div>
                        <div className="text-sm font-bold text-obsidian" style={{ color: '#111111' }}>Python + Scratch</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-subtle pt-4 border-t border-border" style={{ color: '#737373', borderColor: '#E5E5E5' }}>
                      <span className="font-semibold">Ideal For:</span>
                      <span>Schools • Colleges • Robotics Labs • Skill Centers</span>
                    </div>
                  </div>
                </div>

                {/* Product 2: Digital Twin */}
                <div className="md:col-span-4 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500" style={{ borderColor: '#E5E5E5' }}>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-wider uppercase bg-slate-100 text-obsidian rounded mb-3" style={{ color: '#111111' }}>
                      Industrial
                    </span>
                    <h3 className="font-sans text-xl font-semibold text-obsidian mb-3" style={{ color: '#111111' }}>
                      Digital Twin Solution
                    </h3>
                    <p className="text-xs text-subtle leading-relaxed mb-6" style={{ color: '#737373' }}>
                      Real robot and simulation in sync with AI vision integration and industrial workflow simulation.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <span>✅</span>
                        <span className="text-subtle" style={{ color: '#737373' }}>Zero-risk testing</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span>⚡</span>
                        <span className="text-subtle" style={{ color: '#737373' }}>Faster R&D</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span>🚀</span>
                        <span className="text-subtle" style={{ color: '#737373' }}>Industry-ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PRICING SECTION (ADAPTED FOR TRAINING LEVELS) */}
          <section id="training" className="py-32 px-6 md:px-12 lg:px-20 bg-white border-y border-border/60" style={{ borderColor: 'rgba(229, 229, 229, 0.6)' }}>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-4" style={{ color: '#111111' }}>
                  Training Programs
                </h2>
                <p className="text-lg text-subtle max-w-2xl mx-auto" style={{ color: '#737373' }}>
                  Structured learning paths from beginner to advanced AI robotics
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Level 1 */}
                <div
                  id="pricing-hobby"
                  className="pricing-transition relative bg-white border border-border rounded-xl p-8 cursor-pointer"
                  style={{ borderColor: '#E5E5E5' }}
                >
                  <div className="mb-6">
                    <h3 className="font-sans text-2xl font-semibold text-obsidian mb-2" style={{ color: '#111111' }}>
                      Level 1
                    </h3>
                    <p className="text-sm text-subtle" style={{ color: '#737373' }}>
                      Beginner Robotics
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-obsidian mb-1" style={{ color: '#111111' }}>🌱</div>
                    <p className="text-xs text-subtle" style={{ color: '#737373' }}>Foundation level</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-obsidian shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#111111' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-subtle" style={{ color: '#737373' }}>Basic Python Programming</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-obsidian shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#111111' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-subtle" style={{ color: '#737373' }}>Scratch Programming</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-obsidian shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#111111' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-subtle" style={{ color: '#737373' }}>Mobile/Laptop app control</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-obsidian shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#111111' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-subtle" style={{ color: '#737373' }}>Hardware Introduction</span>
                    </li>
                  </ul>

                  <button className="w-full py-3 bg-white text-obsidian border border-border text-sm font-medium rounded hover:bg-gray-50 transition-all" style={{ color: '#111111', borderColor: '#E5E5E5' }}>
                    Learn More
                  </button>
                </div>

                {/* Level 2 - Featured */}
                <div
                  id="pricing-pro"
                  className="pricing-transition relative bg-obsidian border-2 border-obsidian rounded-xl p-8 cursor-pointer shadow-xl"
                  style={{ backgroundColor: '#111111', borderColor: '#111111' }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white rounded-full text-[10px] font-bold text-obsidian uppercase tracking-wider" style={{ color: '#111111' }}>
                    Most Popular
                  </div>

                  <div className="mb-6">
                    <h3 className="font-sans text-2xl font-semibold text-white mb-2">
                      Level 2
                    </h3>
                    <p className="text-sm text-white/70">
                      ROS 2 & Simulation
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-white mb-1">⚙️</div>
                    <p className="text-xs text-white/70">Professional level</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">URDF & Xacro Modeling</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">Gazebo Simulation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">TF & Camera Integration</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">MoveIt 2 Motion Planning</span>
                    </li>
                  </ul>

                  <button className="w-full py-3 bg-white text-obsidian text-sm font-semibold rounded hover:bg-gray-100 transition-all" style={{ color: '#111111' }}>
                    Enroll Now
                  </button>
                </div>

                {/* Level 3 */}
                <div
                  id="pricing-ent"
                  className="pricing-transition relative bg-white border border-border rounded-xl p-8 cursor-pointer"
                  style={{ borderColor: '#E5E5E5' }}
                >
                  <div className="mb-6">
                    <h3 className="font-sans text-2xl font-semibold text-obsidian mb-2" style={{ color: '#111111' }}>
                      Level 3
                    </h3>
                    <p className="text-sm text-subtle" style={{ color: '#737373' }}>
                      Advanced AI Robotics
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-obsidian mb-1" style={{ color: '#111111' }}>🧠</div>
                    <p className="text-xs text-subtle" style={{ color: '#737373' }}>Advanced level</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-obsidian shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#111111' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-subtle" style={{ color: '#737373' }}>Vision-based object detection</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-obsidian shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#111111' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-subtle" style={{ color: '#737373' }}>Depth estimation integration</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-obsidian shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#111111' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-subtle" style={{ color: '#737373' }}>Digital twin synchronization</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-obsidian shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#111111' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-subtle" style={{ color: '#737373' }}>Pick & Place automation</span>
                    </li>
                  </ul>

                  <button className="w-full py-3 bg-white text-obsidian border border-border text-sm font-medium rounded hover:bg-gray-50 transition-all" style={{ color: '#111111', borderColor: '#E5E5E5' }}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES SECTION */}
          <section id="services" className="py-32 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-4" style={{ color: '#111111' }}>
                  Our Services
                </h2>
                <p className="text-lg text-subtle max-w-2xl mx-auto" style={{ color: '#737373' }}>
                  End-to-end robotics solutions and support
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: '🔧', title: 'Custom ROS 2 Robot Development', desc: 'Tailored robotic systems built to specifications' },
                  { icon: '🔗', title: 'Digital Twin Implementation', desc: 'Full simulation environments synced with hardware' },
                  { icon: '🏭', title: 'Industrial Automation Simulation', desc: 'Test workflows virtually before deployment' },
                  { icon: '🎓', title: 'Lab Setup for Colleges', desc: 'Complete robotics lab infrastructure' },
                  { icon: '👔', title: 'Corporate Robotics Training', desc: 'Industry-ready workforce training' },
                  { icon: '🤝', title: 'Consultation & Support', desc: 'Expert guidance for your robotics journey' }
                ].map((service, idx) => (
                  <div key={idx} className="premium-card p-6 rounded-xl">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h3 className="font-sans text-lg font-semibold text-obsidian mb-2" style={{ color: '#111111' }}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-subtle" style={{ color: '#737373' }}>
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section id="about" className="py-32 px-6 md:px-12 lg:px-20 bg-white border-y border-border/60" style={{ borderColor: 'rgba(229, 229, 229, 0.6)' }}>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-4" style={{ color: '#111111' }}>
                  Why Choose MCAD Solutions?
                </h2>
                <p className="text-lg text-subtle max-w-2xl mx-auto" style={{ color: '#737373' }}>
                  Excellence in every dimension of robotics
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: '✅', title: 'Real Hardware + Simulation Expertise', desc: 'Best of both worlds' },
                  { icon: '🚀', title: 'ROS 2 Native Development', desc: 'Latest technology stack' },
                  { icon: '🏆', title: 'Industry-Level Implementation', desc: 'Production-ready solutions' },
                  { icon: '💰', title: 'Affordable Educational Solutions', desc: 'Value for money' },
                  { icon: '📚', title: 'Customizable Training Modules', desc: 'Tailored learning paths' },
                  { icon: '🇮🇳', title: 'Supporting National Initiatives', desc: 'Make in India aligned' }
                ].map((item, idx) => (
                  <div key={idx} className="premium-card p-6 rounded-xl">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-sans text-lg font-semibold text-obsidian mb-2" style={{ color: '#111111' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-subtle" style={{ color: '#737373' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="py-32 px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-6" style={{ color: '#111111' }}>
                Let's Build Smart Robotics Together
              </h2>
              <p className="text-lg text-subtle mb-12" style={{ color: '#737373' }}>
                Ready to transform your robotics vision into reality?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="premium-card p-6 rounded-xl">
                  <div className="text-3xl mb-3">📍</div>
                  <h3 className="font-sans font-semibold text-obsidian mb-2" style={{ color: '#111111' }}>Location</h3>
                  <p className="text-sm text-subtle" style={{ color: '#737373' }}>India</p>
                </div>
                <div className="premium-card p-6 rounded-xl">
                  <div className="text-3xl mb-3">📧</div>
                  <h3 className="font-sans font-semibold text-obsidian mb-2" style={{ color: '#111111' }}>Email</h3>
                  <p className="text-sm text-subtle" style={{ color: '#737373' }}>contact@mcadsolutions.com</p>
                </div>
                <div className="premium-card p-6 rounded-xl">
                  <div className="text-3xl mb-3">📞</div>
                  <h3 className="font-sans font-semibold text-obsidian mb-2" style={{ color: '#111111' }}>Phone</h3>
                  <p className="text-sm text-subtle" style={{ color: '#737373' }}>+91-XXXXXXXXXX</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button className="group relative isolate overflow-hidden bg-obsidian text-white text-sm font-semibold px-8 py-3.5 rounded shadow-lg ring-1 ring-white/10 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl" style={{ backgroundColor: '#111111' }}>
                  <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0"></div>
                  <span className="relative z-10">👉 Request Demo</span>
                </button>
                <button className="px-8 py-3.5 bg-white text-obsidian border border-border text-sm font-medium rounded shadow-sm hover:bg-gray-50 transition-all" style={{ color: '#111111', borderColor: '#E5E5E5' }}>
                  📄 Download Brochure
                </button>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="bg-obsidian text-white py-16 px-6 md:px-12 border-t border-border/20" style={{ backgroundColor: '#111111', borderColor: 'rgba(229, 229, 229, 0.2)' }}>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-5 h-5 bg-white text-obsidian flex items-center justify-center rounded-sm" style={{ color: '#111111' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-bold tracking-tight">
                      MCAD SOLUTIONS
                    </span>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed max-w-md mb-4">
                    Building Indigenous Robotics Solutions for a Self-Reliant India. Supporting Make in India 🇮🇳, Skill India, and Atmanirbhar Bharat initiatives.
                  </p>
                  <p className="text-xs text-white/50">© 2026 MCAD Solutions. All rights reserved.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                    <li><a href="#training" className="hover:text-white transition-colors">Training</a></li>
                    <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                    <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-sm">Connect</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 text-center text-xs text-white/50">
                <p>We support and align with national initiatives such as Make in India, Skill India, and Atmanirbhar Bharat. We are an independent organization.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
