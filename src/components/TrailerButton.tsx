import { VideoProvider } from "@/context/VideoContext";
import { TrailerButtonProps } from "@/lib/types";

import Button from "@/components/ui/Button";

function TrailerButton({ video }: TrailerButtonProps) {
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
