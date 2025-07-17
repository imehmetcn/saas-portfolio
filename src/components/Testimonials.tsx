"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Star,
    Quote,
    ChevronLeft,
    ChevronRight,
    Users,
    ThumbsUp
} from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { testimonials } = useAdmin();

    const nextTestimonial = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-play
    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length, nextTestimonial]);

    const stats = [
        { number: "30+", label: "Mutlu Müşteri", icon: Users },
        { number: "98%", label: "Memnuniyet", icon: ThumbsUp },
        { number: "5.0", label: "Ortalama Puan", icon: Star }
    ];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                size={16}
                className={`${i < rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300 dark:text-gray-600'
                    }`}
            />
        ));
    };

    if (testimonials.length === 0) {
        return null;
    }

    return (
        <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Quote size={16} />
                        Müşteri Yorumları
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Müşterilerim Ne Diyor?
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Birlikte çalıştığım müşterilerimin deneyimleri ve geri bildirimleri
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-16">
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center bg-white dark:bg-gray-800 rounded-lg p-6"
                        >
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <stat.icon className="text-blue-600 dark:text-blue-400" size={24} />
                            </div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Main Testimonial */}
                <div className="relative">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                {/* Quote Icon */}
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Quote className="text-blue-600 dark:text-blue-400" size={32} />
                                </div>

                                {/* Rating */}
                                <div className="flex justify-center gap-1 mb-6">
                                    {renderStars(testimonials[currentIndex].rating)}
                                </div>

                                {/* Content */}
                                <blockquote className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
                                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center justify-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">
                                            {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div className="text-left">
                                        <div className="font-semibold text-gray-900 dark:text-white text-lg">
                                            {testimonials[currentIndex].name}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400">
                                            {testimonials[currentIndex].position} • {testimonials[currentIndex].company}
                                        </div>
                                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                            {new Date(testimonials[currentIndex].date).toLocaleDateString('tr-TR')}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            {/* Dots */}
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex
                                            ? 'bg-blue-600'
                                            : 'bg-gray-300 dark:bg-gray-600'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* All Testimonials Grid */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        Tüm Yorumlar
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {renderStars(testimonial.rating)}
                                </div>

                                {/* Content */}
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900 dark:text-white text-sm">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-gray-500 dark:text-gray-400 text-xs">
                                            {testimonial.position} • {testimonial.company}
                                        </div>
                                    </div>
                                </div>

                                {/* Date */}
                                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                                        {new Date(testimonial.date).toLocaleDateString('tr-TR')}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}