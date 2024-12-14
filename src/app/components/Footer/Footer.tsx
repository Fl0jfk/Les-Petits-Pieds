import Link from "next/link"
import Image from "next/image"
import LogoFl0jfk from "../../assets/LogoFl0jfk.webp"

export default function Footer (){
    return (
        <footer className="w-full h-full p-2 flex flex-col gap-4 max-w-[1200px] mx-auto">
            <Link href={"/contact"} className="self-center transition ease-in-out duration-100 rounded-full text-2xl hover:scale-105 p-4">Contactez-nous</Link>
            <p className="self-center text-xl px-4">Horaires : du Lundi au Vendredi: 07:30-18:30 / Samedi et Dimanche : Fermé.</p>
            <Link href={"/mentionslegales"} className="self-center text-xl transition ease-in-out duration-100 hover:scale-105">Mentions légales</Link>
            <p className="self-center text-lg mt-4">
                &copy; 2024 
                <Link href={"/"}> Les Petits Pieds </Link>
                  - Tous droits réservés | Une création de 
                <Link href={"https://fl0jfk.com"} target="blank"> Fl0jfk
                    <Image className="inline" src={LogoFl0jfk} alt="Logo de Fl0jfk" width={50} height={50}/>
                </Link>
            </p>
        </footer>
    )
}