function VideoTrailer({ video }: { video: string }) {
  // Returned JSX
  return (
    <>
      {video !== "" ? (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="800"
            height="450"
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
      ) : (
        <div className="text-stone-50 px-20 py-8 flex justify-center items-center text-center text-3xl leading-snug">
          Sorry, no trailer available
          <br />
          Please try again later...
        </div>
      )}
    </>
  );
}

export default VideoTrailer;
