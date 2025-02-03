import {
  Button,
  Card,
  Form,
  CardHeader,
  CardFooter,
  Image,
} from "@heroui/react";

export const HeartIcon = ({fill = "currentColor", filled, size, height, width, ...props}) => {
  return (
    <svg
      fill={filled ? fill : "none"}
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};


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
              <Form className="relative z-10" action={""}>
                <input defaultValue={data._id} hidden/>
                <Button isIconOnly className="absolute right-0 top-0 text-tiny" size="sm" color="danger" curs><HeartIcon /></Button>
              </Form>
              
              <CardHeader className="absolute z-20 top-0 flex-col !items-start">
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
