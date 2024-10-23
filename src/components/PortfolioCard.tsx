import { Content } from "@prismicio/client";
import { Simplify } from "../../prismicio-types";
import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";

type PortfolioCardProps = {
  item: Simplify<Content.PortfolioSliceDefaultPrimaryProjectsItem>;
};

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  const badges = item.packages?.split(", ");

  return (
    <div>
      {item.thumbnail.url && item.thumbnail.alt && (
        <Image
          src={item.thumbnail.url}
          alt={item.thumbnail.alt}
          className="aspect-video w-full mb-3 object-cover"
          width={500}
          height={300}
        />
      )}
      <h3 className="text-xl font-lexend text-slate-100">{item.title}</h3>
      <div className="text-slate-200 font-lexend flex justify-between gap-3 py-2">
        {item.git.link_type === "Web" && (
          <PrismicNextLink field={item.git} className="group relative">
            <div className="absolute z-10 bottom-0 bg-primary h-1 w-full group-hover:h-full duration-200" />
            <p className="relative z-20 px-5 py-1">Git repo</p>
          </PrismicNextLink>
        )}
        {item.live.link_type === "Web" && (
          <PrismicNextLink field={item.live} className="group relative">
            <div className="absolute z-10 bottom-0 bg-primary h-1 w-full group-hover:h-full duration-200" />
            <p className="relative z-20 px-5 py-1">Live app</p>
          </PrismicNextLink>
        )}
      </div>
      <p className="text-md font-grotesk text-slate-300">{item.description}</p>
      <div className="flex flex-wrap gap-3 py-3">
        {badges?.map((item) => (
          <p
            key={item}
            className="bg-primary rounded font-lexend py-1 px-2 text-sm text-slate-50"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
