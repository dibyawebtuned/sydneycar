"use client";

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import Lightbox, { Slide } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import VideoPlugin from "yet-another-react-lightbox/plugins/video";

type ItemData = {
    img?: string;
    video?: string;
    title: string;
    rows?: number;
    cols?: number;
};

const itemData: ItemData[] = [
    { img: "/galleryimages/SCR Hero.jpeg", title: "SCR Hero", rows: 2, cols: 2 },
    { img: "/galleryimages/SRC About.jpeg", title: "SRC About" },
    { img: "/galleryimages/WhatsApp Image 2025-11-06 at 9.52.35 AM.jpeg", title: "SRC About" },
    { video: "/galleryimages/WhatsApp Video 2025-11-06 at 9.53.16 AM.mp4", title: "Workshop Video", cols: 2 },
    { img: "/galleryimages/WhatsApp Image 2025-08-25 at 1.34.19 PM (1).jpeg", title: "Workshop 2", cols: 2 },
    { img: "/galleryimages/WhatsApp Image 2025-08-25 at 1.34.18 PM (1).jpeg", title: "Team", cols: 2 },
    { img: "/galleryimages/WhatsApp Image 2025-08-25 at 1.34.17 PM.jpeg", title: "Event", rows: 2, cols: 2 },
    { img: "/galleryimages/WhatsApp Image 2025-11-06 at 9.52.09 AM.jpeg", title: "Office" },
    { img: "/galleryimages/WhatsApp Image 2025-08-25 at 1.34.17 PM (2).jpeg", title: "Office" },
    { video: "/galleryimages/WhatsApp Video 2025-11-06 at 9.51.54 AM.mp4", title: "Office Tour", cols: 2 },
];

export default function QuiltedImageList() {
    const [open, setOpen] = React.useState(false);
    const [photoIndex, setPhotoIndex] = React.useState(0);

    // ✅ Explicitly typed slides for Lightbox
    const slides: Slide[] = itemData.map((item) =>
        item.video
            ? { type: "video" as const, title: item.title, sources: [{ src: item.video, type: "video/mp4" }] }
            : { type: "image" as const, src: item.img!, title: item.title }
    );

    // Determine number of columns based on screen width
    const getCols = () => {
        if (typeof window !== "undefined") {
            const width = window.innerWidth;
            if (width <= 640) return 2;
            if (width <= 1024) return 3;
        }
        return 4;
    };

    const [cols, setCols] = React.useState(getCols());

    React.useEffect(() => {
        const handleResize = () => setCols(getCols());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Fill empty columns in last row to prevent gaps
    const filledData = React.useMemo(() => {
        const totalCols = cols;
        let currentRowCols = 0;
        const cloned: ItemData[] = [];

        itemData.forEach((item) => {
            cloned.push(item);
            currentRowCols += item.cols || 1;
            if (currentRowCols >= totalCols) currentRowCols = 0;
        });

        if (currentRowCols > 0 && currentRowCols < totalCols) {
            const emptyCols = totalCols - currentRowCols;
            for (let i = 0; i < emptyCols; i++) {
                cloned.push({
                    title: `Placeholder-${i}`,
                    cols: 1,
                });
            }
        }

        return cloned;
    }, [cols]);

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-10 sm:w-[50%]">
                    <div className="flex items-center gap-2.5">
                        <h3 className="text-[#044E9E] text-[18px] sm:text-[20px] font-semibold uppercase tracking-widest relative pb-2 inline-block whitespace-nowrap font-cabinet">
                            Gallery
                        </h3>
                        <span className="w-full h-px bg-[#9F9F9F] mb-1.5"></span>
                    </div>
                    <h1 className="uppercase text-[#1e1e1e] text-3xl sm:text-4xl lg:text-5xl font-cabinet font-extrabold mt-2">
                        Experience,{" "}
                        <span className="relative inline-block">
                            <span className="absolute left-0 bottom-0.5 w-full h-3 sm:h-3.5 bg-[#FEC130] z-0"></span>
                            <span className="relative text-[#1F4A93] font-extrabold">dedication</span>
                        </span>{" "}
                         <br className="lg:hidden" />
                        and service OF excellence captured in moments.
                    </h1>
                </div>

                {/* Image Grid */}
                <ImageList
                    variant="quilted"
                    cols={cols}
                    rowHeight={200}
                    sx={{ width: "100%", height: "auto", overflow: "hidden", borderRadius: 2 }}
                >
                    {filledData.map((item, index) =>
                        item.img || item.video ? (
                            <ImageListItem
                                key={index}
                                cols={item.cols || 1}
                                rows={item.rows || 1}
                                sx={{
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    "& img, & video": { transition: "transform 0.3s ease-in-out" },
                                    "&:hover img, &:hover video": { transform: "scale(1.05)" },
                                }}
                                onClick={() => {
                                    if (!item.img && !item.video) return;
                                    setPhotoIndex(index);
                                    setOpen(true);
                                }}
                            >
                                {item.img ? (
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={400}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    item.video && (
                                        <div className="relative w-full h-full">
                                            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                                <div className="w-16 h-16 bg-white/70 rounded-full flex items-center justify-center">
                                                    <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M4 2v20l18-10L4 2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <video src={item.video} className="object-cover w-full h-full" muted loop autoPlay />
                                        </div>
                                    )
                                )}
                            </ImageListItem>
                        ) : (
                            // Placeholder for empty columns
                            <ImageListItem
                                key={`empty-${index}`}
                                cols={item.cols || 1}
                                rows={item.rows || 1}
                                sx={{ opacity: 0, pointerEvents: "none" }}
                            />
                        )
                    )}
                </ImageList>
            </div>

            {/* Lightbox */}
            <Lightbox open={open} close={() => setOpen(false)} slides={slides} index={photoIndex} plugins={[VideoPlugin]} />
        </div>
    );
}
