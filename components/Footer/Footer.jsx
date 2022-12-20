import { footerLinks } from "./config";

export default function Footer() {
  return (
    <footer className='w-full py-7 flex flex-col gap-1 items-center justify-center bg-slate-100 shadow-xl text-slate-600'>
      <span>&copy; Copyright {new Date().getFullYear()}</span>
      <div className='flex flex-row gap-2 items-center justify-center'>
        {footerLinks.map((item, index) => (
          <a key={index} href={item.href} target='_blank' className='underline'>
            {item.title}
          </a>
        ))}
      </div>
    </footer>
  );
}
