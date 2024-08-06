"use client"; // is needed only if you’re using React Server Components
import {
  FileUploaderRegular,
  OutputCollectionState,
  OutputCollectionStatus,
} from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

type Props = {
  onUpload: (
    e: OutputCollectionState<OutputCollectionStatus, "maybe-has-group">
  ) => any;
};

const UploadCareButton = ({ onUpload }: Props) => {
  return (
    <div>
      <FileUploaderRegular pubkey="f9c26684f49b302121bc" onChange={onUpload} />
    </div>
  );
};

export default UploadCareButton;
