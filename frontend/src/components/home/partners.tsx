import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    id: 1,
    name: "El Soadaa Group",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-08-at-12.12.00-1.jpeg",
  },
  {
    id: 2,
    name: "Larsen & Toubro",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-08-at-12.12.04.jpeg",
  },
  {
    id: 3,
    name: "NPC",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-08-at-11.53.56.jpeg",
  },
  {
    id: 4,
    name: "Petroleum",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-08-at-12.12.01.jpeg",
  },
  {
    id: 5,
    name: "Triangle",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-08-at-11.53.54.jpeg",
  },
  {
    id: 6,
    name: "Suez Canal",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-08-at-11.53.55-1.jpeg",
  },
  {
    id: 7,
    name: "Enppi",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-08-at-11.53.55-2.jpeg",
  },
  {
    id: 8,
    name: "Petrojet",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-08-at-11.53.56-1.jpeg",
  },
  {
    id: 9,
    name: "Engineering",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-08-at-12.12.01.jpeg",
  },
  {
    id: 10,
    name: "Industrial",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-08-at-12.12.01-1.jpeg",
  },
  {
    id: 11,
    name: "Energy",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-08-at-12.12.03.jpeg",
  },
  {
    id: 12,
    name: "Sonker",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-08-at-11.53.55.jpeg",
  },
];

export function PartnersSection({ lang }: { lang: string }) {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center text-blue-800 mb-12"
          dir="rtl"
        >
          {lang === "ar" ? "شركاء النجاح" : "Our Partners"}
        </h2>

        <Card className="border-2 border-blue-100">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="relative group transition-transform duration-300 hover:scale-105"
                >
                  <div className="aspect-square relative">
                    <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 border-2 border-blue-200 rounded-full"></div>
                    <div className="absolute top-0 left-0 right-0 flex justify-center">
                      <div className="w-8 h-4 bg-blue-600 rounded-b-full"></div>
                    </div>
                    <div className="absolute inset-4 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="object-cover w-28"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
