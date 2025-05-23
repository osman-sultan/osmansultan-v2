"use client";

import { Url } from "@/components/Url";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function Resume() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [resumeType, setResumeType] = useState<"fullstack" | "data">(
    "fullstack"
  );

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const resumeFile =
    resumeType === "fullstack"
      ? "/OsmanSultanResume_FS_May16th.pdf"
      : "/OsmanSultanResume_Data_May16th.pdf";

  return (
    <div>
      <p>here&apos;s my resume（˶′◡‵˶）</p>
      <div className="flex flex-row gap-2 mt-4 mb-4">
        <button
          onClick={() => setResumeType("fullstack")}
          className={`${
            resumeType === "fullstack"
              ? "bg-black text-white"
              : "bg-[#40A860] text-white"
          }`}
        >
          [fullstack]
        </button>
        <button
          onClick={() => setResumeType("data")}
          className={`${
            resumeType === "data"
              ? "bg-black text-white"
              : "bg-[#40A860] text-white"
          }`}
        >
          [data]
        </button>
      </div>
      <p>------------------------------------------------------------</p>
      {/* Use fixed container to maintain scroll position */}
      <div className="pdf-container" style={{ minHeight: "800px" }}>
        <Document
          file={resumeFile}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex justify-center items-center h-96">
              <p>Loading PDF...</p>
            </div>
          }
          error={
            <div className="flex justify-center items-center h-96">
              <p>An error occurred while loading the PDF.</p>
            </div>
          }
          noData={
            <div className="flex justify-center items-center h-96">
              <p>No PDF file selected.</p>
            </div>
          }
        >
          <Page
            key={resumeFile} // Key based on the file to force remount when file changes
            pageNumber={1}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            width={575}
            className="bg-green-200 [box-shadow:14px_14px_0px_0px_#40A860]"
            loading={
              <div className="flex justify-center items-center h-96">
                <p>Loading page...</p>
              </div>
            }
          />
        </Document>
      </div>
      {numPages && <p className="text-sm">Page 1 of {numPages}</p>}
      <div className="mt-1">
        <Url href={resumeFile}>Download Resume</Url>
      </div>
    </div>
  );
}
