import { useState, useMemo } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";
import {
  ArrowLeft,
  Filter,
  SlidersHorizontal,
  Star,
  MapPin,
  Clock,
  Heart,
  MessageCircle,
  Shield,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SearchResultsProps {
  query: string;
  onBackToHome: () => void;
}

export function SearchResults({ query, onBackToHome }: SearchResultsProps) {
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState([0, 25000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [likedTours, setLikedTours] = useState<Set<number>>(new Set());

  // Mock search results with Indian destinations and cultural tours
  const searchResults = [
    {
      id: 1,
      title: "Complete Ashtavinayak Darshan Tour",
      location: "Maharashtra, India",
      duration: "2 days",
      price: 3500,
      originalPrice: 4200,
      rating: 4.9,
      reviews: 324,
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Spiritual",
      description:
        "Sacred journey covering all 8 revered Ganesha temples with comfortable AC transport and experienced temple guide.",
      highlights: [
        "Morgaon Temple",
        "Siddhatek Temple",
        "Pali Temple",
        "Mahad Temple",
        "Theur Temple",
        "Lenyadri Temple",
        "Ozar Temple",
        "Ranjangaon Temple",
      ],
      specialFor: "All Ages",
      testimonial: "Felt blessed throughout the journey - Sharma Family",
    },
    {
      id: 2,
      title: "Jyotirlinga Darshan Circuit",
      location: "Maharashtra & Gujarat",
      duration: "5 days",
      price: 12500,
      originalPrice: 15000,
      rating: 4.8,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1609920658906-8223bd289001?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Spiritual",
      description:
        "Visit 5 sacred Jyotirlinga temples including Bhimashankar, Trimbakeshwar, Grishneshwar, Somnath, and Nageshwar.",
      highlights: [
        "Bhimashankar",
        "Trimbakeshwar",
        "Grishneshwar",
        "Somnath",
        "Nageshwar",
        "VIP Darshan",
        "Religious Guide",
        "Comfortable Stay",
      ],
      specialFor: "Devotees",
      testimonial: "Spiritual journey of a lifetime - Gupta Family",
    },
    {
      id: 3,
      title: "Pune Local Spiritual Tour",
      location: "Pune, Maharashtra",
      duration: "1 day",
      price: 1200,
      originalPrice: null,
      rating: 4.7,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Spiritual",
      description:
        "One day spiritual tour covering Pune's famous temples including Dagdusheth Halwai, Kasba Ganpati, and Chaturshringi.",
      highlights: [
        "Dagdusheth Halwai",
        "Kasba Ganpati",
        "Chaturshringi Temple",
        "Parvati Hill",
        "Local Prasad",
        "AC Transport",
      ],
      specialFor: "Local Devotees",
      testimonial: "Perfect day trip with family care - Local Resident",
    },
    {
      id: 4,
      title: "Shirdi Sai Baba Darshan",
      location: "Shirdi, Maharashtra",
      duration: "2 days",
      price: 2800,
      originalPrice: 3200,
      rating: 4.9,
      reviews: 412,
      image:
        "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Spiritual",
      description:
        "Peaceful pilgrimage to Shirdi with VIP darshan arrangement, visits to Dwarkamai, Chavadi, and Shani Shingnapur.",
      highlights: [
        "Sai Baba Temple",
        "Dwarkamai",
        "Chavadi",
        "Shani Shingnapur",
        "VIP Darshan",
        "Accommodation",
      ],
      specialFor: "Sai Devotees",
      testimonial: "Sai's blessings felt throughout - Devoted Family",
    },
    {
      id: 5,
      title: "Konkan Coastal Temples",
      location: "Konkan, Maharashtra",
      duration: "3 days",
      price: 4500,
      originalPrice: 5200,
      rating: 4.6,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Spiritual",
      description:
        "Coastal spiritual journey covering famous temples along the beautiful Konkan coast with beach visits.",
      highlights: [
        "Ganpatipule Temple",
        "Velneshwar Temple",
        "Harihareshwar",
        "Beach Visits",
        "Coastal Views",
        "Seafood",
      ],
      specialFor: "Nature Lovers",
      testimonial:
        "Perfect blend of spirituality and nature - Coastal Explorer",
    },
    {
      id: 6,
      title: "Pandharpur Wari Experience",
      location: "Pandharpur, Maharashtra",
      duration: "4 days",
      price: 3800,
      originalPrice: null,
      rating: 4.8,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1585211969224-3e992986159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Cultural",
      description:
        "Experience the famous Pandharpur Wari pilgrimage with traditional ceremonies and cultural immersion.",
      highlights: [
        "Vitthal Temple",
        "Wari Procession",
        "Cultural Program",
        "Traditional Meals",
        "Religious Ceremonies",
        "Local Guide",
      ],
      specialFor: "Culture Enthusiasts",
      testimonial: "Authentic cultural experience - Traditional Family",
    },
  ];

  const categories = [
    "Spiritual",
    "Cultural",
    "Heritage",
    "Monsoon",
    "Adventure",
  ];
  const durations = ["1 day", "2 days", "3 days", "4 days", "5 days"];

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleDuration = (duration: string) => {
    setSelectedDurations((prev) =>
      prev.includes(duration)
        ? prev.filter((d) => d !== duration)
        : [...prev, duration]
    );
  };

  const toggleLike = (tourId: number) => {
    const newLikedTours = new Set(likedTours);
    if (newLikedTours.has(tourId)) {
      newLikedTours.delete(tourId);
    } else {
      newLikedTours.add(tourId);
    }
    setLikedTours(newLikedTours);
  };

  const handleWhatsAppInquiry = (tourTitle: string) => {
    window.open(
      `https://wa.me/917499937499?text=Namaste! I want to know more about ${tourTitle} with Traveller Ji family.`,
      "_blank"
    );
  };

  const filteredResults = useMemo(() => {
    const filtered = searchResults.filter((tour) => {
      const matchesPrice =
        tour.price >= priceRange[0] && tour.price <= priceRange[1];
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(tour.category);
      const matchesDuration =
        selectedDurations.length === 0 ||
        selectedDurations.includes(tour.duration);

      return matchesPrice && matchesCategory && matchesDuration;
    });

    // Sort results
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "duration":
        filtered.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
        break;
      default: // popular
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    return filtered;
  }, [
    searchResults,
    priceRange,
    selectedCategories,
    selectedDurations,
    sortBy,
  ]);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h4 className="mb-4 flex items-center gap-2">
          <span className="text-primary">💰</span>
          Budget Range
        </h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={25000}
          min={0}
          step={500}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>₹{priceRange[0].toLocaleString()}</span>
          <span>₹{priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h4 className="mb-4 flex items-center gap-2">
          <span className="text-primary">🕉</span>
          Journey Type
        </h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <label htmlFor={category} className="text-sm">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <h4 className="mb-4 flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          Duration
        </h4>
        <div className="space-y-2">
          {durations.map((duration) => (
            <div key={duration} className="flex items-center space-x-2">
              <Checkbox
                id={duration}
                checked={selectedDurations.includes(duration)}
                onCheckedChange={() => toggleDuration(duration)}
              />
              <label htmlFor={duration} className="text-sm">
                {duration}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" onClick={onBackToHome} className="p-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl flex items-center gap-2">
                <span className="text-primary">🕉</span>
                Spiritual Journeys
              </h1>
              <p className="text-muted-foreground">
                {filteredResults.length} sacred journeys found for your family
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Maharashtra Tours
              </Badge>
              {selectedCategories.map((cat) => (
                <Badge
                  key={cat}
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() => toggleCategory(cat)}
                >
                  {cat} ×
                </Badge>
              ))}
            </div>

            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>

              {/* Mobile Filter */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="sm:hidden">
                    <Filter className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <SlidersHorizontal className="h-5 w-5 text-primary" />
                      Filters
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden sm:block w-80 flex-shrink-0">
            <Card className="p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="h-5 w-5 text-primary" />
                <h3>Journey Filters</h3>
              </div>
              <FilterContent />
            </Card>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-green-600" />
                <span>100% Safe Journeys</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Family-First Care</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Expert Local Guides</span>
              </div>
            </div>

            <div className="grid gap-6">
              {filteredResults.map((tour) => (
                <Card
                  key={tour.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-primary/30"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-80 h-64 md:h-auto relative flex-shrink-0">
                      <ImageWithFallback
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-primary text-white shadow-lg">
                          {tour.category}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-gray-700 shadow-lg"
                        >
                          {tour.specialFor}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`absolute top-4 right-4 rounded-full shadow-lg ${
                          likedTours.has(tour.id)
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "bg-white/80 hover:bg-white"
                        }`}
                        onClick={() => toggleLike(tour.id)}
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            likedTours.has(tour.id) ? "fill-current" : ""
                          }`}
                        />
                      </Button>
                    </div>

                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">
                              {tour.location}
                            </span>
                          </div>
                          <h3 className="text-xl mb-2">{tour.title}</h3>
                          <p className="text-muted-foreground mb-4">
                            {tour.description}
                          </p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl text-primary">
                              ₹{tour.price.toLocaleString()}
                            </span>
                            {tour.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ₹{tour.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            per person
                          </p>
                          {tour.originalPrice && (
                            <Badge variant="destructive" className="mt-1">
                              Save ₹
                              {(
                                tour.originalPrice - tour.price
                              ).toLocaleString()}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {tour.highlights.slice(0, 4).map((highlight, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-primary/30"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-muted/50 p-3 rounded-lg mb-4">
                        <p className="text-xs text-muted-foreground italic">
                          {tour.testimonial}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{tour.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span>{tour.rating}</span>
                            <span className="text-muted-foreground">
                              ({tour.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            onClick={() => handleWhatsAppInquiry(tour.title)}
                            className="border-green-500 text-green-600 hover:bg-green-50"
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            WhatsApp
                          </Button>
                          <Button className="bg-primary hover:bg-primary/90">
                            Book Journey
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredResults.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🕉</div>
                <h3 className="text-xl mb-2">No journeys found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or let our family help you find the
                  perfect spiritual journey
                </p>
                <div className="flex gap-2 justify-center">
                  <Button onClick={onBackToHome}>Back to Home</Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(
                        "https://wa.me/917499937499?text=Help me find the perfect journey!",
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Get Help
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
