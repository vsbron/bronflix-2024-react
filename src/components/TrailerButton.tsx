import { ModalProvider } from "@/context/ModalContext";
import { TrailerButtonProps } from "@/lib/types";

import Button from "@/components/ui/Button";
import VideoTrailer from "@/components/VideoTrailer";

function TrailerButton({ video }: TrailerButtonProps) {
  // Returned JSX
  return (
    <>
      <ModalProvider.Trigger name="trailer">
        <Button>
          <span>WATCH TRAILER</span>
        </Button>
      </ModalProvider.Trigger>
      <ModalProvider.Content name="trailer" alternative={true}>
        <VideoTrailer video={video!} />
      </ModalProvider.Content>
    </>
  );
}

export default TrailerButton;
