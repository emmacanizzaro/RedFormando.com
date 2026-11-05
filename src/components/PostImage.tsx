import Image from "next/image";

export default function PostImage({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-[#1b4a78] to-background ${className}`}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 352px, 100vw"
          className="object-cover"
        />
      )}
    </div>
  );
}
