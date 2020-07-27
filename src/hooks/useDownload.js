import { useCallback } from "react";
import { saveAs } from "file-saver";

function useDownload(fileUrl) {
  return useCallback(() => saveAs(fileUrl, fileUrl.split("/").slice(-1)[0]), [
    fileUrl,
  ]);
}

export default useDownload;
