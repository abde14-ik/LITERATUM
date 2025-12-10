"use client";

import { useMemo } from "react";

const PARTICLE_COUNT = 20;

type FireflyConfig = {
    duration: string;
    delay: string;
    xStart: string;
    xEnd: string;
    yStart: string;
    yEnd: string;
    size: string;
    opacity: number;
};

export function Fireflies() {
    const fireflies = useMemo<FireflyConfig[]>(() => {
        const rand = (min: number, max: number) => Math.random() * (max - min) + min;
        return Array.from({ length: PARTICLE_COUNT }).map(() => ({
            duration: `${rand(10, 20).toFixed(2)}s`,
            delay: `${rand(0, 10).toFixed(2)}s`,
            xStart: `${rand(0, 100).toFixed(2)}vw`,
            xEnd: `${rand(0, 100).toFixed(2)}vw`,
            yStart: `${rand(0, 100).toFixed(2)}vh`,
            yEnd: `-${rand(10, 20).toFixed(2)}vh`,
            size: `${rand(2, 4).toFixed(2)}px`,
            opacity: parseFloat(rand(0.25, 0.8).toFixed(2)),
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            {fireflies.map((fly, index) => (
                <div
                    key={index}
                    className="animate-firefly absolute rounded-full bg-[#C5A059] shadow-[0_0_10px_#C5A059]"
                    style={{
                        width: fly.size,
                        height: fly.size,
                        opacity: fly.opacity,
                        //@ts-ignore -- custom props for keyframes
                        "--duration": fly.duration,
                        "--delay": fly.delay,
                        "--x-start": fly.xStart,
                        "--x-end": fly.xEnd,
                        "--y-start": fly.yStart,
                        "--y-end": fly.yEnd,
                    }}
                />
            ))}
        </div>
    );
}
