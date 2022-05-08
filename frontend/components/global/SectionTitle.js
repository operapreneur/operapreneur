export default function SectionTitle({ children }) {
  return (
    <>
      <div className="relative w-full mx-auto max-w-3xl px-4 sm:px-6 md:px-6 xl:max-w-5xl">
        {children}
        <svg className="absolute top-0 left-0 translate-y-6 h-screen" width="1px">
          <line className="stroke-2 stroke-white" x1="0" x2="0" y1="0" y2="100%"></line>
        </svg>
      </div>
      <hr className="w-screen" />
    </>
  )
}
