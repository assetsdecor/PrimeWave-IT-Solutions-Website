"use client";

import Hero from "@/components/home/hero";
import AboutWithProgress from "@/components/home/about-with-progress";
import ServicesSummary from "@/components/home/services-summary";
import ProductMarketplacePreview from "@/components/home/product-marketplace-preview";
import PricingTiers from "@/components/home/pricing-tiers";
import Testimonials from "@/components/home/testimonials";
import TeamOverview from "@/components/home/team-overview";
import WhyChooseUs from "@/components/home/why-choose-us";
import Portfolio from "@/components/home/portfolio";
import FAQ from "@/components/home/faq";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import TopHeader from "@/components/layout/top-header";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopHeader />
      <Navigation />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <ServicesSummary />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <AboutWithProgress />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <ProductMarketplacePreview />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <PricingTiers />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Testimonials />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <TeamOverview />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <WhyChooseUs />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Portfolio />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <FAQ />
      </motion.div>
      <Footer />
    </main>
  );
}



