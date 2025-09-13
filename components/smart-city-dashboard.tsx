"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import {
  Building2,
  Car,
  Users,
  Zap,
  Droplets,
  Trash2,
  MapPin,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Download,
  Layers,
  Globe,
  Calendar,
} from "lucide-react"

declare global {
  interface Window {
    google: any
  }
}

// NYC Zone Data - 50+ zones with realistic metrics
const nycZones = [
  // Manhattan Zones
  {
    id: 1,
    name: "Financial District",
    lat: 40.7074,
    lng: -74.0113,
    borough: "Manhattan",
    development: 85,
    traffic: 92,
    population: 78,
    energy: 88,
    water: 75,
    waste: 82,
  },
  {
    id: 2,
    name: "Midtown West",
    lat: 40.7589,
    lng: -73.9851,
    borough: "Manhattan",
    development: 95,
    traffic: 98,
    population: 95,
    energy: 92,
    water: 80,
    waste: 85,
  },
  {
    id: 3,
    name: "Upper East Side",
    lat: 40.7736,
    lng: -73.9566,
    borough: "Manhattan",
    development: 75,
    traffic: 85,
    population: 88,
    energy: 82,
    water: 78,
    waste: 80,
  },
  {
    id: 4,
    name: "Chelsea",
    lat: 40.7465,
    lng: -74.0014,
    borough: "Manhattan",
    development: 88,
    traffic: 90,
    population: 85,
    energy: 86,
    water: 82,
    waste: 84,
  },
  {
    id: 5,
    name: "Greenwich Village",
    lat: 40.7335,
    lng: -74.0027,
    borough: "Manhattan",
    development: 70,
    traffic: 75,
    population: 80,
    energy: 78,
    water: 85,
    waste: 82,
  },

  // Brooklyn Zones
  {
    id: 6,
    name: "Williamsburg",
    lat: 40.7081,
    lng: -73.9571,
    borough: "Brooklyn",
    development: 92,
    traffic: 78,
    population: 85,
    energy: 80,
    water: 75,
    waste: 78,
  },
  {
    id: 7,
    name: "Park Slope",
    lat: 40.671,
    lng: -73.9814,
    borough: "Brooklyn",
    development: 82,
    traffic: 68,
    population: 82,
    energy: 75,
    water: 80,
    waste: 85,
  },
  {
    id: 8,
    name: "DUMBO",
    lat: 40.7033,
    lng: -73.9893,
    borough: "Brooklyn",
    development: 88,
    traffic: 70,
    population: 75,
    energy: 82,
    water: 78,
    waste: 80,
  },
  {
    id: 9,
    name: "Bedford-Stuyvesant",
    lat: 40.6895,
    lng: -73.9442,
    borough: "Brooklyn",
    development: 75,
    traffic: 65,
    population: 90,
    energy: 70,
    water: 72,
    waste: 75,
  },
  {
    id: 10,
    name: "Crown Heights",
    lat: 40.6678,
    lng: -73.9442,
    borough: "Brooklyn",
    development: 70,
    traffic: 60,
    population: 85,
    energy: 68,
    water: 70,
    waste: 72,
  },

  // Queens Zones
  {
    id: 11,
    name: "Astoria",
    lat: 40.7643,
    lng: -73.9235,
    borough: "Queens",
    development: 78,
    traffic: 72,
    population: 80,
    energy: 75,
    water: 78,
    waste: 80,
  },
  {
    id: 12,
    name: "Long Island City",
    lat: 40.7447,
    lng: -73.9485,
    borough: "Queens",
    development: 90,
    traffic: 80,
    population: 75,
    energy: 85,
    water: 82,
    waste: 85,
  },
  {
    id: 13,
    name: "Flushing",
    lat: 40.7672,
    lng: -73.8331,
    borough: "Queens",
    development: 65,
    traffic: 70,
    population: 88,
    energy: 70,
    water: 75,
    waste: 78,
  },
  {
    id: 14,
    name: "Jackson Heights",
    lat: 40.7556,
    lng: -73.8831,
    borough: "Queens",
    development: 68,
    traffic: 75,
    population: 92,
    energy: 72,
    water: 70,
    waste: 75,
  },
  {
    id: 15,
    name: "Forest Hills",
    lat: 40.7215,
    lng: -73.8448,
    borough: "Queens",
    development: 72,
    traffic: 65,
    population: 78,
    energy: 75,
    water: 80,
    waste: 82,
  },

  // Bronx Zones
  {
    id: 16,
    name: "Riverdale",
    lat: 40.899,
    lng: -73.9122,
    borough: "Bronx",
    development: 60,
    traffic: 55,
    population: 65,
    energy: 68,
    water: 82,
    waste: 78,
  },
  {
    id: 17,
    name: "South Bronx",
    lat: 40.8176,
    lng: -73.9182,
    borough: "Bronx",
    development: 85,
    traffic: 80,
    population: 95,
    energy: 65,
    water: 60,
    waste: 65,
  },
  {
    id: 18,
    name: "Fordham",
    lat: 40.8618,
    lng: -73.9006,
    borough: "Bronx",
    development: 70,
    traffic: 68,
    population: 85,
    energy: 70,
    water: 68,
    waste: 70,
  },
  {
    id: 19,
    name: "Hunts Point",
    lat: 40.813,
    lng: -73.8843,
    borough: "Bronx",
    development: 75,
    traffic: 85,
    population: 80,
    energy: 72,
    water: 65,
    waste: 88,
  },
  {
    id: 20,
    name: "Concourse",
    lat: 40.8376,
    lng: -73.924,
    borough: "Bronx",
    development: 68,
    traffic: 72,
    population: 88,
    energy: 68,
    water: 70,
    waste: 72,
  },

  // Staten Island Zones
  {
    id: 21,
    name: "St. George",
    lat: 40.6447,
    lng: -74.0776,
    borough: "Staten Island",
    development: 55,
    traffic: 45,
    population: 55,
    energy: 60,
    water: 85,
    waste: 75,
  },
  {
    id: 22,
    name: "Stapleton",
    lat: 40.6264,
    lng: -74.0776,
    borough: "Staten Island",
    development: 50,
    traffic: 40,
    population: 60,
    energy: 58,
    water: 88,
    waste: 78,
  },

  // Additional Manhattan Zones
  {
    id: 23,
    name: "Tribeca",
    lat: 40.7195,
    lng: -74.0089,
    borough: "Manhattan",
    development: 92,
    traffic: 88,
    population: 70,
    energy: 90,
    water: 85,
    waste: 88,
  },
  {
    id: 24,
    name: "SoHo",
    lat: 40.723,
    lng: -74.002,
    borough: "Manhattan",
    development: 88,
    traffic: 85,
    population: 68,
    energy: 85,
    water: 82,
    waste: 85,
  },
  {
    id: 25,
    name: "East Village",
    lat: 40.7264,
    lng: -73.9815,
    borough: "Manhattan",
    development: 82,
    traffic: 80,
    population: 85,
    energy: 78,
    water: 80,
    waste: 82,
  },
  {
    id: 26,
    name: "Lower East Side",
    lat: 40.7168,
    lng: -73.9861,
    borough: "Manhattan",
    development: 85,
    traffic: 82,
    population: 88,
    energy: 80,
    water: 78,
    waste: 80,
  },
  {
    id: 27,
    name: "Hell's Kitchen",
    lat: 40.7614,
    lng: -73.9943,
    borough: "Manhattan",
    development: 90,
    traffic: 95,
    population: 90,
    energy: 88,
    water: 82,
    waste: 85,
  },
  {
    id: 28,
    name: "Murray Hill",
    lat: 40.7478,
    lng: -73.9799,
    borough: "Manhattan",
    development: 78,
    traffic: 88,
    population: 82,
    energy: 82,
    water: 85,
    waste: 82,
  },
  {
    id: 29,
    name: "Gramercy",
    lat: 40.737,
    lng: -73.9858,
    borough: "Manhattan",
    development: 75,
    traffic: 82,
    population: 78,
    energy: 80,
    water: 88,
    waste: 85,
  },
  {
    id: 30,
    name: "Flatiron",
    lat: 40.7411,
    lng: -73.9897,
    borough: "Manhattan",
    development: 88,
    traffic: 92,
    population: 75,
    energy: 85,
    water: 82,
    waste: 88,
  },

  // Additional Brooklyn Zones
  {
    id: 31,
    name: "Greenpoint",
    lat: 40.7308,
    lng: -73.9501,
    borough: "Brooklyn",
    development: 85,
    traffic: 70,
    population: 82,
    energy: 78,
    water: 75,
    waste: 78,
  },
  {
    id: 32,
    name: "Red Hook",
    lat: 40.6745,
    lng: -74.0089,
    borough: "Brooklyn",
    development: 75,
    traffic: 55,
    population: 65,
    energy: 72,
    water: 70,
    waste: 82,
  },
  {
    id: 33,
    name: "Carroll Gardens",
    lat: 40.6789,
    lng: -73.9973,
    borough: "Brooklyn",
    development: 80,
    traffic: 65,
    population: 75,
    energy: 78,
    water: 82,
    waste: 85,
  },
  {
    id: 34,
    name: "Prospect Heights",
    lat: 40.6782,
    lng: -73.9697,
    borough: "Brooklyn",
    development: 82,
    traffic: 72,
    population: 85,
    energy: 78,
    water: 80,
    waste: 82,
  },
  {
    id: 35,
    name: "Bay Ridge",
    lat: 40.6357,
    lng: -74.0334,
    borough: "Brooklyn",
    development: 65,
    traffic: 58,
    population: 75,
    energy: 70,
    water: 85,
    waste: 80,
  },

  // Additional Queens Zones
  {
    id: 36,
    name: "Sunnyside",
    lat: 40.7434,
    lng: -73.9196,
    borough: "Queens",
    development: 75,
    traffic: 72,
    population: 82,
    energy: 75,
    water: 78,
    waste: 80,
  },
  {
    id: 37,
    name: "Elmhurst",
    lat: 40.7362,
    lng: -73.882,
    borough: "Queens",
    development: 70,
    traffic: 78,
    population: 90,
    energy: 72,
    water: 72,
    waste: 75,
  },
  {
    id: 38,
    name: "Corona",
    lat: 40.7498,
    lng: -73.863,
    borough: "Queens",
    development: 68,
    traffic: 75,
    population: 88,
    energy: 70,
    water: 70,
    waste: 72,
  },
  {
    id: 39,
    name: "Woodside",
    lat: 40.7456,
    lng: -73.9062,
    borough: "Queens",
    development: 72,
    traffic: 70,
    population: 85,
    energy: 72,
    water: 75,
    waste: 78,
  },
  {
    id: 40,
    name: "Bayside",
    lat: 40.7685,
    lng: -73.7693,
    borough: "Queens",
    development: 60,
    traffic: 55,
    population: 68,
    energy: 68,
    water: 82,
    waste: 80,
  },

  // Additional Bronx Zones
  {
    id: 41,
    name: "Morrisania",
    lat: 40.8371,
    lng: -73.9059,
    borough: "Bronx",
    development: 72,
    traffic: 75,
    population: 92,
    energy: 65,
    water: 65,
    waste: 68,
  },
  {
    id: 42,
    name: "Tremont",
    lat: 40.8501,
    lng: -73.8987,
    borough: "Bronx",
    development: 68,
    traffic: 70,
    population: 88,
    energy: 68,
    water: 68,
    waste: 70,
  },
  {
    id: 43,
    name: "Morris Heights",
    lat: 40.8501,
    lng: -73.9198,
    borough: "Bronx",
    development: 65,
    traffic: 68,
    population: 85,
    energy: 65,
    water: 70,
    waste: 68,
  },
  {
    id: 44,
    name: "Castle Hill",
    lat: 40.822,
    lng: -73.8515,
    borough: "Bronx",
    development: 62,
    traffic: 65,
    population: 80,
    energy: 68,
    water: 72,
    waste: 70,
  },
  {
    id: 45,
    name: "Pelham Bay",
    lat: 40.8467,
    lng: -73.8261,
    borough: "Bronx",
    development: 55,
    traffic: 50,
    population: 65,
    energy: 65,
    water: 88,
    waste: 82,
  },

  // Final zones to reach 50+
  {
    id: 46,
    name: "Tottenville",
    lat: 40.5057,
    lng: -74.2457,
    borough: "Staten Island",
    development: 45,
    traffic: 35,
    population: 50,
    energy: 55,
    water: 90,
    waste: 85,
  },
  {
    id: 47,
    name: "Great Kills",
    lat: 40.5537,
    lng: -74.1654,
    borough: "Staten Island",
    development: 50,
    traffic: 40,
    population: 55,
    energy: 58,
    water: 88,
    waste: 82,
  },
  {
    id: 48,
    name: "New Springville",
    lat: 40.5951,
    lng: -74.1654,
    borough: "Staten Island",
    development: 58,
    traffic: 48,
    population: 62,
    energy: 62,
    water: 85,
    waste: 80,
  },
  {
    id: 49,
    name: "Port Richmond",
    lat: 40.6343,
    lng: -74.1349,
    borough: "Staten Island",
    development: 52,
    traffic: 45,
    population: 65,
    energy: 60,
    water: 85,
    waste: 78,
  },
  {
    id: 50,
    name: "Mariners Harbor",
    lat: 40.6343,
    lng: -74.1582,
    borough: "Staten Island",
    development: 48,
    traffic: 42,
    population: 60,
    energy: 58,
    water: 82,
    waste: 75,
  },
]

