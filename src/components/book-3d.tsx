"use client";

import Image from "next/image";
import { prefix } from "@/lib/utils";

type Book3DProps = {
    title: string;
    image?: string;
    onSelect?: () => void;
    isActive?: boolean;
};

export function Book3D({ title, image, onSelect, isActive }: Book3DProps) {
    return (
        <button
            type="button"
            onClick={onSelect}
            className="group relative w-full cursor-pointer focus:outline-none"
            aria-label={title}
        >
            <div className="relative h-36 w-full [perspective:1200px] sm:h-40">
                <div
                    className={`relative h-full w-full transform rounded-xl border border-violet-600/60 bg-slate-950/90 shadow-xl shadow-slate-950/70 transition-transform duration-500 ease-out group-hover:shadow-2xl group-hover:shadow-slate-950/80 ${isActive
                        ? "-translate-y-2 rotate-y-0"
                        : "translate-y-0 -rotate-y-[20deg]"
                        }`}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Spine */}
                    <div className="absolute inset-y-2 left-1 w-1 rounded-sm bg-violet-900/80" />

                    {/* Cover image or fallback */}
                    {image ? (
                        <Image
                            src={prefix(image)}
                            alt={title}
                            fill
                            className="rounded-xl object-cover"
                            sizes="(min-width: 1024px) 140px, (min-width: 640px) 120px, 96px"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center rounded-xl bg-gradient-to-br from-violet-900 via-indigo-900 to-indigo-950">
                            <span className="px-3 text-center text-xs font-serif font-semibold text-slate-100 line-clamp-3">
                                {title}
                            </span>
                        </div>
                    )}
                </div>

                {/* Shadow */}
                <div
                    className={`pointer-events-none absolute -bottom-3 left-4 right-4 h-3 rounded-full bg-slate-950/90 shadow-lg shadow-slate-950/80 transition-all duration-500 ease-out ${isActive ? "scale-75 opacity-80" : "scale-100 opacity-100"
                        }`}
                />
            </div>
        </button>
    );
}
