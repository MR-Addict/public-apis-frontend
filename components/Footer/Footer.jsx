export default function Footer() {
  return (
    <footer className='w-full py-5 flex gap-3 items-center justify-center bg-secondary-bg shadow-xl text-gray-600'>
      <span>&copy; Copyright {new Date().getFullYear()}</span>
      <a href='https://github.com/mr-addict' target='_blank' className='underline'>
        MR-Addict
      </a>
      <a href='https://github.com/public-apis/public-apis' target='_blank' className='underline'>
        Public APIs
      </a>
    </footer>
  );
}
