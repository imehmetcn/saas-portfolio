"use client";

import { motion } from "framer-motion";
import { useAdmin } from "@/contexts/AdminContext";


export default function Footer() {
  const { footerData } = useAdmin();

  return (
    <footer className="relative py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">


      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ultra Minimal Content Section */}
        <div className="py-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 text-sm"
          >
            {footerData.copyright}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}