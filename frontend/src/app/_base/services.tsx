"use client";

import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "urql";
import { Image as ImageIcon } from "lucide-react";

import { OurServicesPageQuery } from "@/queries/fetch-ourservicespage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_base/services")({
  component: OurServicesPage,
});

function OurServicesPage() {
  const [{ data }] = useQuery<{
    ourServicesPages: Array<{
      ourServicesTitle_ar: string;
      ourServicesTitle_en: string;
      ourServicesDesc_ar?: string;
      ourServicesDesc_en?: string;
      services: Array<{
        title_ar: string;
        title_en: string;
        description_ar?: string;
        description_en?: string;
        imageUrl?: string;
      }>;
    }>;
  }>({
    query: OurServicesPageQuery,
    variables: {
      take: 1,
    },
  });

  const { i18n, t } = useTranslation();

  const lang = i18n.language;

  const ourServicesPage = data?.ourServicesPages?.[0];

  return (
    <main
      className="flex min-h-screen w-full flex-col pt-20"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center text-blue-800 mb-12">
          {lang === "ar"
            ? ourServicesPage?.ourServicesTitle_ar
            : ourServicesPage?.ourServicesTitle_en}
        </h1>
        {ourServicesPage?.ourServicesDesc_ar ||
        ourServicesPage?.ourServicesDesc_en ? (
          <p className="text-xl text-center text-gray-600 mb-12">
            {lang === "ar"
              ? ourServicesPage?.ourServicesDesc_ar
              : ourServicesPage?.ourServicesDesc_en}
          </p>
        ) : null}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourServicesPage?.services
            .sort((a, b) => a.title_ar.length - b.title_ar.length)

            .map((service, index) => (
              <Card
                key={index}
                className="border-2 border-blue-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video relative">
                  {service.imageUrl ? (
                    <img
                      src={service.imageUrl}
                      alt={
                        lang === "ar"
                          ? service.title_ar
                          : service.title_en !== "null"
                            ? service.title_en
                            : service.title_ar
                      }
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <ImageIcon className="w-20 h-20 text-gray-300" />
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-center font-bold text-blue-800 flex items-center justify-center gap-3">
                    {/* <Wrench className="w-6 h-6" /> */}
                    {lang === "ar"
                      ? service.title_ar
                      : service.title_en !== "null"
                        ? service.title_en
                        : service.title_ar}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 leading-relaxed">
                  {(service.description_ar || service.description_en) && (
                    <p className="text-lg mb-6">
                      {lang === "ar"
                        ? service.description_ar
                        : service.description_en || service.description_ar}
                    </p>
                  )}
                  <Button className="w-full text-lg py-6">
                    {lang === "ar" ? "اعرف المزيد" : t("Learn More")}
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
    </main>
  );
}
