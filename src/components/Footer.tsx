export const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full">
      <hr />
      <div className="flex w-full justify-center p-4 bg-white items-center md:p-6 dark:bg-gray-800 h-20">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©{" "}
          <a href="#" className="hover:underline">
            AUTO1 Group
          </a>{" "}
          2018
        </span>
      </div>
    </footer>
  );
};
