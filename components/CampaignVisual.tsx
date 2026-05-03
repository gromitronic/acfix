import Image from "next/image";

type CampaignVisualProps = {
  title: string;
  label: string;
  tone: "danger" | "cost" | "relief";
  src?: string;
};

export function CampaignVisual({ title, src }: CampaignVisualProps) {
  return (
    <figure className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_28px_80px_rgba(8,43,69,0.16)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={title}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-contain"
          />
        ) : (
          <div className="campaign-placeholder h-full w-full" aria-hidden="true" />
        )}
      </div>
    </figure>
  );
}
