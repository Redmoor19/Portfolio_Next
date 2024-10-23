import { ImageField, KeyTextField } from "@prismicio/client";
import Image from "next/image";

export type IconCardProps = {
  title: KeyTextField;
  thumbnail: ImageField<never>;
};

const IconCard = ({ title, thumbnail }: IconCardProps) => {
  return (
    <div className="flex items-center justify-center gap-1 flex-col bg-slate-800 rounded p-3">
      {thumbnail.url && thumbnail.alt && (
        <Image
          src={thumbnail.url}
          width={100}
          height={100}
          alt={thumbnail.alt}
          className="aspect-square object-contain hover:scale-110 duration-200"
        />
      )}
      <p className="text-slate-200 font-lexend text-lg text-center">{title}</p>
    </div>
  );
};

export default IconCard;
