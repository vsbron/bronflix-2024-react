import { VideoProvider } from "@/context/VideoContext";

import Button from "@/components/Button";

function TrailerButton({ video }: { video: string }) {
  // Returned JSX
  return (
    <VideoProvider>
      <VideoProvider.Trigger>
        <Button>
          <span>WATCH TRAILER</span>
        </Button>
      </VideoProvider.Trigger>
      <VideoProvider.Content video={video!} />
    </VideoProvider>
  );
}

export default TrailerButton;
