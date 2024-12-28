import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function FirstDisplay() {
    const words = [
        { text: "Hi" },
        { text: "Nice" },
        { text: "To" },
        { text: "Meet" },
        { text: "You", className: "text-blue-500 dark:text-blue-500" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Vortex
                backgroundColor="black"
                rangeY={400}
                particleCount={100}
                baseHue={200}
                className="flex items-center flex-col justify-center px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 w-full min-h-screen"
            >
                <h2 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center font-rubik-vinyl tracking-widest break-words">
                    GAMMABEER
                </h2>
                <div className="text-sm mt-4">
                    <TypewriterEffect words={words} className="text-xs sm:text-sm"/>
                </div>
            </Vortex>
        </div>
    );
}
