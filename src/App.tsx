import { Outlet, Link, NavLink } from "react-router-dom";

export default function App() {

  const links = [
    { path: '/', name: 'CSS Files' },
    { path: '/cssmodules', name: 'CSS Modules' },
    { path: '/inlinestyling', name: 'Inline Styling' },
    { path: '/stylecomponents', name: 'Style Components' },
    { path: '/tailwindcss', name: 'Tailwind CSS' },
    // { path: '/less', name: 'less' },
    // { path: '/sass', name: 'sass' },
    // { path: '/emotion', name: 'emotion' },
    // { path: '/stylable', name: 'stylable' },
  ]

  return (
    <div className='p-10 prose'>
      <h1 className='text-3xl mb-2'>React Styling</h1>
      <h2 className='text-2xl mb-5'>Diferent ways to style react components</h2>
      <nav className='  mb-5'>
        {links.map((link) => {
          return (
            <>
              <NavLink className={({ isActive }) => isActive ? 'text-white bg-slate-900 p-2 rounded-sm' : 'p-2'} to={link.path}>{link.name}</NavLink> | {" "}
            </>
          )
        })}
      </nav>
      <Outlet />
    </div>
  );
}