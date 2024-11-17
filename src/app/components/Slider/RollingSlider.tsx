"use client"

import { useData } from "@/app/contexts/data";
import Slider from "./Slider";

export default function RollingSlider (){
    const { crèches } = useData();
    return (
        <section id="slideshow" className="max-w-[1500px] w-full self-center mx-auto">
            <Slider props={crèches}/>
        </section>
    )
}