export default function Button({ children, variant }) {
  const base =
    'rounded-full bg-emerald-500 text-sm font-semibold uppercase tracking-wide text-emerald-50 transition-colors duration-300 hover:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + '',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5',
  };

  return <button className={styles[variant]}>{children}</button>;
}
