import Image from "next/image";
import type { BlogImage as BlogImageType } from "@/src/data/blog";

export function BlogImage({
  image,
  compact = false,
  frameless = false
}: {
  image: BlogImageType;
  compact?: boolean;
  frameless?: boolean;
}) {
  return (
    <figure className={frameless ? "overflow-hidden" : "overflow-hidden rounded-[1.5rem] border border-softborder bg-white shadow-sm"}>
      <div className={`photo-placeholder group/image relative grid ${compact ? "aspect-[16/9]" : "aspect-[16/9]"} place-items-end overflow-hidden p-4`}>
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={compact ? "(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 768px, 100vw"}
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={image.alt}
            className="absolute inset-0"
            data-placement={image.placement}
            data-prompt={image.prompt}
          />
        )}
        {!image.src ? (
          <div className="relative grid max-w-[82%] gap-2 rounded-2xl bg-white/90 p-4 text-left shadow-[0_18px_44px_rgba(8,43,69,0.16)] backdrop-blur">
            <span className="text-xs font-black uppercase tracking-[0.14em] text-service">
              South Florida photo slot
            </span>
            <span className="text-sm font-black leading-5 text-navy">{image.alt}</span>
          </div>
        ) : null}
      </div>
      {!frameless ? (
        <figcaption className="border-t border-softborder p-4 text-sm font-bold leading-6 text-navy">
          {image.caption || image.alt}
        </figcaption>
      ) : null}
    </figure>
  );
}
