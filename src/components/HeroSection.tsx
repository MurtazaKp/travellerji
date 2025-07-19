import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Badge } from "./ui/badge";
import {
  Search,
  Calendar as CalendarIcon,
  MapPin,
  Users,
  Clock,
  Heart,
  MessageCircle,
} from "lucide-react";
import { format } from "date-fns";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState<Date>();
  const [travelers, setTravelers] = useState("");
  const [tripType, setTripType] = useState("");

  const handleSearch = () => {
    const searchData = {
      destination,
      date: date ? format(date, "yyyy-MM-dd") : "",
      travelers,
      tripType,
    };
    onSearch(JSON.stringify(searchData));
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/917499937499?text=Namaste! I want to plan a spiritual journey with Traveller Ji family.",
      "_blank"
    );
  };

  const popularDestinations = [
    "Ashtavinayak Tour from Pune",
    "Jyotirlinga Darshan",
    "Monsoon Sahyadri Treks",
    "Goa Family Package",
    "Kerala Backwaters",
    "Rajasthan Heritage Tour",
  ];

  const tripTypes = [
    "Spiritual Tours",
    "Monsoon Treks",
    "Jungle Safari",
    "Family Packages",
    "Women-Only Tours",
    "Senior Citizen Tours",
    "Corporate Tours",
    "Student Groups",
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with Cultural Pattern */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful Indian landscape with temple and mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        <div className="absolute inset-0 cultural-pattern opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Hero Text */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur rounded-full mt-10">
              <span className="text-orange-300">🕉</span>
              <span className="text-white text-sm">
                Trusted by 10,000+ Travellers
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              <span className="block">Namaste! Your Journey</span>
              {/* <span className="block text-orange-300">Your Journey</span> */}
              <span className="block">Our Family</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              From sacred temples to monsoon adventures, we treat every
              traveller like family. Experience India spiritual heritage and
              natural beauty with Traveller Ji.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/80">
                <Heart className="h-5 w-5 text-orange-300" />
                <span>Family-First Approach</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span className="text-orange-300">🛡️</span>
                <span>Safe & Secure Journeys</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span className="text-orange-300">🏛️</span>
                <span>Cultural Heritage Focus</span>
              </div>
            </div>
          </div>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur rounded-3xl p-6 md:p-8 shadow-2xl max-w-5xl mx-auto mb-8">
            <h3 className="text-xl md:text-2xl text-gray-800 mb-6">
              Discover Your Next Spiritual Adventure
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-600 flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-primary" />
                  Destination
                </label>
                <Input
                  placeholder="Pune, Maharashtra..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="border-2 border-gray-200 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600 flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1 text-primary" />
                  Journey Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-2 border-gray-200 hover:border-primary"
                    >
                      {date ? format(date, "MMM dd, yyyy") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600 flex items-center">
                  <Users className="h-4 w-4 mr-1 text-primary" />
                  Travellers
                </label>
                <Select value={travelers} onValueChange={setTravelers}>
                  <SelectTrigger className="border-2 border-gray-200 focus:border-primary">
                    <SelectValue placeholder="How many?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="family-4">Family (3-4)</SelectItem>
                    <SelectItem value="family-6">Family (5-6)</SelectItem>
                    <SelectItem value="group">Group (7+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600 flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-primary" />
                  Journey Type
                </label>
                <Select value={tripType} onValueChange={setTripType}>
                  <SelectTrigger className="border-2 border-gray-200 focus:border-primary">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {tripTypes.map((type) => (
                      <SelectItem
                        key={type}
                        value={type.toLowerCase().replace(/\s+/g, "-")}
                      >
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleSearch}
                className="flex-1 bg-primary hover:bg-primary/90 py-3 text-lg"
              >
                <Search className="h-5 w-5 mr-2" />
                Find My Journey
              </Button>
              <Button
                variant="outline"
                onClick={handleWhatsAppClick}
                className="border-green-500 text-green-600 hover:bg-green-50 py-3 px-6"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="text-center">
            <p className="text-white/80 mb-4">Popular Journeys:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularDestinations.map((dest) => (
                <Badge
                  key={dest}
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 cursor-pointer backdrop-blur border-white/30 py-2 px-4"
                  onClick={() => setDestination(dest)}
                >
                  {dest}
                </Badge>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center pb-10">
            <div className="text-white">
              <div className="text-2xl mb-1">10,000+</div>
              <div className="text-sm text-white/80">Happy Families</div>
            </div>
            <div className="text-white">
              <div className="text-2xl mb-1">500+</div>
              <div className="text-sm text-white/80">Sacred Destinations</div>
            </div>
            <div className="text-white">
              <div className="text-2xl mb-1">15+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="text-2xl mb-1">100%</div>
              <div className="text-sm text-white/80">Safe Journeys</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
