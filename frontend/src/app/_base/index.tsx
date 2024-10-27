import { useTranslation } from "react-i18next";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useQuery } from "urql";
import HeroImage from "@/assets/hero.png";

import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HomePageQuery } from "@/queries/fetch-homepage";

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

  console.log(data?.homePages?.[0]?.heroTitle_ar);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1">
        <section className="w-full -mt-6">
          <img src={HeroImage} alt="Hero" />
        </section>
        <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.h2
              className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              {...fadeInUp}
            >
              Our Services
            </motion.h2>
            <motion.div
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud Solutions",
                "Data Analytics",
                "Cybersecurity",
                "AI & Machine Learning",
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold">{service}</h3>
                </motion.div>
              ))}{" "}
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500">
          © 2024 Company Name. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <a className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </a>
          <a className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
