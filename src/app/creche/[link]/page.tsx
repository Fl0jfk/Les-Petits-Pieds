"use client";

import { useData } from "@/app/contexts/data";
import { useEffect, useState } from "react";
import PersonalList from "@/app/components/List/PersonalList";

type Creche = {
    id: number;
    name: string;
    img: string;
    shortDescription: string;
    description: string;
    link: string;
    mapLink:string;
    address:string;
    team:any; 
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
        <main className="md:pt-[10vh] sm:pt-[10vh] flex flex-col justify-center items-center max-w-[1200px] mx-auto gap-4">
            <h1 className="text-black text-4xl">{crèche.name}</h1>
            <div className="w-full h-[600px] px-4 flex flex-col items-center gap-4 mt-4">
                <h2 className="text-3xl">La crèche</h2>
                <p>Photos de la crèche</p>
            </div>
            <div className="w-full px-4 flex flex-col items-center gap-4">
                <h2 className="text-3xl">Notre équipe</h2>
                <PersonalList team={crèche.team}/>
            </div>
            <div className="w-full px-4 flex flex-col items-center gap-4">
                <h2 className="text-3xl">Les activités de la semaine</h2>
                A raccorder aux différentes pages Facebook
            </div>
            <div className="w-full h-[600px] px-4 flex flex-col items-center gap-4">
                <h2 className="text-3xl">Nous trouver</h2>
                <iframe src={crèche.mapLink} className="w-full h-full rounded-2xl" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
                <p>Nous sommes situés au {crèche.address}.</p>
            </div>
        </main>
    );
}