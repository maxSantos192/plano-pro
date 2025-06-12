"use client";

import { Button, Upload, UploadProps } from "antd";
import Image from "next/image";

import { Card, CardContent, CardTitle } from "@/app/_components/card";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: false,
  accept: ".pdf,.docx",
};

function UploadComponent() {
  return (
    <Card>
      <CardTitle>1. Upload do Documento</CardTitle>
      <CardContent>
        <Dragger {...props}>
          <div className="flex w-full flex-col items-center justify-center space-y-3">
            <Image
              src="/icons/upload.svg"
              alt="Upload"
              width={45}
              height={35}
            />
            <p className="text-muted text-lg">
              Arraste e solte seu arquivo aqui ou
            </p>
            <Button type="primary" size="large" color="default" variant="solid">
              Selecione um arquivo
            </Button>
            <p className="text-muted-foreground">
              Suporta PDF e DOCX (máx. 10MB)
            </p>
          </div>
        </Dragger>
      </CardContent>
    </Card>
  );
}

export default UploadComponent;
