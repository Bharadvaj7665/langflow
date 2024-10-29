import ShadTooltip from "@/components/shadTooltipComponent";
import ForwardedIconComponent from "../../../../../../../components/genericIconComponent";
import { Button } from "../../../../../../../components/ui/button";

const UploadFileButton = ({
  fileInputRef,
  handleFileChange,
  handleButtonClick,
  lockChat,
}) => {
  return (
    <ShadTooltip
      styleClasses="z-50"
      side="right"
      content="Attach image (png, jpg, jpeg)"
    >
      <div>
        <input
          disabled={lockChat}
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <Button
          disabled={lockChat}
          className={`rounded-md bg-muted p-1 font-bold transition-all ${
            lockChat ? "cursor-not-allowed" : "hover:text-muted-foreground"
          }`}
          onClick={handleButtonClick}
          unstyled
        >
          <ForwardedIconComponent name="Image" />
        </Button>
      </div>
    </ShadTooltip>
  );
};

export default UploadFileButton;
