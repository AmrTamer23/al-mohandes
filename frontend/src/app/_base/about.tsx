"use client";

import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "urql";
import { Users, Target, Eye, Award, Building } from "lucide-react";

import { AboutPageQuery } from "@/queries/fetch-aboutpage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PartnersSection } from "@/components/home/partners";

export const Route = createFileRoute("/_base/about")({
  component: AboutPage,
});

function AboutPage() {
  const [{ data }] = useQuery({
    query: AboutPageQuery,
  });

  const { i18n } = useTranslation();

  const lang = i18n.language;

  const aboutCompany = data?.aboutCompanies?.[0];

  return (
    <main
      className="flex min-h-screen w-full flex-col pt-20"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold text-center text-blue-800 mb-12">
            {lang === "ar" ? aboutCompany?.title_ar : aboutCompany?.title_en}
          </h1>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Card className="border-2 border-blue-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-center font-bold text-blue-800 flex items-center justify-center gap-2">
                  <Users className="mr-2" />
                  <span>{lang === "ar" ? "من نحن" : "Who We Are"}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 leading-relaxed">
                <p className="text-xl leading-loose whitespace-pre-line">
                  {lang === "ar"
                    ? aboutCompany?.introduction_ar
                    : aboutCompany?.introduction_en}
                </p>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <Card className="border-2 border-blue-100 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl text-center font-bold text-blue-800 flex items-center justify-center gap-2">
                    <Eye className="mr-2" />
                    <span>{lang === "ar" ? "رؤيتنا" : "Our Vision"}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 leading-relaxed">
                  <p className="text-xl leading-loose whitespace-pre-line">
                    {lang === "ar"
                      ? aboutCompany?.vision_ar
                      : aboutCompany?.vision_en}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-blue-800">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070"
              alt=""
              className="w-full h-full object-cover object-center opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Building className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                {lang === "ar"
                  ? "بناء المستقبل معًا"
                  : "Building the Future Together"}
              </h2>
              <p className="text-xl text-blue-100">
                {lang === "ar"
                  ? "نحن نجمع بين الخبرة والابتكار لتقديم حلول بناء استثنائية تتجاوز توقعات عملائنا."
                  : "We combine expertise and innovation to deliver exceptional construction solutions that exceed our clients' expectations."}
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 space-y-4">
          <Card className="border-2 border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-center font-bold text-blue-800 flex items-center justify-center gap-2">
                <Target className="mr-2" />
                <span>{lang === "ar" ? "مهمتنا" : "Our Mission"}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 leading-relaxed">
              <p className="text-xl leading-loose">
                {lang === "ar"
                  ? aboutCompany?.mission_ar
                  : aboutCompany?.mission_en}
              </p>
            </CardContent>
          </Card>
          <Card className="border-2 border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-center font-bold text-blue-800 flex items-center justify-center">
                <Award className="mr-2" />
                {lang === "ar" ? "قيمنا الأساسية" : "Our Core Values"}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 leading-relaxed">
              <p className="text-xl leading-loose whitespace-pre-line">
                {lang === "ar"
                  ? aboutCompany?.coreValues_ar
                  : aboutCompany?.coreValues_en}
              </p>
            </CardContent>
          </Card>
        </section>
        <PartnersSection lang={lang} />
      </main>
    </main>
  );
}
