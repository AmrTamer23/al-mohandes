"use client";

import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useQuery } from "urql";
import HeroImage from "@/assets/hero.png";
import BuildingImage from "@/assets/building.avif"; // Make sure to add this image to your assets

import { ArrowRight, Building2, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HomePageQuery } from "@/queries/fetch-homepage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/_base/")({
  component: HomePage,
});

function HomePage() {
  const [{ data }] = useQuery({
    query: HomePageQuery,
    variables: {
      take: 1,
    },
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const { i18n } = useTranslation();

  const lang = i18n.language;
  const isRTL = lang === "ar";

  const homePage = data?.homePages?.[0];

  return (
    <div
      className="flex min-h-screen w-full flex-col"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <main className="flex-1">
        <section className="w-full -mt-6">
          <img src={HeroImage} alt="Hero" className="w-full" />
        </section>
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center ">
            <div className="space-y-8 text-right" dir="rtl">
              <Card className="border-2 border-blue-100 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-blue-800 ">
                    {lang === "ar"
                      ? homePage?.missionTitle_ar
                      : homePage?.missionTitle_en}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 leading-relaxed">
                  <p className="text-xl leading-loose">
                    {lang === "ar"
                      ? homePage?.missionDescription_ar
                      : homePage?.missionDescription_en}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-blue-800">
                    {lang === "ar"
                      ? homePage?.aboutUsTitle_ar
                      : homePage?.aboutUsTitle_en}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 leading-relaxed">
                  <p className="text-xl leading-loose">
                    {lang === "ar"
                      ? homePage?.aboutUsDescription_ar
                      : homePage?.aboutUsDescription_en}
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-800 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                  alt="Modern Building"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <Building2 className="w-12 h-12 text-blue-800" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
