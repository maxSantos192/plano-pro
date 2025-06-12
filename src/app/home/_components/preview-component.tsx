import { Button, Space } from "antd";
import Image from "next/image";

import { Card, CardContent, CardTitle } from "@/app/_components/card";

function PreviewComponent() {
  return (
    <Card>
      <CardTitle>2. Preview do Documento</CardTitle>
      <CardContent>
        <div className="bg-background flex h-[400px] flex-col items-center justify-center space-y-3 rounded-lg">
          <Image
            src="/icons/pdf.svg"
            alt="Arquivo PDF"
            width={45}
            height={60}
          />
          <p className="text-muted text-lg">
            Preview do documento aparecerá aqui
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Space>
            <Button>-</Button>
            <span className="text-muted">100%</span>
            <Button>+</Button>
          </Space>

          <Space>
            <span className="text-muted">Página 1 de 3</span>
            <Button>
              <Image
                src="/icons/chevron-left.svg"
                alt="Anterior"
                width={10}
                height={16}
              />
            </Button>
            <Button>
              <Image
                src="/icons/chevron-right.svg"
                alt="Anterior"
                width={10}
                height={16}
              />
            </Button>
          </Space>
        </div>
      </CardContent>
    </Card>
  );
}

export default PreviewComponent;
