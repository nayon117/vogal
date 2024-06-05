import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface CardProps {
  title: string;
  price: number;
  imgSrc: string;
}

const FeaturedCard = ({ title, price, imgSrc }: CardProps) => {
  return (
    <Card className="border-none">
      <CardHeader>
        <Image
          src={imgSrc}
          alt="card image"
          width={400}
          height={400}
          className="mx-auto cursor-pointer object-cover hover:scale-95"
        />
        <CardTitle className="mx-auto pt-3 text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center">${price}</p>
      </CardContent>
    </Card>
  );
};
export default FeaturedCard;
