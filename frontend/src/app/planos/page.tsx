import ClassPlanCard from "./_components/class-plan-card";

function PlansPage() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="mt-7 space-y-2">
        <h2 className="text-primary text-2xl">Meus Plano de Aula</h2>
        <p className="text-muted-foreground">
          Gerencie todos os seus planos de aula digitalizados.
        </p>
      </div>

      <div className="mt-7 grid grid-cols-3 gap-6">
        <ClassPlanCard />
      </div>
    </div>
  );
}

export default PlansPage;
