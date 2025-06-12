import Footer from "../_components/footer";
import Header from "../_components/header";
import FormComponent from "./_components/form-component";
import PreviewComponent from "./_components/preview-component";
import UploadComponent from "./_components/upload-component";

function HomePage() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-7 space-y-2">
          <h2 className="text-primary text-2xl">Digitalizar Plano de Aula</h2>
          <p className="text-muted-foreground">
            Faça upload do seu plano de aula e transforme-o em um documento
            padronizado.
          </p>
        </div>

        <div className="mt-7 flex gap-x-6">
          <div className="flex flex-1 flex-col gap-y-6">
            <UploadComponent />
            <PreviewComponent />
          </div>
          <div className="flex-1">
            <FormComponent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
