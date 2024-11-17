"use client";

import { useData } from "@/app/contexts/data";
import { useEffect, useState } from "react";
import Map from "@/app/components/Map/Map";

type Creche = {
    id: number;
    name: string;
    img: string;
    shortDescription: string;
    description: string;
    link: string;
};

interface CrèchesProps {
    params: { link: string };
}

export default function CrèchesPages({ params }: CrèchesProps) {
    const { link } = params;
    const { crèches } = useData();
    const [crèche, setCrèche] = useState<Creche | null>(null);
    useEffect(() => {
        if (crèches && link) {
            const foundCrèche = crèches.find(crèche => crèche.link === `/${link}`);
            setCrèche(foundCrèche || null);
        }
    }, [crèches, link]);
    if (!crèche) {
        return <p className="text-red-500">Crèche non trouvée.</p>;
    }
    return (
        <main className="md:pt-[10vh] sm:pt-[10vh] flex flex-col justify-center items-center">
            <h1 className="text-black text-4xl">{crèche.name}</h1>
            <div className="w-full h-[450px] px-4">
                <Map />
            </div>
        </main>
    );
}

