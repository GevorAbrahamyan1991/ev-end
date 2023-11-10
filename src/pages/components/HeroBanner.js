import { Typography } from "@material-tailwind/react";

export default function HeroBanner({ description }) {
  return (
    <>
      <figure className="container relative mx-auto transition-all duration-300 bg-center bg-cover h-96 bg-hero-pattern dark:bg-footer-texture">
        {/* <img
          className="object-cover object-center w-full h-full rounded-xl"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        /> */}
        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography variant="h5" color="blue-gray">
              Sara Lamalo
            </Typography>
            <Typography color="gray" className="mt-2 font-normal">
              {description}
            </Typography>
          </div>
          <Typography variant="h5" color="blue-gray">
            Growth
          </Typography>
        </figcaption>
      </figure>
    </>
  );
}
