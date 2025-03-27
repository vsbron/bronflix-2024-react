import { VideoCameraIcon } from "@heroicons/react/24/solid";

import { ModalProvider } from "@/context/ModalContext";
import { useResponsive } from "@/hooks/useResponsive";
import { TrailerButtonProps } from "@/lib/types";

import Button from "@/components/ui/Button";
import VideoTrailer from "@/components/VideoTrailer";

function TrailerButton({ video, index = false }: TrailerButtonProps) {
  // Getting the SM media query from custom hook
  const { isSM } = useResponsive();

  // Checking if we're on small window on index
  const shouldHideIcon = index && isSM;

  // Returned JSX
  return (
    <>
      <ModalProvider.Trigger name="trailer">
        <Button label="Watch the trailer">
          <span>
            {!shouldHideIcon && (
              <VideoCameraIcon className="w-8 inline-block pb-1 mr-2" />
            )}
            WATCH TRAILER
          </span>
        </Button>
      </ModalProvider.Trigger>
      <ModalProvider.Content name="trailer" alternative={true}>
        <VideoTrailer video={video!} />
      </ModalProvider.Content>
    </>
  );
}

export default TrailerButton;
