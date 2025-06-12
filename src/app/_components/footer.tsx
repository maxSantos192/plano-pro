function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-6 w-full bg-white">
      <div className="mx-auto flex max-w-7xl p-4">
        <p className="text-muted text-xs">
          © {currentYear} PlanoPro. Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
