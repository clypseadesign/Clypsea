"use client";

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AuraMarketingCaseStudy() {
    return (
        <div className="min-h-screen bg-background text-foreground font-body py-32 flex flex-col items-center justify-start overflow-x-hidden w-full">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image side */}
                <div className="relative w-full aspect-square hidden lg:block lg:order-2 lg:ml-8">
                    <div className="absolute top-0 right-0 w-3/4 h-[110%] rounded-3xl overflow-hidden border border-border shadow-2xl z-20">
                        <div className="absolute inset-0 bg-accent/10 z-10 mix-blend-overlay"></div>
                        <Image
                            src="/images/cases/aura-marketing/phone.png"
                            alt="Person typing on smartphone"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="absolute bottom-[-10%] left-0 w-[75%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border z-30">
                        <div className="absolute inset-0 bg-accent/10 z-10 mix-blend-overlay"></div>
                        <Image
                            src="/images/cases/aura-marketing/gaming.png"
                            alt="People playing mobile games on sofa"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Content side */}
                <div className="flex flex-col relative z-20 w-full lg:order-1">
                    {/* Title above the card */}
                    <div className="mb-8 flex flex-col items-start w-full text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase font-heading tracking-tight text-foreground leading-[1.1] w-full text-left">
                            Why <br className="hidden md:block" /> <span className="text-accent">Video Marketing?</span>
                        </h1>
                    </div>

                    {/* Card */}
                    <div className="bg-surface rounded-3xl p-8 md:p-12 border border-border w-full relative group shadow-2xl text-left">
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

                        {/* Indent title to match text below */}
                        <h2 className="text-lg md:text-xl mb-10 font-bold font-heading uppercase text-foreground/90 tracking-widest text-left">
                            Here's why 2025 calls for Video <br /> Marketing
                        </h2>

                        <ul className="space-y-8 text-foreground/80 text-base md:text-lg relative w-full">
                            <li className="flex items-start gap-6">
                                <div className="bg-accent/20 border border-accent flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5">
                                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="flex-1"><span className="font-bold text-accent">85%</span> of content available online is video</p>
                            </li>
                            <li className="flex items-start gap-6">
                                <div className="bg-accent/20 border border-accent flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5">
                                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="flex-1"><span className="font-bold text-accent">86%</span> of businesses use video as a marketing tool</p>
                            </li>
                            <li className="flex items-start gap-6">
                                <div className="bg-accent/20 border border-accent flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5">
                                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="flex-1"><span className="font-bold text-accent">88%</span> of marketers report positive ROI from video marketing</p>
                            </li>
                            <li className="flex items-start gap-6">
                                <div className="bg-accent/20 border border-accent flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5">
                                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="flex-1"><span className="font-bold text-accent">84%</span> of consumers have convinced to buy after watching a brand's video</p>
                            </li>
                            <li className="flex items-start gap-6">
                                <div className="bg-accent/20 border border-accent flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5">
                                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="flex-1">Video content generates <span className="font-bold text-accent">1200%</span> more shares than text and images combined</p>
                            </li>
                        </ul>

                        <p className="mt-14 text-xs uppercase tracking-widest text-right font-bold text-muted w-full border-t border-border pt-6">
                            Source: Wyzowl State of Video Marketing Report 2024
                        </p>
                    </div>
                </div>
            </div>

            {/* 1. Services that we offer (Video) */}
            <div className="max-w-7xl w-full mx-auto px-6 mt-32">
                <div className="mb-12 flex flex-col items-start text-left">
                    <h2 className="text-4xl md:text-5xl font-black uppercase font-heading tracking-tight text-foreground leading-[1.2]">
                        Services That <br /> <span className="bg-accent/10 border border-accent text-accent px-6 py-2 rounded-full inline-block mt-4">We Offer</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-surface p-12 rounded-[3rem] border border-border relative">
                    <div className="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-[3rem] pointer-events-none"></div>

                    {/* Column 1 */}
                    <div className="flex flex-col gap-8">
                        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border">
                            <Image src="/images/cases/aura-marketing/video_prod.png" alt="Video Production" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-heading uppercase text-accent mb-6">Video Production Solutions</h3>
                            <ul className="space-y-4 text-foreground/80 list-disc list-inside marker:text-accent">
                                <li>Short Form Videos (Reels & Shorts)</li>
                                <li>Long Form Videos (YouTube)</li>
                                <li>Product Films</li>
                                <li>Ad Films</li>
                                <li>Corporate Films</li>
                                <li>Podcasts</li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-8">
                        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border">
                            <Image src="/images/cases/aura-marketing/video_market.png" alt="Video Marketing" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-heading uppercase text-accent mb-6">Video Marketing Solutions</h3>
                            <ul className="space-y-4 text-foreground/80 list-disc list-inside marker:text-accent">
                                <li>Content Strategy & Ideation</li>
                                <li>Advertisement Strategy</li>
                                <li>Influencer Collaboration & Marketing</li>
                                <li>Video Marketing Campaigns</li>
                                <li>Creative Brand campaigns</li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-8">
                        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border">
                            <Image src="/images/cases/aura-marketing/post_prod.png" alt="Post Production" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-heading uppercase text-accent mb-6">Post-Production Solutions</h3>
                            <ul className="space-y-4 text-foreground/80 list-disc list-inside marker:text-accent">
                                <li>Short Form Video Editing</li>
                                <li>Long Form Video Editing</li>
                                <li>Motion Graphics</li>
                                <li>Podcast Editing</li>
                                <li>Sound Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Our Strategic Approach */}
            <div className="max-w-7xl w-full mx-auto px-6 mt-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-border z-10 lg:order-1 order-2">
                    <div className="absolute inset-0 bg-accent/10 z-10 mix-blend-overlay"></div>
                    <Image src="/images/cases/aura-marketing/strategic.png" alt="Strategic Approach" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>

                <div className="flex flex-col gap-8 lg:order-2 order-1 relative w-full">
                    <div className="absolute -left-32 -bottom-32 w-full h-[150%] bg-surface rounded-[4rem] border border-border -z-10 shadow-xl hidden lg:block"></div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase font-heading tracking-tight text-foreground leading-[1.2]">
                        Our Strategic <br /> <span className="bg-accent/10 border border-accent text-accent px-6 py-2 rounded-full inline-block mt-4 text-wrap text-left w-fit max-w-full">Approach</span>
                    </h2>

                    <ul className="space-y-10 mt-8">
                        {[
                            { title: "Creative Excellence", desc: "High-quality video production that captures your brand essence." },
                            { title: "Strategy First", desc: "Data-driven content planning aligned with your business goals." },
                            { title: "Performance Monitoring", desc: "Continuous monitoring and refinement for maximum ROI." },
                            { title: "Innovative Ideas", desc: "Ideas that stop the scroll & make heads roll!" },
                            { title: "A Fun Team", desc: "Our team can make content creation for your brand super fun!" }
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-6">
                                <div className="bg-accent/20 border border-accent flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-heading text-accent mb-2 uppercase">{item.title}</h4>
                                    <p className="text-foreground/70">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* 3. Services that we offer (SEM / SEO) */}
            <div className="max-w-7xl w-full mx-auto px-6 mt-32">
                <div className="mb-12 flex flex-col items-start text-left">
                    <h2 className="text-4xl md:text-5xl font-black uppercase font-heading tracking-tight text-foreground leading-[1.2]">
                        Services That <br /> <span className="bg-accent/10 border border-accent text-accent px-6 py-2 rounded-full inline-block mt-4">We Offer</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* SEM Box */}
                    <div className="bg-surface rounded-3xl p-12 border border-border relative hover:border-accent transition-colors shadow-2xl">
                        <h3 className="text-2xl font-bold font-heading text-accent mb-4 uppercase">SEM (Search Engine Marketing)</h3>
                        <p className="text-foreground/70 mb-2">Get instant visibility with paid ads.</p>
                        <p className="text-foreground/70 mb-10">Reach your audience fast through smart ad campaigns that convert.</p>

                        <h4 className="text-xl font-bold font-heading text-foreground mb-6 uppercase">Key Services</h4>
                        <ul className="space-y-3 text-foreground/80 list-disc list-inside marker:text-accent mb-12">
                            <li>PPC Campaigns (Google Ads & Bing Ads)</li>
                            <li>Ad Copy & Design</li>
                            <li>Bid Management</li>
                            <li>Paid Keyword Targeting</li>
                            <li>Landing Page Optimization</li>
                            <li>A/B Testing</li>
                        </ul>

                        <p className="text-sm font-bold text-muted border-t border-border pt-6 uppercase tracking-widest text-center">
                            Powered by Google Ads — reach customers at the right moment!
                        </p>
                    </div>

                    {/* SEO Box */}
                    <div className="bg-surface rounded-3xl p-12 border border-border relative hover:border-accent transition-colors shadow-2xl">
                        <h3 className="text-2xl font-bold font-heading text-accent mb-4 uppercase">SEO (Search Engine Optimization)</h3>
                        <p className="text-foreground/70 mb-2">Grow your visibility organically.</p>
                        <p className="text-foreground/70 mb-10">We help your website rank higher and attract the right audience — without paying for every click.</p>

                        <h4 className="text-xl font-bold font-heading text-foreground mb-6 uppercase">Key Services</h4>
                        <ul className="space-y-5 text-foreground/80">
                            <li>
                                <span className="text-accent font-bold">• Keyword Research:</span><br />
                                <span className="pl-4 block opacity-70">Find what your customers are searching for.</span>
                            </li>
                            <li>
                                <span className="text-accent font-bold">• On-Page SEO:</span><br />
                                <span className="pl-4 block opacity-70">Optimize titles, meta tags. and content.</span>
                            </li>
                            <li>
                                <span className="text-accent font-bold">• Technical SEO:</span><br />
                                <span className="pl-4 block opacity-70">Improve speed, structure & mobile performance.</span>
                            </li>
                            <li>
                                <span className="text-accent font-bold">• Content Strategy:</span><br />
                                <span className="pl-4 block opacity-70">Create engaging blogs, articles & videos.</span>
                            </li>
                            <li>
                                <span className="text-accent font-bold">• Link Building:</span><br />
                                <span className="pl-4 block opacity-70">Gain trusted backlinks for better authority.</span>
                            </li>
                            <li>
                                <span className="text-accent font-bold">• Analytics:</span><br />
                                <span className="pl-4 block opacity-70">Track performance and growth.</span>
                            </li>
                        </ul>

                        <p className="text-sm font-bold text-muted border-t border-border pt-6 mt-12 uppercase tracking-widest text-center">
                            certified Google Ads Management — Reach more customers faster.
                        </p>
                    </div>
                </div>

                <p className="text-center text-foreground/70 font-medium mt-16 max-w-3xl mx-auto border-t border-border pt-8">
                    <strong className="text-accent">Our Goal:</strong> To help your business rank higher, reach faster, and convert better — combining the power of organic SEO and paid SEM.
                </p>
            </div>

            {/* 4. Our current Clientele */}
            <div className="max-w-7xl w-full mx-auto px-6 mt-32 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-center">
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl md:text-5xl font-black uppercase font-heading tracking-tight text-foreground leading-[1.2]">
                        Our <br /> Current <br /> <span className="bg-accent/10 border border-accent text-accent px-6 py-2 rounded-full inline-block mt-4 text-wrap text-left w-fit max-w-full">Clientele</span>
                    </h2>
                    <p className="text-xl text-foreground/70 mt-8 max-w-sm leading-relaxed">
                        Here are our awesome clients—<br />
                        and we can't wait to see your brand's logo up here too!
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-16 lg:pt-0">
                    {[
                        { img: "/images/cases/aura-marketing/clients/client1_new_v2.jpg", name: "Thiru Kumaran Agency" },
                        { img: "/images/cases/aura-marketing/clients/client2_new_v2.png", name: "Hunter Equipment" },
                        { img: "/images/cases/aura-marketing/clients/client3_new_v2.jpg", name: "Casperskey" },
                        { img: "/images/cases/aura-marketing/clients/client4_new_v2.png", name: "The Great Escape" }
                    ].map((client, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-6 w-full max-w-xs mx-auto">
                            <div className="w-64 h-64 rounded-full bg-white/5 border border-border flex items-center justify-center group hover:border-accent transition-colors cursor-pointer relative overflow-hidden flex-shrink-0 shadow-2xl">
                                <div className="z-10 text-center w-full h-full relative">
                                    <Image
                                        src={client.img}
                                        alt={client.name}
                                        fill
                                        quality={100}
                                        className={`group-hover:scale-110 transition-transform duration-500 ${client.name === "Casperskey" ? "object-contain bg-white p-4" : "object-cover"}`}
                                    />
                                </div>
                                <div className="absolute inset-2 rounded-full border border-dashed border-border/50 group-hover:border-accent/40 transition-colors duration-500 pointer-events-none z-20"></div>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <h3 className="font-heading font-black text-xl uppercase tracking-wider text-center group-hover:text-accent transition-colors">
                                    {client.name}
                                </h3>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>

            {/* 5. Case Study 1 Overlay */}
            <div className="max-w-7xl w-full mx-auto px-6 mt-32">
                <div className="bg-surface rounded-3xl p-8 md:p-12 lg:p-20 border border-border relative shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
                    <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col gap-6 w-full">
                        <h2 className="text-xl md:text-2xl font-heading text-foreground uppercase tracking-widest opacity-70">
                            Case Study – 1
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-black font-heading uppercase text-accent leading-tight break-words">
                            200x Sales for D2C <br /> Saree Brand
                        </h3>
                        <div className="mt-8">
                            <h4 className="text-2xl font-bold font-heading text-foreground mb-4 uppercase italic">Mali Srinath Collections</h4>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                In July 2024, when Mrs. Srividhya approached us to grow her D2C saree brand online, our research showed her audience was most active on YouTube. We created simple, shop-like videos with continuous saree commentary to mimic an in-store experience. This strategy grew her channel from 500 to 6,000 subscribers in just eight months — all organically.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6 z-20 w-full pt-8 lg:pt-0">
                        <div className="relative w-full aspect-[16/9] shadow-2xl rounded-2xl overflow-hidden border border-border group bg-black/50">
                            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                            <div className="relative w-full h-full">
                                <Image src="/images/cases/aura-marketing/analytics_new.png" alt="YouTube Analytics" fill className="object-contain p-2" />
                            </div>
                        </div>
                        {/* Callout pill */}
                        <div className="bg-accent text-background px-8 py-4 rounded-full shadow-2xl font-bold font-heading uppercase tracking-widest text-sm md:text-base italic text-center w-full max-w-md mt-2">
                            Analytics from July 2024 to Present Day
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. Case Study 2 Overlay */}
            <div className="max-w-7xl w-full mx-auto px-6 mt-32">
                <div className="bg-surface rounded-3xl p-8 md:p-12 lg:p-20 border border-border relative shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-center">
                    <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col gap-6 w-full lg:order-1 order-2">
                        <h2 className="text-xl md:text-2xl font-heading text-foreground uppercase tracking-widest opacity-70">
                            Case Study – 2
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-black font-heading uppercase text-accent leading-tight break-words">
                            2x Walk-ins for 40 <br /> year old Eye Hospital
                        </h3>
                        <div className="mt-8">
                            <h4 className="text-2xl font-bold font-heading text-foreground mb-4 uppercase italic">M.N. Eye Hospitals Pvt. Ltd</h4>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                With 40 years of strong word-of-mouth in North and South Chennai, M.N. Eye Hospitals had minimal online presence when they approached us. We implemented a video-first strategy featuring doctors answering FAQs and ran targeted ads — resulting in 2x walk-ins and a significant rise in Cataract & LASIK surgery leads. Also organically we grew their follower count from 900+ to 3000.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full aspect-[4/3] z-20 lg:order-2 order-1 shadow-2xl rounded-2xl overflow-hidden border border-border group bg-black/50 p-6 flex flex-col justify-center">
                        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                        <div className="grid grid-cols-2 gap-4 relative w-full h-full">
                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border border-border/30">
                                <Image src="/images/cases/aura-marketing/cs3_img1_new.png" alt="Instagram Follower Growth 1" fill className="object-contain bg-black/40" />
                            </div>
                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border border-border/30">
                                <Image src="/images/cases/aura-marketing/cs3_img2_new.png" alt="Instagram Follower Growth 2" fill className="object-contain bg-black/40" />
                            </div>
                        </div>
                        {/* Callout pill */}
                        <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-sm text-foreground px-6 py-3 rounded-2xl shadow-2xl border border-border z-30 font-bold uppercase tracking-widest text-sm text-center">
                            Follower Count <br /> <span className="text-accent italic">From scratch</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7. Service Packages */}
            <div className="max-w-[1400px] w-full mx-auto px-6 mt-40">
                <div className="mb-16 flex items-center justify-start gap-6">
                    <h2 className="text-4xl md:text-6xl font-black uppercase font-heading tracking-tight text-foreground">
                        Service
                    </h2>
                    <span className="bg-surface border border-accent/30 text-accent/80 px-8 py-3 rounded-xl shadow-lg text-4xl md:text-5xl font-black uppercase font-heading">
                        Packages
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {[
                        { title: "Starter", subtitle: "Perfect for business that are looking to dip their toes into social media without breaking their budget", price: "₹32,000", features: ["Up to 8 Reels/Shorts", "Up to 6 Static Posts Up to 8 Stories", "2 YouTube Video (up to 8mins)", "Content & Ad strategy", "Profile Optimization", "Monthly Report"] },
                        { title: "Basic", subtitle: "Perfect for small businesses, restaurants, boutiques, and service providers looking to grow organically", price: "₹42,000", features: ["Up to 12 Reels/Shorts", "Up to 8 Static Posts", "Up to 12 Stories", "4 YouTube Video (up to 10mins)", "Content & Ad strategy", "Profile Optimization", "Monthly Report"] },
                        { title: "Growth", subtitle: "Best for mid-sized brands, e-commerce stores, and businesses launching new products/services.", price: "₹57,000", features: ["Up to 16 Reels/Shorts", "Up to 10 Static Posts", "Up to 16 Stories", "6 YouTube Video (up to 10mins)", "Content & Ad strategy", "Profile Optimization", "Monthly Report"] },
                        { title: "Domination", subtitle: "Best for established creators, coaches, and influencers who want to scale up", price: "₹82,000", features: ["Up to 24 Reels/Shorts", "Up to 12 Static Posts", "Up to 24 Stories", "8 YouTube Video (up to 10mins)", "Content & Ad strategy", "Profile Optimization", "Monthly Report", "LinkedIn Posting", "Twitter Posting"] }
                    ].map((pkg, idx) => (
                        <div key={idx} className="bg-[#1c1c1c] rounded-3xl p-8 border border-border/40 relative shadow-2xl flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>

                            <h3 className="text-3xl font-heading font-black text-center text-accent mb-4 uppercase">{pkg.title}</h3>
                            <p className="text-foreground/70 text-sm text-center mb-8 italic min-h-[80px]">{pkg.subtitle}</p>

                            <div className="text-center mb-10">
                                <span className="text-4xl lg:text-5xl font-black text-foreground">{pkg.price}</span>
                            </div>

                            <ul className="space-y-4 text-foreground/80 flex-grow">
                                {pkg.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex flex-start gap-3 items-start">
                                        <span className="text-accent mt-1">•</span>
                                        <span className="text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <p className="text-center text-foreground/60 font-medium mt-16 mt-12 mb-8 uppercase tracking-widest text-sm">
                    All package prices are on monthly retainer basis and are non-negotiable.
                </p>
            </div>

            {/* 8. Case Study 3 Overlay */}
            <div className="max-w-7xl w-full mx-auto px-6 mt-32">
                <div className="bg-surface rounded-3xl p-8 md:p-12 lg:p-20 border border-border relative shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
                    <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col gap-6 w-full">
                        <h2 className="text-xl md:text-2xl font-heading text-foreground uppercase tracking-widest opacity-70">
                            Case Study – 3
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-black font-heading uppercase text-accent leading-tight break-words">
                            2x Student Leads <br /> For Study Abroad <br /> Firm
                        </h3>
                        <div className="mt-8">
                            <h4 className="text-2xl font-bold font-heading text-foreground mb-4 uppercase italic">First Academy</h4>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                Despite 24 years of excellence and helping over 60,000 students achieve their study abroad goals, First Academy had a limited digital presence. When they partnered with us, we designed a customized video marketing campaign featuring engaging reels and targeted ads. This not only grew their Instagram following from 4,000 to 10,500+ but also doubled their student leads for SAT, IELTS, and university counselling services.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full aspect-[4/3] lg:scale-110 lg:translate-x-8 z-20">
                        <div className="rounded-2xl overflow-hidden border border-border/50 bg-surface shadow-[0_0_30px_rgba(214,255,0,0.1)] relative w-full h-[320px] max-w-lg mx-auto xl:mr-0 grid grid-cols-2 gap-4 p-4">
                            <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/40">
                                <Image src="/images/cases/aura-marketing/cs2_img2_new.png" alt="First Academy Analytics 2" fill className="object-contain" />
                            </div>
                            <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/40">
                                <Image src="/images/cases/aura-marketing/cs2_img1_new.png" alt="First Academy Analytics 1" fill className="object-contain" />
                            </div>
                        </div>
                        {/* Callout pill */}
                        <div className="absolute top-1/2 -left-6 lg:-left-12 bg-surface/90 backdrop-blur-sm text-foreground px-6 py-3 rounded-2xl shadow-2xl border border-border z-30 font-bold uppercase tracking-widest text-sm text-center -translate-y-1/2">
                            Follower Count <br /> <span className="text-accent italic">From scratch</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 9. Add-on Packages (Platforms) */}
            <div className="max-w-[1400px] w-full mx-auto px-6 mt-40">
                <div className="mb-16 flex items-center justify-start gap-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase font-heading tracking-tight text-foreground">
                        Add-on
                    </h2>
                    <span className="bg-surface border border-accent/30 text-accent/80 px-8 py-3 rounded-xl shadow-lg text-4xl md:text-5xl font-black uppercase font-heading">
                        Packages
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
                    {/* LinkedIn */}
                    <div className="bg-[#1c1c1c] rounded-3xl p-8 md:p-10 border border-border/40 relative shadow-2xl flex flex-col hover:border-accent/50 transition-colors duration-300">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-heading font-black text-foreground mb-4 uppercase">LinkedIn Package</h3>
                            <span className="text-4xl font-black text-accent block">₹9,000</span>
                            <span className="text-xs text-foreground/50 italic mt-2 block">(Rates are on per month basis)</span>
                        </div>
                        <ul className="space-y-4 text-foreground/80 text-sm font-medium">
                            <li className="flex gap-3"><span className="text-accent">•</span> 4 Business-oriented posts (industry insights, Case studies)</li>
                            <li className="flex gap-3"><span className="text-accent">•</span> Repurposing Instagram content as per necessity</li>
                            <li className="flex gap-3"><span className="text-accent">•</span> Profile & company page optimization</li>
                            <li className="flex gap-3"><span className="text-accent">•</span> Job Postings Copy</li>
                            <li className="flex gap-3"><span className="text-accent">•</span> Milestones, Season's Greetings</li>
                        </ul>
                    </div>

                    {/* Twitter */}
                    <div className="bg-[#1c1c1c] rounded-3xl p-8 md:p-10 border border-border/40 relative shadow-2xl flex flex-col hover:border-accent/50 transition-colors duration-300">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-heading font-black text-foreground mb-4 uppercase">Twitter Package</h3>
                            <span className="text-4xl font-black text-accent block">₹11,000</span>
                            <span className="text-xs text-foreground/50 italic mt-2 block">(Rates are on per month basis)</span>
                        </div>
                        <ul className="space-y-4 text-foreground/80 text-sm font-medium">
                            <li className="flex gap-3"><span className="text-accent">•</span> 2 Tweets per day (threads, engagement polls)</li>
                            <li className="flex gap-3"><span className="text-accent">•</span> Repurposing Instagram content as per necessity</li>
                            <li className="flex gap-3"><span className="text-accent">•</span> Industry trend-based strategy that are applicable to the platform</li>
                        </ul>
                    </div>

                    {/* Influencer Marketing */}
                    <div className="bg-[#1c1c1c] rounded-3xl p-8 md:p-10 border border-border/40 relative shadow-2xl flex flex-col hover:border-accent/50 transition-colors duration-300">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-heading font-black text-foreground mb-4 uppercase">Influencer Marketing</h3>
                            <span className="text-4xl font-black text-accent block">15%</span>
                            <span className="text-xs text-foreground/50 italic mt-2 block">(agency fee on Influencer rate)</span>
                        </div>
                        <ul className="space-y-4 text-foreground/80 text-sm font-medium">
                            <li className="flex gap-3"><span className="text-accent">•</span> Influencer research</li>
                            <li className="flex gap-3"><span className="text-accent">•</span> Influencer collaboration & Mediation</li>
                            <li className="flex gap-3"><span className="text-accent">•</span> Ideation & Posting</li>
                            <li className="flex gap-3"><span className="text-accent">•</span> This is charged per influencer</li>
                        </ul>
                    </div>

                    {/* Paid Ads */}
                    <div className="bg-[#1c1c1c] rounded-3xl p-8 md:p-10 border border-border/40 relative shadow-2xl flex flex-col hover:border-accent/50 transition-colors duration-300">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-heading font-black text-foreground mb-4 uppercase">Paid Ads Package</h3>
                            <span className="text-4xl font-black text-accent block">₹11,000</span>
                            <span className="text-xs text-foreground/50 italic mt-2 block">(Rates are on per month basis)</span>
                        </div>
                        <ul className="space-y-4 text-foreground/80 text-sm font-medium flex-grow">
                            <li className="flex gap-3"><span className="text-accent">•</span> Meta & YouTube ad Strategy</li>
                            <li className="flex gap-3"><span className="text-accent">•</span> 5 Ad Creatives (Video + Static)</li>
                            <li className="flex gap-3"><span className="text-accent">•</span> Ad optimization & Analysis</li>
                        </ul>
                        <p className="mt-8 text-sm italic text-foreground/60 font-medium text-center border-t border-border/40 pt-6 uppercase tracking-wider">
                            The charges are exclusive of ad budgets
                        </p>
                    </div>
                </div>
            </div>

            {/* 10. Add-on Packages (Content) */}
            <div className="max-w-[1400px] w-full mx-auto px-6 mt-32 mb-40">
                <div className="mb-16 flex items-center justify-start gap-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase font-heading tracking-tight text-foreground">
                        Add-on
                    </h2>
                    <span className="bg-surface border border-accent/30 text-accent/80 px-8 py-3 rounded-xl shadow-lg text-4xl md:text-5xl font-black uppercase font-heading">
                        Packages
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
                    {/* Short Form Content */}
                    <div className="bg-[#1c1c1c] rounded-3xl p-8 md:p-10 border border-border/40 relative shadow-2xl flex flex-col hover:border-accent/50 transition-colors duration-300">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-heading font-black text-accent mb-4 uppercase">Short Form Content</h3>
                            <span className="text-xs text-foreground/50 italic block">(Rates are on per video basis)</span>
                        </div>
                        <ul className="space-y-4 text-foreground/80 text-sm font-medium flex-grow">
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Reels (S+Sh+E)*</span> <span>₹ 4000/-</span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Reels (Sh+E)*</span> <span>₹ 3500/-</span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Reels (Basic Edit)</span> <span>₹ 900/-</span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Reels (Viral Edit)</span> <span>₹ 1800/-</span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Reels (9 Grid)</span> <span>₹ 30000/-</span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Reels (12 Grid)</span> <span>₹ 42000/-</span></li>
                        </ul>
                        <p className="mt-8 text-xs text-foreground/60 italic leading-relaxed pt-2">
                            *S – Scripting; Sh – Shooting; E – Editing | Reels duration up to 120 seconds
                        </p>
                    </div>

                    {/* Long Form Content */}
                    <div className="bg-[#1c1c1c] rounded-3xl p-8 md:p-10 border border-border/40 relative shadow-2xl flex flex-col hover:border-accent/50 transition-colors duration-300">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-heading font-black text-accent mb-4 uppercase">Long Form Content</h3>
                            <span className="text-xs text-foreground/50 italic block">(Rates are on per video basis)</span>
                        </div>
                        <ul className="space-y-4 text-foreground/80 text-sm font-medium flex-grow">
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Video (S+Sh+E)*</span> <span>₹ 8000/-</span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Video (Sh+E)*</span> <span>₹ 7500/-</span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Video Edit Basic</span> <span>₹ 2100/-</span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Trend Video Edit</span> <span>₹ 4500/-</span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Video Edit Adv</span> <span>₹ 6500/-</span></li>
                        </ul>
                        <p className="mt-8 text-xs text-foreground/60 italic leading-relaxed pt-2">
                            *S – Scripting; Sh – Shooting; E – Editing | Reels duration up to 120 seconds
                        </p>
                    </div>

                    {/* Static Content */}
                    <div className="bg-[#1c1c1c] rounded-3xl p-8 md:p-10 border border-border/40 relative shadow-2xl flex flex-col hover:border-accent/50 transition-colors duration-300">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-heading font-black text-accent mb-4 uppercase">Static Content</h3>
                            <span className="text-xs text-foreground/50 italic block">(Rates are on per creative basis)</span>
                        </div>
                        <ul className="space-y-4 text-foreground/80 text-sm font-medium flex-grow">
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Static post</span> <span>₹ 800</span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Illustration</span> <span>₹ 1600</span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Carousel</span> <span className="text-right">₹ 3200<br /><span className="text-xs opacity-60 font-normal">(up to 8 slides)</span></span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Stories</span> <span className="text-right">₹ 1800<br /><span className="text-xs opacity-60 font-normal">(for set of 6)</span></span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> Reel cover</span> <span>₹ 600</span></li>
                            <li className="flex justify-between border-b border-border/30 pb-2"><span className="flex gap-2"><span className="text-accent">•</span> YT thumbnail</span> <span>₹ 750</span></li>
                        </ul>
                    </div>

                    {/* Other types of Content */}
                    <div className="bg-[#1c1c1c] rounded-3xl p-8 md:p-10 border border-border/40 relative shadow-2xl flex flex-col hover:border-accent/50 transition-colors duration-300">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-heading font-black text-accent mb-4 uppercase">Other types of Content</h3>
                            <span className="text-xs text-foreground/50 italic block">(Rates are on per content basis)</span>
                        </div>
                        <ul className="space-y-4 text-foreground/80 text-sm font-medium flex-grow">
                            <li className="flex flex-col border-b border-border/30 pb-3">
                                <span className="flex justify-between w-full"><span className="flex gap-2"><span className="text-accent">•</span> Live streaming</span> <span>₹10000</span></span>
                                <span className="text-xs opacity-60 pl-4 mt-1">(Shoot + Management)</span>
                            </li>
                            <li className="flex flex-col border-b border-border/30 pb-3">
                                <span className="flex gap-2 leading-relaxed"><span className="text-accent">•</span> Influencer - 20% cut on Influencer rate</span>
                                <span className="text-xs opacity-60 pl-4 mt-1">(Collab + Management)</span>
                            </li>
                            <li className="flex flex-col border-b border-border/30 pb-3">
                                <span className="flex justify-between w-full"><span className="flex gap-2"><span className="text-accent">•</span> Product Reels</span> <span>₹ 15000</span></span>
                                <span className="text-xs opacity-60 pl-4 mt-1">(4 Reels ft. Product)</span>
                            </li>
                            <li className="flex justify-between border-b border-border/30 pb-3 mt-3"><span className="flex gap-2"><span className="text-accent">•</span> UGC Videos</span> <span>₹ 3500</span></li>
                            <li className="flex flex-col pt-2">
                                <span className="flex gap-2 leading-relaxed"><span className="text-accent">•</span> Brand deals for creators - 20% cut on the deal</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Floating Contact Button */}
            {/* Floating Contact Button */}
            <Link
                href="/#contact"
                className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-accent text-background px-6 py-4 rounded-full shadow-[0_4px_30px_rgba(214,255,0,0.3)] hover:shadow-[0_4px_40px_rgba(214,255,0,0.5)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
                <span className="font-bold text-sm tracking-widest uppercase">Contact Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform duration-300">
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
            </Link>
        </div>
    )
}
