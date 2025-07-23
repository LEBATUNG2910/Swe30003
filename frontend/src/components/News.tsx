import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export function News() {
  return (
    <section className="py-16 bg-blue-600">
                <div className="container ml-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Stay Updated with Health News
                        </h2>
                        <p className="text-blue-100 mb-8 text-lg">
                            Subscribe to our newsletter for the latest health
                            tips, product updates, and exclusive offers
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                placeholder="Enter your email address"
                                className="flex-1 bg-white border-0"
                            />
                            <Button className="bg-white text-blue-600 hover:bg-gray-100">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-blue-200 text-sm mt-4">
                            Join over 100,000 subscribers. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </section>
  );
}
