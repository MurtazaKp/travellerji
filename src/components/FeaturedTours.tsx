import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Star,
  MapPin,
  Clock,
  Users,
  Heart,
  Calendar,
  MessageCircle,
  Shield,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FeaturedTours() {
  const [likedTours, setLikedTours] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState("All");

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

  const featuredTours = [
    {
      id: 1,
      title: "Ashtavinayak Darshan from Pune",
      location: "Maharashtra, India",
      duration: "2 days",
      price: 3500,
      originalPrice: 4200,
      rating: 4.9,
      reviews: 324,
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Spiritual",
      highlights: [
        "8 Sacred Temples",
        "Comfortable AC Bus",
        "Temple Guide",
        "Traditional Prasad",
      ],
      includes: [
        "AC Transport",
        "Breakfast",
        "Temple Guide",
        "Darshan Arrangement",
      ],
      specialFor: "All Ages",
      testimonial:
        "Perfect spiritual journey with family care - Mrs. Sharma, Mumbai",
    },
    {
      id: 2,
      title: "Monsoon Sahyadri Trek",
      location: "Western Ghats, Maharashtra",
      duration: "3 days",
      price: 2800,
      originalPrice: 3500,
      rating: 4.8,
      reviews: 267,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Monsoon",
      highlights: [
        "Waterfall Trek",
        "Cloud Walks",
        "Nature Photography",
        "Local Village Stay",
      ],
      includes: ["Stay", "All Meals", "Trek Guide", "Safety Equipment"],
      specialFor: "Adventure Lovers",
      testimonial:
        "Amazing monsoon experience with complete safety - Rahul Patil, Pune",
    },
    {
      id: 3,
      title: "Kerala Backwaters Family Tour",
      location: "Alleppey & Kumarakom, Kerala",
      duration: "5 days",
      price: 12500,
      originalPrice: 15000,
      rating: 4.9,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Family",
      highlights: [
        "Houseboat Stay",
        "Ayurvedic Spa",
        "Traditional Cuisine",
        "Spice Garden Visit",
      ],
      includes: ["Houseboat", "All Meals", "Transfers", "Sightseeing"],
      specialFor: "Families",
      testimonial:
        "Felt like royal treatment throughout the journey - Gupta Family, Delhi",
    },
    {
      id: 4,
      title: "Gir Forest Jungle Safari",
      location: "Gir National Park, Gujarat",
      duration: "4 days",
      price: 8900,
      originalPrice: 10500,
      rating: 4.7,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1676138528600-135cb9dbd5d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Wildlife",
      highlights: [
        "Asiatic Lions",
        "Jungle Safari",
        "Nature Walk",
        "Wildlife Photography",
      ],
      includes: ["Resort Stay", "Safari Permits", "Guide", "All Meals"],
      specialFor: "Nature Enthusiasts",
      testimonial:
        "Incredible wildlife experience with professional guides - Amit Shah, Ahmedabad",
    },
    {
      id: 5,
      title: "Rajasthan Heritage Circuit",
      location: "Jaipur, Udaipur, Jodhpur",
      duration: "7 days",
      price: 18900,
      originalPrice: 22000,
      rating: 4.8,
      reviews: 298,
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Heritage",
      highlights: [
        "Palace Hotels",
        "Royal Cuisine",
        "Cultural Shows",
        "Camel Safari",
      ],
      includes: ["Heritage Hotels", "All Meals", "Private Car", "Guide"],
      specialFor: "Culture Lovers",
      testimonial:
        "Royal treatment like we are part of the family - Mehta Family, Bangalore",
    },
    {
      id: 6,
      title: "Women-Only Goa Retreat",
      location: "North & South Goa",
      duration: "4 days",
      price: 6800,
      originalPrice: 8200,
      rating: 4.9,
      reviews: 145,
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      category: "Women-Only",
      highlights: [
        "Beach Relaxation",
        "Yoga Sessions",
        "Local Shopping",
        "Safety First",
      ],
      includes: ["Beach Resort", "Female Guide", "All Meals", "Activities"],
      specialFor: "Women Groups",
      testimonial:
        "Safe, fun and empowering journey with sisters - Priya Group, Chennai",
    },
  ];

  const categories = [
    "All",
    "Spiritual",
    "Monsoon",
    "Family",
    "Wildlife",
    "Heritage",
    "Women-Only",
  ];

  const filteredTours =
    selectedCategory === "All"
      ? featuredTours
      : featuredTours.filter((tour) => tour.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary">🕉</span>
            <span className="text-primary text-sm">Curated with Love</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
            Our Family Favorite Journeys
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience India diverse beauty through our carefully crafted tours.
            From sacred temples to monsoon adventures, every journey is designed
            with family care.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4 text-green-600" />
            <span>100% Safe &amp; Secure</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Heart className="h-4 w-4 text-red-500" />
            <span>Family-First Approach</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>4.8+ Average Rating</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2 rounded-full"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <Card
              key={tour.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30"
            >
              <CardHeader className="p-0 relative">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
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
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {tour.location}
                  </span>
                </div>

                <h3 className="text-xl mb-3 text-foreground">{tour.title}</h3>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{tour.rating}</span>
                    <span className="text-muted-foreground">
                      ({tour.reviews})
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    Journey Highlights:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.slice(0, 3).map((highlight, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs border-primary/30"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-muted/50 p-3 rounded-lg mb-4">
                  <p className="text-xs text-muted-foreground italic">
                    {tour.testimonial}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
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
                    </div>
                    <div className="text-right">
                      {tour.originalPrice && (
                        <Badge variant="destructive" className="mb-1">
                          Save ₹
                          {(tour.originalPrice - tour.price).toLocaleString()}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button className="flex-1 bg-primary hover:bg-primary/90">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Journey
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleWhatsAppInquiry(tour.title)}
                  className="border-green-500 text-green-600 hover:bg-green-50"
                >
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-warm p-8 rounded-3xl  max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4">Ready for Your Next Adventure?</h3>
            <p className="mb-6 t">
              Let our family help you plan the perfect journey. Every traveller
              is special to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="secondary" size="lg">
                View All Journeys
              </Button>
              <Button
                variant="outline"
                size="lg"
                className=" hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat with Family
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
