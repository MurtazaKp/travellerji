import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, User, Heart, Phone, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface HeaderProps {
  onBackToHome: () => void;
}

export function Header({ onBackToHome }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Spiritual Tours", href: "#spiritual" },
    { label: "Monsoon Treks", href: "#monsoon" },
    { label: "Jungle Safari", href: "#safari" },
    { label: "Family Tours", href: "#family" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/917499937499?text=Hello Traveller Ji! I would like to inquire about tour packages.",
      "_blank"
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img className=" w-52 h-auto" src="/logo.svg" alt="" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleWhatsAppClick}
              className="text-green-600 hover:text-green-700"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              WhatsApp
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Plan Journey
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6 px-5">
                <div className="flex items-center gap-2 pb-4 border-b">
                  <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
                    <span className="text-white">🕉</span>
                  </div>
                  <div>
                    <h3 className="text-primary">Traveller Ji</h3>
                    <p className="text-xs text-muted-foreground">
                      Your Journey, Our Family
                    </p>
                  </div>
                </div>

                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-6 border-t space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-green-600 border-green-600 hover:bg-green-50"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Wishlist
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    My Account
                  </Button>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    Plan Your Journey
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
