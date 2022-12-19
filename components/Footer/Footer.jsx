export default function Footer() {
  return (
    <footer className='w-full py-7 flex gap-3 items-center justify-center bg-slate-100 shadow-xl text-slate-600'>
      <span>&copy; Copyright {new Date().getFullYear()}</span>
      <a href='https://github.com/mr-addict' target='_blank' className='underline'>
        MR-Addict
      </a>
      <a href='https://github.com/public-apis/public-apis' target='_blank' className='underline'>
        Public APIs
      </a>
      <a href='https://github.com/mr-addict/public-apis-frontend' target='_blank' className='underline'>
        Source
      </a>
    </footer>
  );
}
