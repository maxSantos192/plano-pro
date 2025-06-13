import { Button } from "antd";
import Image from "next/image";

import { Card, CardContent } from "@/app/_components/card";

function ClassPlanCard() {
  return (
    <div>
      <Card className="max-w-[394px]">
        <CardContent>
          <span className="bg-background text-muted rounded-full px-3 py-1 text-sm">
            Matemática
          </span>
          <h3 className="text-primary mt-4 line-clamp-1 text-xl font-semibold">
            Frações e Números Decimais
          </h3>
          <p className="text-muted">5º Ano • 50 minutos</p>
          <p className="text-primary line-clamp-2">
            Introdução aos conceitos básicos de fração e sua relaçao com números
            decimais...
          </p>
          <p className="text-muted text-sm">Criado em 15/01/2025</p>

          <div className="flex gap-3">
            <Button size="large" block>
              <Image
                src="/icons/eye.svg"
                alt="Visualizar"
                width={15}
                height={12}
              />
              Visualizar
            </Button>
            <Button
              type="primary"
              size="large"
              color="default"
              variant="solid"
              block
            >
              <Image
                src="/icons/download.svg"
                alt="Visualizar"
                width={14}
                height={14}
              />
              Baixar PDF
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ClassPlanCard;
