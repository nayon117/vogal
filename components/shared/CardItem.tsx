import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface CardProps {
  title: string;
  btnText?: string;
  imgSrc: string;
}

const CardItem = ({ title, btnText, imgSrc }: CardProps) => {
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
        <CardTitle className="mx-auto pt-3 text-lg">{title}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button className="mx-auto border bg-white text-black hover:text-white">
          {btnText}
        </Button>
      </CardFooter>
    </Card>
  );
};
export default CardItem;
