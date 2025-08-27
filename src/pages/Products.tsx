import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [priceRange, setPriceRange] = useState("all");

  // Mock products data
  const products = [
    {
      id: "1",
      name: "AquaPure Pro Max 9L RO Water Purifier",
      price: 18999,
      originalPrice: 24999,
      image: product1,
      rating: 4.5,
      reviews: 2847,
      features: ["9-Stage Purification", "Mineral Retention", "UV + UF Technology"]
    },
    {
      id: "2", 
      name: "AquaPure Under-Sink Compact RO System",
      price: 12999,
      originalPrice: 16999,
      image: product2,
      rating: 4.3,
      reviews: 1923,
      features: ["Space-Saving Design", "6-Stage Filtration", "Auto-Flush Technology"]
    },
    {
      id: "3",
      name: "AquaPure Smart Connect WiFi Water Purifier",
      price: 25999,
      originalPrice: 32999,
      image: product1,
      rating: 4.7,
      reviews: 1567,
      features: ["WiFi Connectivity", "Smart App Control", "Real-time Monitoring"]
    },
    {
      id: "4",
      name: "AquaPure Essential 7L RO Water Purifier",
      price: 14999,
      originalPrice: 19999,
      image: product2,
      rating: 4.2,
      reviews: 3421,
      features: ["7-Stage Purification", "Energy Efficient", "Compact Design"]
    },
    {
      id: "5",
      name: "AquaPure Premium 12L RO + UV System",
      price: 22999,
      originalPrice: 28999,
      image: product1,
      rating: 4.6,
      reviews: 987,
      features: ["12L Storage", "RO + UV + UF", "Touch Display"]
    },
    {
      id: "6",
      name: "AquaPure Commercial Grade 15L System",
      price: 35999,
      originalPrice: 42999,
      image: product2,
      rating: 4.4,
      reviews: 543,
      features: ["High Capacity", "Commercial Grade", "Dual Membrane"]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Premium Water Purifiers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of advanced RO water purification systems designed for pure, healthy water
          </p>
        </div>

        {/* Filters Section */}
        <Card className="mb-8 border-0 shadow-soft bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search water purifiers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background/50 border-muted"
                />
              </div>

              {/* Sort By */}
              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 bg-background/50">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Customer Rating</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>

                {/* Price Range */}
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-40 bg-background/50">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-15k">Under ₹15,000</SelectItem>
                    <SelectItem value="15k-25k">₹15,000 - ₹25,000</SelectItem>
                    <SelectItem value="25k-35k">₹25,000 - ₹35,000</SelectItem>
                    <SelectItem value="above-35k">Above ₹35,000</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="sm" className="lg:hidden">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all shadow-soft hover:shadow-premium"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;