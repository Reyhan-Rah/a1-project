interface ILoading {
  className?: string;
}

export const Loading = ({ className = "" }: ILoading) => {
  return (
    <div className={`flex items-center justify-center m-auto ${className}`}>
      <div className="md:w-24 md:h-24 w-12 h-12 border-t-4 border-b-4 border-[#20419a] dark:border-light-orange  rounded-full animate-spin" />
    </div>
  );
};