const layerTypes = [
  {
    id: "development",
    name: "Development Potential",
    icon: Building2,
    color: "#3B82F6",
    description: "Growth potential and land appreciation zones",
    unit: "Growth Index",
  },
  {
    id: "traffic",
    name: "Traffic & Congestion",
    icon: Car,
    color: "#F97316",
    description: "Traffic density and congestion patterns",
    unit: "Congestion Index",
  },
  {
    id: "population",
    name: "Population Density",
    icon: Users,
    color: "#EF4444",
    description: "Population distribution and housing capacity",
    unit: "Density Index",
  },
  {
    id: "energy",
    name: "Energy Demand",
    icon: Zap,
    color: "#10B981",
    description: "Electricity demand and renewable potential",
    unit: "Energy Index",
  },
  {
    id: "water",
    name: "Water & Flood Risk",
    icon: Droplets,
    color: "#06B6D4",
    description: "Water supply gaps and flood risk assessment",
    unit: "Risk Index",
  },
  {
    id: "waste",
    name: "Waste Management",
    icon: Trash2,
    color: "#8B5CF6",
    description: "Collection efficiency and route optimization",
    unit: "Efficiency Index",
  },
]

// AI Recommendations Data
const getRecommendations = (layer: string, selectedZone?: any) => {
  const recommendations = {
    development: [
      {
        priority: "high",
        title: "Metro Line Extension to Astoria",
        description: "Zone 11 requires new transit infrastructure. Predicted ridership: 45,000/day",
        roi: "$2.3B investment → $8.7B economic impact over 10 years",
        zone: "Astoria",
      },
      {
        priority: "medium",
        title: "Mixed-Use Development in Long Island City",
        description: "High development potential with 23% land appreciation expected",
        roi: "$850M investment → $2.1B returns by 2030",
        zone: "Long Island City",
      },
      {
        priority: "high",
        title: "Affordable Housing Initiative - South Bronx",
        description: "Critical housing shortage. Need 15,000 new units by 2028",
        roi: "$1.2B investment → Serves 45,000 residents",
        zone: "South Bronx",
      },
    ],
    traffic: [
      {
        priority: "critical",
        title: "FDR Drive Congestion Relief",
        description: "Peak hour delays cost $45M annually in lost productivity",
        roi: "$320M flyover → $180M annual savings",
        zone: "Financial District",
      },
      {
        priority: "high",
        title: "Smart Traffic Signals - Midtown",
        description: "AI-powered signals could reduce congestion by 18%",
        roi: "$12M investment → $35M annual fuel savings",
        zone: "Midtown West",
      },
      {
        priority: "medium",
        title: "Bus Rapid Transit - Queens",
        description: "Dedicated bus lanes on Northern Blvd needed",
        roi: "$85M investment → 25% faster commutes",
        zone: "Jackson Heights",
      },
    ],
    population: [
      {
        priority: "critical",
        title: "Healthcare Capacity Expansion",
        description: "Ward 18 needs 2 new hospitals by 2030 for population growth",
        roi: "$450M investment → Serves 120,000 residents",
        zone: "Jackson Heights",
      },
      {
        priority: "high",
        title: "School Infrastructure - Crown Heights",
        description: "Population growth requires 8 new elementary schools",
        roi: "$180M investment → Education for 12,000 children",
        zone: "Crown Heights",
      },
      {
        priority: "medium",
        title: "Senior Housing Initiative",
        description: "Aging population in Upper East Side needs specialized housing",
        roi: "$220M investment → 3,500 senior units",
        zone: "Upper East Side",
      },
    ],
    energy: [
      {
        priority: "high",
        title: "Solar Panel Initiative - Brooklyn",
        description: "Rooftop solar program could generate 250MW clean energy",
        roi: "$380M investment → $95M annual savings",
        zone: "Park Slope",
      },
      {
        priority: "medium",
        title: "Grid Modernization - Queens",
        description: "Smart grid upgrades needed for reliability",
        roi: "$145M investment → 40% fewer outages",
        zone: "Flushing",
      },
      {
        priority: "critical",
        title: "Energy Storage Facility",
        description: "Battery storage needed for grid stability in Manhattan",
        roi: "$290M investment → $68M annual grid savings",
        zone: "Financial District",
      },
    ],
    water: [
      {
        priority: "critical",
        title: "Flood Protection - Staten Island",
        description: "Sea level rise protection prevents $2.1B in damages",
        roi: "$680M investment → $2.1B damage prevention",
        zone: "St. George",
      },
      {
        priority: "high",
        title: "Water Main Upgrades - Bronx",
        description: "Aging infrastructure causes 25% water loss",
        roi: "$125M investment → $45M annual water savings",
        zone: "Riverdale",
      },
      {
        priority: "medium",
        title: "Stormwater Management - Brooklyn",
        description: "Green infrastructure reduces flooding risk",
        roi: "$95M investment → 60% flood reduction",
        zone: "Red Hook",
      },
    ],
    waste: [
      {
        priority: "medium",
        title: "Waste-to-Energy Plant",
        description: "Convert 1,200 tons daily waste to electricity",
        roi: "$340M investment → $89M annual revenue",
        zone: "Hunts Point",
      },
      {
        priority: "high",
        title: "Smart Bin Network",
        description: "IoT-enabled bins reduce collection costs by 22%",
        roi: "$18M investment → $12M annual savings",
        zone: "Manhattan",
      },
      {
        priority: "low",
        title: "Composting Program Expansion",
        description: "Organic waste diversion saves landfill costs",
        roi: "$8M investment → $3.2M annual savings",
        zone: "Park Slope",
      },
    ],
  }
  return recommendations[layer] || []
}

