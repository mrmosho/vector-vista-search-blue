import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const handleSearch = async () => {
  console.log("🔍 Search triggered with query:", query);
  setLoading(true);
  setError(null);
  setResults(null);
  
  try {
    console.log("📡 Calling API...");
    const data = await fetchData(query);
    console.log("✅ API response:", data);
    setResults(data);
  } catch (err) {
    console.error("❌ Search error:", err);
    setError(`Search failed: ${err.message}`);
  } finally {
    setLoading(false);
  }
};

export default App;
