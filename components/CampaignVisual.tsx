import Image from "next/image";

type CampaignVisualProps = {
  title: string;
  label: string;
  tone: "danger" | "cost" | "relief";
  src?: string;
};

const toneClasses = {
  danger: "from-orange-500/30 via-white/0 to-navy/25",
  cost: "from-gold/30 via-white/0 to-service/20",
  relief: "from-aqua/30 via-white/0 to-service/20"
};

export function CampaignVisual({ title, label, tone, src }: CampaignVisualProps) {
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
        <div className={`absolute inset-0 bg-gradient-to-br ${toneClasses[tone]}`} />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/25 to-transparent p-5 text-white">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cold">{label}</p>
          <figcaption className="mt-2 text-2xl font-black leading-tight">{title}</figcaption>
        </div>
      </div>
    </figure>
  );
}
