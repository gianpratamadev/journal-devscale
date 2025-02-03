import {
  Button,
  Card,
  Form,
  CardHeader,
  CardFooter,
  Image,
} from "@heroui/react";

import { FormDelete } from "./form-delete";

export const DataList = async () => {
  const res = await fetch("https://v1.appbackend.io/v1/rows/KYRr3v8JcbFm");
  const { data } = await res.json();

  return (
    <section className="grid gap-4 md:grid-cols-3">
   {data.map((data) => {
          return (
            <Card
              isFooterBlurred
              key={data._id}
              className="w-100"
              radius="lg"
              shadow="lg"
            >
              <FormDelete id={data._id}/>
              <CardHeader className="absolute z-10 top-0 flex-col !items-start">
                <p className="text-tiny text-white/80 uppercase font-bold">
                  {`${data.location}, ${data.country}`}
                </p>
                <h4 className="text-white font-medium text-large">
                  {data.title}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-[300px] object-cover"
                src={`${!data.attachment ? "https://images.pexels.com/photos/1546901/pexels-photo-1546901.jpeg" : data.attachment}`}
              />
              <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 space-x-2 z-10">
                <p className="text-tiny text-white/80">{data.description}</p>
                {/* <Button
                  className="text-tiny text-white bg-black/20"
                  color="default"
                  radius="lg"
                  size="sm"
                  variant="flat"
                >
                  More
                </Button> */}
              </CardFooter>
            </Card>
          );
        })}</section>
  )
}
