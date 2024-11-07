import { Card, CardContent } from "@/components/ui/card";
import { i } from "vite/dist/node/types.d-aGj9QkWt";

const partners = [
  {
    id: 1,
    name: "El Soadaa Group",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-17.33.16-1.jpeg",
  },
  {
    id: 2,
    name: "Larsen & Toubro",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-10.38.16.jpeg",
  },
  {
    id: 3,
    name: "NPC",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-17.33.17-2.jpeg",
  },
  {
    id: 4,
    name: "Petroleum",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-10.38.18-2.jpeg",
  },
  {
    id: 5,
    name: "Triangle",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-10.38.18-1.jpeg",
  },
  {
    id: 6,
    name: "Suez Canal",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-17.33.16.jpeg",
  },
  {
    id: 7,
    name: "Enppi",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-17.33.17-1.jpeg",
  },
  {
    id: 8,
    name: "Petrojet",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-17.24.10.jpeg",
  },
  {
    id: 10,
    name: "Industrial",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-10.38.17.jpeg",
  },
  {
    id: 11,
    name: "Energy",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-10.38.17-3.jpeg",
  },
  {
    id: 12,
    name: "Sonker",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-17.24.11-1.jpeg",
  },
  {
    id: 13,
    name: "الهيئه الهندسيه",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-10.38.18.jpeg",
  },
  {
    id: 14,
    name: "CPC",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-17.33.17.jpeg",
  },
  {
    id: 15,
    name: "Masafi",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-10.38.17-2.jpeg",
  },
  {
    id: 16,
    name: "DP world",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-10.38.17-1.jpeg",
  },
  {
    id: 17,
    name: "Famsun",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-10.38.15.jpeg",
  },
  {
    id: 18,
    name: "Petrol Pipelines",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-10.38.16-1.jpeg",
  },
  {
    id: 19,
    name: "Rowad",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-10.38.16-2.jpeg",
  },
  {
    id: 20,
    name: "Orascom",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-10.38.16-3.jpeg",
  },
  {
    id: 21,
    name: "Alta'awn",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-17.24.10-1.jpeg",
  },
  {
    id: 22,
    name: "Suez Steel",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-17.24.10-2.jpeg",
  },
  {
    id: 23,
    name: "iffco",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-17.24.11.jpeg",
  },
  {
    id: 24,
    name: "Wady al nile",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-17.24.09.jpeg",
  },
  {
    id: 25,
    name: "EPROM",
    logo: "https://moccasin-albatross-577949.hostingersite.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-05-at-17.00.13.jpeg",
  },
];

export function PartnersSection({ lang }: { lang: string }) {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
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
                    <div className="absolute inset-0 bg-zinc-500 rounded-full opacity-5 transition-opacity duration-300 "></div>
                    <div className="absolute inset-0 border-2 border-blue-200/80 rounded-full shadow-sm "></div>
                    <div className="absolute -top-1 left-0 right-0 flex justify-center">
                      <div className="w-10 h-5 bg-blue-600/90 rounded-b-full shadow-md"></div>
                    </div>
                    <div className="absolute inset-0  flex items-center justify-center p-6 z-0">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="object-contain w-full h-full max-w-[85%] max-h-[100%] transition-all duration-300 group-hover:scale-110"
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
