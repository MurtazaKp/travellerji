import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Heart,
} from "lucide-react";

export function Footer() {
  const footerLinks = {
    journeys: [
      "Spiritual Tours",
      "Monsoon Adventures",
      "Jungle Safaris",
      "Family Packages",
      "Women-Only Tours",
      "Senior Citizen Special",
      "Corporate Tours",
      "Student Groups",
    ],
    destinations: [
      "Maharashtra Tours",
      "Ashtavinayak Darshan",
      "Jyotirlinga Circuit",
      "Kerala Backwaters",
      "Rajasthan Heritage",
      "Goa Beaches",
      "Himachal Hills",
      "Karnataka Temples",
    ],
    support: [
      "Family Care Support",
      "Booking Assistance",
      "Journey Modifications",
      "Travel Insurance",
      "Safety Guidelines",
      "Group Bookings",
      "Payment Help",
      "Emergency Support",
    ],
    company: [
      "Our Family Story",
      "Amol Jadhav - Founder",
      "Our Values",
      "Safety First",
      "Testimonials",
      "Career with Us",
      "Social Responsibility",
      "Awards & Recognition",
    ],
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919999999999?text=Namaste! I want to join Traveller Ji family for amazing journeys.",
      "_blank"
    );
  };

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/60 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border/50">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary">🕉</span>
              <span className="text-primary text-sm">Join Our Family</span>
            </div>
            <h3 className="text-2xl mb-4">Never Miss a Sacred Journey</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to receive exclusive spiritual tour packages, monsoon
              trek updates, and family-special deals directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <Input
                placeholder="Enter your email"
                type="email"
                className="flex-1 border-primary/30 focus:border-primary"
              />
              <Button className="sm:w-auto bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4 mr-2" />
                Join Family
              </Button>
            </div>
            <Button
              variant="outline"
              onClick={handleWhatsAppClick}
              className="border-green-500 text-green-600 hover:bg-green-50"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp Updates
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              By subscribing, you become part of Traveller Ji family and agree
              to our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
                    <span className="text-white">🕉</span>
                  </div>
                  <div>
                    <h2 className="text-xl text-primary">Traveller Ji</h2>
                    <p className="text-xs text-muted-foreground">
                      Your Journey, Our Family
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Founded by Amol Jadhav with a vision to make every traveller
                  feel like family. We specialize in spiritual journeys,
                  cultural experiences, and safe adventures across India,
                  treating every guest with warmth and respect.
                </p>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                  <div className="flex items-center gap-2">
                    <Heart className="h-3 w-3 text-red-500" />
                    <span>10,000+ Happy Families</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">🛡️</span>
                    <span>100% Safe Journeys</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">🏛️</span>
                    <span>Cultural Heritage Focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">🕉</span>
                    <span>Spiritual Guidance</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary/10"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary/10"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary/10"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary/10"
                  >
                    <Youtube className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <div>
                    <span className="block">+91 99999 99999</span>
                    <span className="text-xs text-muted-foreground">
                      24/7 Family Support
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  <div>
                    <span
                      className="block text-green-600 cursor-pointer"
                      onClick={handleWhatsAppClick}
                    >
                      WhatsApp Us
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Instant Response
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <div>
                    <span className="block">hello@travellerji.com</span>
                    <span className="text-xs text-muted-foreground">
                      Family Care Team
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div>
                    <span className="block">Pune, Maharashtra, India</span>
                    <span className="text-xs text-muted-foreground">
                      Serving Pan-India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Types */}
            <div>
              <h4 className="mb-4 text-primary">Our Journeys</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.journeys.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="mb-4 text-primary">Destinations</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.destinations.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="mb-4 text-primary">Family Support</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-primary">Our Family</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications & Trust */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
              <span className="text-muted-foreground">
                🛡️ Government Registered Tour Operator
              </span>
              <span className="text-muted-foreground">
                📜 License: TJ/MH/2024/001
              </span>
              <span className="text-muted-foreground">
                🏆 TripAdvisor Certificate of Excellence
              </span>
            </div>
            <div className="flex gap-4 text-xs">
              <span className="text-green-600">✓ Safe Travel Certified</span>
              <span className="text-blue-600">✓ ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <Separator />
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
              <span>© 2025 Traveller Ji. All rights reserved with love ❤️</span>
              <span>Designed for families by a family</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cancellation Policy
              </a>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-muted-foreground">
            <p>🙏 Vasudhaiva Kutumbakam - The World is One Family 🙏</p>
            <p className="mt-1">
              Made with ❤️ for travellers by travellers in Maharashtra, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
