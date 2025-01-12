import Link from 'next/link';

type Props = {
  data: {
    title: string;
    image: string;
    href: string;
  };
};

export default function ContinentCarouselCard({ data }: Props) {
  const { title, image, href } = data;
  const imageUrl = `url('${image}')`;

  return (
    <Link href={href}>
      <div
        className="relative min-w-64 h-64 bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: imageUrl }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
}
