"use client";
import {
  FileUploaderRegular,
  OutputCollectionState,
  OutputCollectionStatus,
} from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useRouter } from "next/navigation";

type Props = {
  onUpload: (imageUrl: string) => any;
};

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();

  const handleChangeEvent = async (
    e: OutputCollectionState<OutputCollectionStatus, "maybe-has-group">
  ) => {
    if (e.allEntries.length) {
      const response = await onUpload(e.allEntries[0].cdnUrl || "");
      if (response) {
        router.refresh();
      }
    }
  };

  return (
    <div>
      <FileUploaderRegular
        ctxName="my-uploader"
        pubkey="f9c26684f49b302121bc"
        onChange={handleChangeEvent}
        onFileUploadFailed={(error) => {
          console.error("IMAGE UPLOAD FAILED UPLOADCARE", error);
        }}
      />
    </div>
  );
};

export default UploadCareButton;