export default function SmartCityDashboard() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<any>(null)
  const [selectedLayer, setSelectedLayer] = useState("development")
  const [activeZones, setActiveZones] = useState<Set<string>>(new Set())
  const [selectedZone, setSelectedZone] = useState<any>(null)
  const [timeSlider, setTimeSlider] = useState([2024])
  const [overlayOpacity, setOverlayOpacity] = useState(75)
  const [multiLayerMode, setMultiLayerMode] = useState(false)
  const [activeLayers, setActiveLayers] = useState<Set<string>>(new Set(["development"]))

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.google) return

      const mapOptions = {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 11,
        mapId: "DEMO_MAP_ID",
        mapTypeId: "roadmap",
        styles: [
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c9c9c9" }],
          },
        ],
      }

      const newMap = new window.google.maps.Map(mapRef.current, mapOptions)
      setMap(newMap)

      // Add zone overlays
      addZoneOverlays(newMap)
    }

    if (!window.google) {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCQmSqYCz39FSfmL4xk0rdOZf3qU8ORo5k&libraries=geometry,places&v=3.55`
      script.async = true
      script.defer = true
      script.onload = initMap
      document.head.appendChild(script)
    } else {
      initMap()
    }
  }, [])

  const addZoneOverlays = (map: any) => {
    nycZones.forEach((zone) => {
      const zoneCircle = new window.google.maps.Circle({
        strokeColor: getZoneColor(zone, selectedLayer),
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: getZoneColor(zone, selectedLayer),
        fillOpacity: overlayOpacity / 100,
        map: map,
        center: { lat: zone.lat, lng: zone.lng },
        radius: 1200, // Radius in meters
        clickable: true,
      })

      // Zone label
      const marker = new window.google.maps.Marker({
        position: { lat: zone.lat, lng: zone.lng },
        map: map,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: "#ffffff",
          fillOpacity: 1,
          strokeColor: getZoneColor(zone, selectedLayer),
          strokeWeight: 2,
        },
        title: zone.name,
      })

      // Info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: createZoneInfoContent(zone),
      })

      // Click handlers
      const handleZoneClick = () => {
        setSelectedZone(zone)
        infoWindow.open(map, marker)
        map.panTo({ lat: zone.lat, lng: zone.lng })
        map.setZoom(13)
      }

      zoneCircle.addListener("click", handleZoneClick)
      marker.addListener("click", handleZoneClick)

      // Store references for updates
      zone.circle = zoneCircle
      zone.marker = marker
    })
  }

  const getZoneColor = (zone: any, layer: string) => {
    const intensity = zone[layer] / 100
    const layerConfig = layerTypes.find((l) => l.id === layer)
    const baseColor = layerConfig?.color || "#3B82F6"

    // Convert hex to RGB and apply opacity based on intensity
    const r = Number.parseInt(baseColor.slice(1, 3), 16)
    const g = Number.parseInt(baseColor.slice(3, 5), 16)
    const b = Number.parseInt(baseColor.slice(5, 7), 16)

    return `rgba(${r}, ${g}, ${b}, ${intensity * 0.8})`
  }

  const createZoneInfoContent = (zone: any) => {
    return `
      <div class="p-3 min-w-[200px]">
        <h3 class="font-bold text-lg mb-2">${zone.name}</h3>
        <div class="space-y-1 text-sm">
          <div class="flex justify-between">
            <span>Development:</span>
            <span class="font-medium">${zone.development}/100</span>
          </div>
          <div class="flex justify-between">
            <span>Traffic:</span>
            <span class="font-medium">${zone.traffic}/100</span>
          </div>
          <div class="flex justify-between">
            <span>Population:</span>
            <span class="font-medium">${zone.population}/100</span>
          </div>
          <div class="flex justify-between">
            <span>Energy:</span>
            <span class="font-medium">${zone.energy}/100</span>
          </div>
          <div class="bg-slate-100 p-2 mt-2 rounded">
            <div class="text-xs text-slate-600">AI Recommendation</div>
            <div class="text-sm font-medium">Click for detailed insights</div>
          </div>
        </div>
      </div>
    `
  }

  const updateMapLayer = (layerId: string) => {
    if (!map) return

    nycZones.forEach((zone) => {
      if (zone.circle) {
        const newColor = getZoneColor(zone, layerId)
        zone.circle.setOptions({
          fillColor: newColor,
          strokeColor: newColor,
          fillOpacity: overlayOpacity / 100,
        })

        if (zone.marker) {
          zone.marker.setIcon({
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: newColor,
            strokeWeight: 2,
          })
        }
      }
    })
  }

  const handleLayerChange = (layerId: string) => {
    setSelectedLayer(layerId)
    setSelectedZone(null)
    updateMapLayer(layerId)

    if (multiLayerMode) {
      const newActiveLayers = new Set(activeLayers)
      if (newActiveLayers.has(layerId)) {
        newActiveLayers.delete(layerId)
      } else {
        newActiveLayers.add(layerId)
      }
      setActiveLayers(newActiveLayers)
    } else {
      setActiveLayers(new Set([layerId]))
    }
  }

  const exportReport = () => {
    // Simulate report generation
    const reportData = {
      selectedLayer,
      selectedZone: selectedZone?.name || "All Zones",
      timestamp: new Date().toISOString(),
      recommendations: getRecommendations(selectedLayer),
      metrics: selectedZone || nycZones[0],
    }

    console.log("Generating report:", reportData)
    // In real implementation, this would generate PDF/Excel
    alert("Report generation started. Download will begin shortly.")
  }

  const currentLayerConfig = layerTypes.find((l) => l.id === selectedLayer)
  const recommendations = getRecommendations(selectedLayer, selectedZone)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Globe className="w-8 h-8 text-blue-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">Smart City OS</h1>
                <p className="text-sm text-blue-200">New York City Urban Intelligence Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-300" />
                <span className="text-sm text-blue-200">Projection Year: {timeSlider[0]}</span>
              </div>
              <Button onClick={exportReport} className="bg-blue-600 hover:bg-blue-700" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Layer Controls - Above Map */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Layers className="w-5 h-5 mr-2" />
              Data Layers & Controls
            </CardTitle>
            <CardDescription className="text-blue-100">
              Toggle different urban data visualizations and analysis modes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Multi-Layer Mode Toggle */}
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <span className="text-sm text-blue-200">Multi-Layer Analysis Mode</span>
              <Switch checked={multiLayerMode} onCheckedChange={setMultiLayerMode} />
            </div>

            {/* Layer Selection Buttons - Horizontal Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {layerTypes.map((layer) => (
                <Button
                  key={layer.id}
                  variant={selectedLayer === layer.id ? "default" : "outline"}
                  onClick={() => handleLayerChange(layer.id)}
                  className={`flex flex-col items-center p-4 h-auto ${
                    selectedLayer === layer.id
                      ? "bg-white text-blue-900"
                      : "border-white/30 text-white bg-transparent hover:bg-white/10"
                  }`}
                >
                  <layer.icon className="w-6 h-6 mb-2" />
                  <span className="text-xs text-center leading-tight">{layer.name}</span>
                </Button>
              ))}
            </div>

            {/* City Overview Stats - Horizontal */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 bg-white/5 rounded-lg">
              <div className="text-center">
                <div className="text-xl font-bold text-white">
                  {(nycZones.reduce((avg, zone) => avg + zone[selectedLayer], 0) / nycZones.length) | 0}
                </div>
                <div className="text-xs text-blue-200">Avg {currentLayerConfig?.unit}</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">
                  {Math.max(...nycZones.map((zone) => zone[selectedLayer]))}
                </div>
                <div className="text-xs text-blue-200">Peak {currentLayerConfig?.unit}</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">{nycZones.length}</div>
                <div className="text-xs text-blue-200">Total Zones</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">
                  {nycZones.filter((zone) => zone[selectedLayer] > 75).length}
                </div>
                <div className="text-xs text-blue-200">High Priority</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">
                  {nycZones.filter((z) => z[selectedLayer] >= 80).length}
                </div>
                <div className="text-xs text-blue-200">Excellent (80+)</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">
                  {nycZones.filter((z) => z[selectedLayer] < 60).length}
                </div>
                <div className="text-xs text-blue-200">Needs Attention</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Selected Zone Info - Above Map (when selected) */}
        {selectedZone && (
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Selected Zone: {selectedZone.name}, {selectedZone.borough}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {layerTypes.map((layer) => (
                  <div key={layer.id} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <layer.icon className="w-4 h-4 mr-1 text-blue-300" />
                      <span className="text-sm text-blue-200">{layer.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={selectedZone[layer.id]} className="flex-1 h-2" />
                      <span className="text-sm text-white font-medium w-8">{selectedZone[layer.id]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Content Area - Map + AI Insights Side Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Map Area - Takes 3/4 of the width */}
          <div className="lg:col-span-3">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    NYC Urban Analytics Map
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentLayerConfig && (
                      <Badge
                        className="bg-white/20 text-white border-white/30"
                        style={{ backgroundColor: `${currentLayerConfig.color}20` }}
                      >
                        <currentLayerConfig.icon className="w-3 h-3 mr-1" />
                        {currentLayerConfig.name}
                      </Badge>
                    )}
                    <Badge className="bg-white/20 text-white border-white/30">{nycZones.length} Zones</Badge>
                    <Badge className="bg-white/20 text-white border-white/30">Real-time Data</Badge>
                  </div>
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Interactive zone-based visualization • Click zones for detailed insights •{" "}
                  {currentLayerConfig?.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div ref={mapRef} className="w-full h-[700px] rounded-lg border border-white/20 bg-slate-800" />
              </CardContent>
            </Card>
          </div>

          {/* AI Insights Side Panel - Takes 1/4 of the width */}
          <div className="lg:col-span-1 space-y-6">
            {/* AI Recommendations */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  AI Insights & ROI
                </CardTitle>
                <CardDescription className="text-blue-100">{currentLayerConfig?.name} Recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      rec.priority === "critical"
                        ? "bg-red-500/20 border-red-500/30"
                        : rec.priority === "high"
                          ? "bg-yellow-500/20 border-yellow-500/30"
                          : "bg-blue-500/20 border-blue-500/30"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Badge
                        className={
                          rec.priority === "critical"
                            ? "bg-red-500/20 text-red-300 border-red-500/30"
                            : rec.priority === "high"
                              ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                              : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                        }
                      >
                        {rec.priority === "critical" ? (
                          <AlertTriangle className="w-3 h-3 mr-1" />
                        ) : rec.priority === "high" ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        )}
                        {rec.priority}
                      </Badge>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{rec.title}</h4>
                    <p className="text-xs text-blue-100 mb-2">{rec.description}</p>
                    <div className="text-xs">
                      <div className="text-green-300 font-medium">{rec.roi}</div>
                      <div className="text-blue-200">Zone: {rec.zone}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Layer Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 gap-3 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {(nycZones.reduce((avg, zone) => avg + zone[selectedLayer], 0) / nycZones.length) | 0}
                    </div>
                    <div className="text-xs text-blue-200">Average Score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {Math.max(...nycZones.map((zone) => zone[selectedLayer]))}
                    </div>
                    <div className="text-xs text-blue-200">Highest Score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {nycZones.filter((zone) => zone[selectedLayer] > 75).length}
                    </div>
                    <div className="text-xs text-blue-200">High Priority Zones</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/20">
                  <div className="text-xs text-blue-200 mb-1">Zone Performance Distribution</div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-blue-200">High (80+)</span>
                      <span className="text-white">{nycZones.filter((z) => z[selectedLayer] >= 80).length}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-blue-200">Medium (60-79)</span>
                      <span className="text-white">
                        {nycZones.filter((z) => z[selectedLayer] >= 60 && z[selectedLayer] < 80).length}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-blue-200">Low (&lt;60)</span>
                      <span className="text-white">{nycZones.filter((z) => z[selectedLayer] < 60).length}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Controls Under Map - Only Two Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Opacity Control */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-lg">Overlay Opacity</CardTitle>
              <CardDescription className="text-blue-100">Adjust layer transparency: {overlayOpacity}%</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={[overlayOpacity]}
                onValueChange={(value) => {
                  setOverlayOpacity(value[0])
                  updateMapLayer(selectedLayer)
                }}
                max={100}
                min={0}
                step={10}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-blue-200 mt-2">
                <span>Transparent</span>
                <span>Opaque</span>
              </div>
            </CardContent>
          </Card>

          {/* Time Projection Slider */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-lg">Projection Year</CardTitle>
              <CardDescription className="text-blue-100">Future planning scenario: {timeSlider[0]}</CardDescription>
            </CardHeader>
            <CardContent>
              <Slider
                value={timeSlider}
                onValueChange={setTimeSlider}
                max={2040}
                min={2024}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-blue-200 mt-2">
                <span>2024 (Current)</span>
                <span>2040 (Future)</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
