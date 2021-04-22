import Header from "../components/Header";
import Image from "next/image";

export default function index() {
	return (
		<>
			<Header />
			<div className="h-screen bg-gray-100 flex flex-col justify-end items-center md:flex-row-reverse md:items-end">
				<div className="m-10 md:self-center">
					<p className="font-bold text-4xl mb-2">Ineza Bonté</p>
					<p className="text-lg">
						Fullstack Developer based in Kigali, Rwanda 🇷🇼
					</p>
				</div>
				<Image src="/images/me.png" width={627} height={551} />
			</div>
		</>
	);
}
