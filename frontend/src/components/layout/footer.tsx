import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "@/assets/logo.png";

export function Footer() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <footer className="bg-[#2B579A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <div className="text-center md:text-right">
            <h3 className="text-2xl mb-4" dir="rtl">
              للتواصل معنا
            </h3>
            <div className="space-y-3" dir="rtl">
              <div className="flex items-center  gap-2">
                <span>برج الأبراج - طريق الملك - المنصورة - مصر</span>
                <MapPin className="h-5 w-5 flex-shrink-0" />
              </div>
              <div className="flex items-center  gap-2">
                <span>+20 123 456 7890</span>
                <Phone className="h-5 w-5 flex-shrink-0" />
              </div>
              <div className="flex items-center  gap-2">
                <span>info@example.com</span>
                <Mail className="h-5 w-5 flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* Power Icon */}
          <div className="flex flex-col gap-8 justify-center items-center flex-1">
            <div className="flex items-center ">
              <a href="#">
                <Twitter className="h-10 w-10" />
              </a>
              <a href="#">
                <Facebook className="h-10 w-10" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-2xl mb-4" dir="rtl">
              {lang === "ar" ? "ماذا تريد؟" : "What do you want to know?"}
            </h3>
            <ul className="flex flex-col gap-4 *:~text-base/lg">
              <li>
                <Link to="/about">{lang === "ar" ? "من نحن" : "About Us"}</Link>
              </li>
              <li>
                <Link to="/services">
                  {lang === "ar" ? "خدماتنا" : "Our Services"}
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  {lang === "ar" ? "تواصل معنا" : "Contact Us"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-sm opacity-75">
          <p dir="rtl">جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
