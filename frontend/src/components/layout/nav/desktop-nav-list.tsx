import { Link } from "@tanstack/react-router"

import { ListItem } from "@/components/ui/list-item"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function DesktopNavList({
  locale,
  item,
}: {
  locale: "en" | "ar"
  item: {
    title: string
    titleAR: string
  }
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg">
            <Link href={`/${locale}/services`}>
              {locale === "en" ? item.title : item.titleAR}
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid max-h-[85dvh] w-[400px] gap-3 overflow-y-auto p-4 md:w-[500px] md:grid-cols-2 lg:w-[35dvw]">
              <li className="md:col-span-2">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex w-full select-none flex-col justify-end rounded-md bg-red-900 bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none hover:bg-gray-600 focus:shadow-md"
                    href={`/${locale}/services`}
                  >
                    <div className="mb-2 flex gap-2 text-lg font-medium">
                      {locale === "en" ? "All Services" : "جميع الخدمات"}
                      <p>&#11166;</p>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {locale === "en"
                        ? "Explore all our services"
                        : "استكشف جميع خدماتنا"}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <h3 className="mb-2 text-lg font-semibold">
                  {locale === "en" ? "Branding" : "العلامة التجارية"}
                </h3>
                <ul>
                  <ListItem
                    href={`/${locale}/services/personalBranding`}
                    title={
                      locale === "en"
                        ? "Personal Branding"
                        : "العلامة التجارية الشخصية"
                    }
                  />
                  <ListItem
                    href={`/${locale}/services/brandDesign`}
                    title={
                      locale === "en"
                        ? "Brand Design"
                        : "تصميم العلامة التجارية"
                    }
                  />
                  <ListItem
                    href={`/${locale}/services/brandStrategy`}
                    title={
                      locale === "en"
                        ? "Brand Strategy"
                        : "استراتيجية العلامة التجارية"
                    }
                  />
                  <ListItem
                    href={`/${locale}/services/brandCommunications`}
                    title={
                      locale === "en"
                        ? "Brand Communications"
                        : "اتصالات العلامة التجارية"
                    }
                  />
                  <ListItem
                    href={`/${locale}/services/brandGuidelines`}
                    title={
                      locale === "en"
                        ? "Brand Guidelines"
                        : "إرشادات العلامة التجارية"
                    }
                  />
                  <ListItem
                    href={`/${locale}/services/brandOnboarding`}
                    title={
                      locale === "en"
                        ? "Brand Onboarding"
                        : "تأهيل العلامة التجارية"
                    }
                  />
                </ul>
              </li>
              <li>
                <h3 className="mb-2 text-lg font-semibold">
                  {locale === "en" ? "Digital" : "الرقمية"}
                </h3>
                <ul>
                  <ListItem
                    href={`/${locale}/services/website-design-development`}
                    title={
                      locale === "en"
                        ? "Website Design & Development"
                        : "تصميم وتطوير المواقع"
                    }
                  />
                  <ListItem
                    href={`/${locale}/services/mobile-design-development`}
                    title={
                      locale === "en"
                        ? "Mobile Apps Design & Development"
                        : "تصميم وتطوير تطبيقات الجوال"
                    }
                  />
                  <ListItem
                    href={`/${locale}/services/ui-ux-design`}
                    title={
                      locale === "en"
                        ? "UI & UX Design"
                        : "تصميم واجهة وتجربة المستخدم"
                    }
                  />
                  <ListItem
                    href={`/${locale}/services/ecommerce-website-design`}
                    title={
                      locale === "en"
                        ? "Ecommerce Website Design"
                        : "تصميم مواقع التجارة الإلكترونية"
                    }
                  />
                </ul>
              </li>
              <li>
                <h3 className="mb-2 text-lg font-semibold">
                  {locale === "en" ? "Marketing" : "التسويق"}
                </h3>
                <ul>
                  <ListItem
                    href={`/${locale}/services/social-media-marketing`}
                    title={
                      locale === "en"
                        ? "Social Media Marketing"
                        : "التسويق عبر وسائل التواصل الاجتماعي"
                    }
                  />
                  <ListItem
                    href={`/${locale}/services/seo`}
                    title={locale === "en" ? "SEO" : "تحسين محركات البحث"}
                  />
                  <ListItem
                    href={`/${locale}/services/media-buying`}
                    title={locale === "en" ? "Media Buying" : "شراء الوسائط"}
                  />
                  <ListItem
                    href={`/${locale}/services/campaigns`}
                    title={locale === "en" ? "Campaigns" : "الحملات"}
                  />
                </ul>
              </li>
              <li>
                <h3 className="mb-2 text-lg font-semibold">
                  {locale === "en" ? "Creative" : "الإبداعية"}
                </h3>
                <ul>
                  <ListItem
                    href={`/${locale}/services/photography`}
                    title={
                      locale === "en" ? "Photography" : "التصوير الفوتوغرافي"
                    }
                  />
                  <ListItem
                    href={`/${locale}/services/videography`}
                    title={
                      locale === "en" ? "Videography" : "التصوير الفيديوغرافي"
                    }
                  />
                  <ListItem
                    href={`/${locale}/services/motion-video`}
                    title={
                      locale === "en" ? "Motion Videos" : "الفيديوهات المتحركة"
                    }
                  />
                  <ListItem
                    href={`/${locale}/services/3d-animation`}
                    title={
                      locale === "en"
                        ? "3D Animation"
                        : "الرسوم المتحركة ثلاثية الأبعاد"
                    }
                  />
                </ul>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
