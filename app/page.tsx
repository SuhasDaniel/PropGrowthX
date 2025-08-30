"use client"

import { Brain, Satellite, Users, Globe, ArrowRight, Play, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="PropGrowthX Logo" className="h-16 w-auto" />
            <span className="text-3xl font-bold">PropGrowthX</span>
          </Link>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href="/dashboard">Explore Platform</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/government">Government Solutions</Link>
            </Button>
            <Button asChild variant="secondary" size="sm">
              <a href="https://tally.so/r/mJQkWd?transparentBackground=1" target="_blank" rel="noopener noreferrer">
                Join Waiting List
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-orange-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
        <div className="container relative px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  <Brain className="w-3 h-3 mr-1" />
                  AI-Powered Platform
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  AI-Driven Real Estate &
                  <span className="text-gradient bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                    {" "}
                    Urban Planning
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  PropGrowthX is an AI-driven platform revolutionizing real estate and urban planning. We empower
                  investors, governments, and institutions with data-driven intelligence by leveraging machine learning,
                  geospatial analytics, and satellite imagery.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/dashboard">
                    Explore Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Link href="/government">
                    <Play className="mr-2 h-5 w-5" />
                    Government Solutions
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">88%</div>
                  <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">$2B+</div>
                  <div className="text-sm text-muted-foreground">Assets Tracked</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/futuristic-city-skyline-with-ai-data-overlay-holog.png"
                alt="Futuristic city skyline with AI data overlays"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/smart-city-concept-with-digital-network-connection.png"
                alt="Smart city concept with digital network connections"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Globe className="w-3 h-3 mr-1" />
                  Our Vision
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Building Smarter Cities for Tomorrow
                </h2>
                <p className="text-lg text-muted-foreground">
                  To transform real estate investments and city development by merging artificial intelligence,
                  satellite technology, and data-driven insights – building smarter investments and smarter cities for
                  tomorrow.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">AI-Powered Analytics</div>
                    <div className="text-sm text-muted-foreground">Advanced machine learning algorithms</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Satellite Imagery</div>
                    <div className="text-sm text-muted-foreground">Real-time urban monitoring</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Predictive Models</div>
                    <div className="text-sm text-muted-foreground">Future growth forecasting</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Data Integration</div>
                    <div className="text-sm text-muted-foreground">Comprehensive urban insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Satellite & ML Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit bg-white/10 text-white border-white/20">
                  <Satellite className="w-3 h-3 mr-1" />
                  Advanced Technology
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Harnessing Satellite Imagery & Machine Learning
                </h2>
                <p className="text-lg text-slate-300">
                  We utilize advanced satellite imagery combined with machine learning algorithms to track urban
                  expansion, analyze land use patterns, and predict future growth zones. These insights allow investors
                  to identify high-potential areas before they are recognized by the wider market.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span className="text-slate-300">Real-time urban expansion tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span className="text-slate-300">Land use pattern analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span className="text-slate-300">Future growth zone predictions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span className="text-slate-300">Property value forecasting</span>
                </div>
              </div>

              <Button asChild variant="secondary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="/government">
                  <Satellite className="mr-2 h-5 w-5" />
                  Explore Government Solutions
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src="/satellite-image-of-city-expansion-with-ai-data-ove.png"
                alt="Satellite image of city expansion with AI data overlays"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Government Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/urban-planning-visualization-with-government-offic.png"
                alt="Urban planning visualization with government officials"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  <Users className="w-3 h-3 mr-1" />
                  Government Solutions
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Empowering Governments & Urban Planners
                </h2>
                <p className="text-lg text-muted-foreground">
                  PropGrowthX is not just for investors – our platform supports governments and city planners in making
                  data-backed decisions for urban development. By analyzing infrastructure growth, resource allocation,
                  and population movement, we help design sustainable, efficient, and future-ready cities.
                </p>
              </div>

              <div className="grid gap-4">
                <Card className="border-l-4 border-l-rose-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Infrastructure Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Optimize resource allocation and infrastructure development with AI-driven insights.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Population Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Track population movement and growth patterns for better urban planning.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Sustainable Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Create environmentally conscious and sustainable urban environments.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-rose-600 to-orange-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Shape the Future of Real Estate?
            </h2>
            <p className="text-xl text-rose-100">
              Be among the first to explore PropGrowthX – an AI-powered platform transforming how real estate
              investments and city planning decisions are made.
            </p>
            <div className="flex justify-center pt-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 bg-white text-rose-600 hover:bg-slate-100"
              >
                <a href="https://tally.so/r/mJQkWd?transparentBackground=1" target="_blank" rel="noopener noreferrer">
                  Join the Waiting List
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6 md:py-8">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="PropGrowthX Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold">PropGrowthX</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 PropGrowthX. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <Link href="/dashboard" className="text-muted-foreground hover:underline">
              Dashboard
            </Link>
            <Link href="/government" className="text-muted-foreground hover:underline">
              Government
            </Link>
            <Link href="/properties" className="text-muted-foreground hover:underline">
              Properties
            </Link>
            <Link href="/calculator" className="text-muted-foreground hover:underline">
              Calculator
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
