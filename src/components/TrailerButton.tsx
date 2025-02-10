import { ModalProvider } from "@/context/ModalContent";
import { TrailerButtonProps } from "@/lib/types";

import Button from "@/components/ui/Button";
import VideoTrailer from "./VideoTrailer";

function TrailerButton({ video }: TrailerButtonProps) {
  // Returned JSX
  return (
    <ModalProvider>
      <ModalProvider.Trigger name="trailer">
        <Button>
          <span>WATCH TRAILER</span>
        </Button>
      </ModalProvider.Trigger>
      <ModalProvider.Content name="trailer">
        <VideoTrailer video={video!} />
      </ModalProvider.Content>
    </ModalProvider>
  );
}

export default TrailerButton;
