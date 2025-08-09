export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>{`© ${year} Karan Kendre`}</p>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/kendrekaran" target="_blank" rel="noreferrer noopener" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href="https://github.com/kendrekaran" target="_blank" rel="noreferrer noopener" className="hover:text-foreground">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
