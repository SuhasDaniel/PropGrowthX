import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Satellite, Brain, Building2, Globe } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">PropGrowthX</span>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-slate-300 bg-transparent">
                View Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                AI-Driven Real Estate &
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Urban Planning
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                PropGrowthX is an AI-driven platform revolutionizing real estate and urban planning. We empower
                investors, governments, and institutions with data-driven intelligence by leveraging machine learning,
                geospatial analytics, and satellite imagery. Our mission is to simplify real estate investment and help
                shape sustainable, well-planned cities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Explore Platform
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/map">
                  <Button size="lg" variant="outline" className="border-slate-300 bg-transparent">
                    View 3D Map
                    <Globe className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
              <Card className="relative overflow-hidden border-0 shadow-2xl">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg?height=600&width=800&text=Futuristic+City+Skyline+with+AI+Data+Overlay"
                    alt="Futuristic city skyline with AI/data overlay"
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden border-0 shadow-xl">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg?height=500&width=700&text=Smart+City+Concept+with+Digital+Network"
                    alt="Smart city concept with digital network"
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                To transform real estate investments and city development by merging artificial intelligence, satellite
                technology, and data-driven insights – building smarter investments and smarter cities for tomorrow.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-slate-600">Cities Analyzed</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600 mb-1">98%</div>
                  <div className="text-sm text-slate-600">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Satellite & ML Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Satellite className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Harnessing Satellite Imagery & Machine Learning</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                We utilize advanced satellite imagery combined with machine learning algorithms to track urban
                expansion, analyze land use patterns, and predict future growth zones. These insights allow investors to
                identify high-potential areas before they are recognized by the wider market. Our AI models forecast
                property values and rental yields, enabling smarter, risk-optimized investments.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">Real-time satellite data processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300">Predictive growth zone analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-slate-300">AI-powered value forecasting</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 rounded-2xl blur-2xl"></div>
              <Card className="relative overflow-hidden border-slate-700 bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg?height=500&width=700&text=Satellite+Image+with+AI+Data+Overlays"
                    alt="Satellite image of city expansion with AI data overlays"
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Government & Urban Planning Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden border-0 shadow-xl">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg?height=500&width=700&text=Urban+Planning+Visualization"
                    alt="Urban planning visualization with government officials reviewing data"
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Empowering Governments & Urban Planners
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                PropGrowthX is not just for investors – our platform supports governments and city planners in making
                data-backed decisions for urban development. By analyzing infrastructure growth, resource allocation,
                and population movement, we help design sustainable, efficient, and future-ready cities. This ensures
                that governments can reduce overcrowding, optimize resources, and create well-structured urban
                environments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="text-lg font-semibold text-emerald-800 mb-2">Smart Planning</div>
                  <div className="text-sm text-emerald-600">Data-driven urban development strategies</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-lg font-semibold text-blue-800 mb-2">Resource Optimization</div>
                  <div className="text-sm text-blue-600">Efficient allocation of city resources</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="text-lg font-semibold text-purple-800 mb-2">Future-Ready Cities</div>
                  <div className="text-sm text-purple-600">Sustainable urban environments</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <div className="text-lg font-semibold text-orange-800 mb-2">Population Analysis</div>
                  <div className="text-sm text-orange-600">Movement and growth predictions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Real Estate Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of investors and government agencies using PropGrowthX to make smarter, data-driven
            decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100">
                Start Exploring
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/map">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                View Interactive Map
                <Globe className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">PropGrowthX</span>
              </div>
              <p className="text-slate-400 mb-4">
                Revolutionizing real estate and urban planning through AI-driven insights and satellite technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-slate-400">
                <div>Property Analytics</div>
                <div>3D Mapping</div>
                <div>Investment Tools</div>
                <div>Government Dashboard</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-slate-400">
                <div>About Us</div>
                <div>Contact</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 PropGrowthX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
